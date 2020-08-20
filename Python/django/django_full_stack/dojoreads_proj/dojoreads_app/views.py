from django.shortcuts import render, HttpResponse, redirect, reverse
from django.http import JsonResponse
from . import models
from django.db.models import Max, Count
import bcrypt

# Create your views here.
def print_sessions_debug_info(request,header):
    if "user_email" in request.session:
        print(f"{header}: user_email is in request.session")
    else:
        print(f"{header}: user_email is NOT in request.session")
    if "password_hash" in request.session:
        print(f"{header}: password_hash is in request.session")
    else:
        print(f"{header}: password_hash is NOT in request.session")

def default_view(request):
    print_sessions_debug_info(request,"default_view")
    if "user_email" in request.session and "password_hash" in request.session:
        email = request.session["user_email"]
        password_hash = request.session["password_hash"]
        print(f"email[{email}] password_hash[{password_hash}]")
        try:
            user = models.User.objects.get(email__iexact=email, password_hash__iexact=password_hash)
            request.session["logged_in_user"] = f"{user.first_name} {user.last_name}"
            # Redirect to the main page for this application
            return redirect(reverse('books_main'))
        except models.User.DoesNotExist:
            return render(request,'login_view.html')
    return render(request,'login_view.html')

def success_view(request):
    print_sessions_debug_info(request,"success_view")
    if "logged_in_user" in request.session:
        return redirect(reverse('books_main'))
    else:
        return redirect(reverse('login_main'))

def register_user(request):
    print_sessions_debug_info(request,"register_user")
    response = {
        'status' : 'unknown',
        'message' : 'unknown status'
    }
    if request.method == "POST":
        first_name = request.POST["first_name"]
        last_name = request.POST["last_name"]
        email = request.POST["email"]
        password = request.POST["password"]
        validation_errors = models.User.objects.validate(first_name, last_name, email)
        if len(validation_errors)>0:  
            response["status"] = "failed"
            error_string = ""
            for e in validation_errors:
                error_string += e
            response["message"] = error_string
        else:
            password_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
            models.User.objects.create(first_name=first_name, last_name=last_name, email=email, password_hash=password_hash)
            response["status"] = "succeeded"
            response["message"] = f"User with email [{email}] added successfully."
    return JsonResponse(response)

def login_user(request):
    print_sessions_debug_info(request,"login_user")
    response = {
        'status' : 'unknown',
        'message' : 'unknown status'
    }
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]
        try:
            user = models.User.objects.get(email__iexact=email)
            response["status"] = "succeeded"
            response["message"] = f"User with email [{email}] found."
            if bcrypt.checkpw(password.encode(), user.password_hash.encode()):
                response["status"] = "succeeded"
                response["message"] = f"User with email [{email}] found. And password was correct"
                
                request.session["user_email"] = email
                request.session["password_hash"] = user.password_hash
                request.session.save()
                print_sessions_debug_info(request,"login_user after login")
            else:
                response["status"] = "failed"
                response["message"] = f"User with email [{email}] found. But password was incorrect"
        except models.User.DoesNotExist:
            response["status"] = "failed"
            response["message"] = f"User with email [{email}] not found."
    return JsonResponse(response)

def logout_user(request):
    request.session.clear()
    return redirect(reverse('login_main'))
    
def all_books_view(request):
    #models.Book.objects.annotate(review_count=Count('reviews')).filter(review_count__gt=0).annotate(last_review=Max('reviews__created_at')).order_by('-last_review')
    books = models.Book.objects.all()
    context = {
        'books' : books,
    }
    return render(request,'all_books.html', context)
def star_rating_html(star_count):
    html = ""
    for i in range(5):
        if i < star_count:
            html += '<span class="fa fa-star" style="color:orange;"></span>'
        else:
            html += '<span class="fa fa-star" style="color:gray;"></span>'
    return html

def books_reviews_view(request):
    # Add review_count and last_review_time, sort by descending last_review_time
    book_queryset = models.Book.objects.annotate(review_count=Count('reviews')).annotate(last_review_time=Max('reviews__created_at')).order_by('-last_review_time','title')
    books = []
    for book in book_queryset:
        last_review = None
        if book.review_count > 0:
            last_review = book.reviews.order_by('-created_at').first()
        books.append({
            'book_id' : book.id,
            'title' : book.title,
            'author' : book.author,
            'last_review' : last_review,
            'review_count' : book.review_count,
            'stars_html'  : star_rating_html(last_review.stars) if last_review != None else "",
        })
    count = 0
    first_3_books = []
    rest_of_books = []
    for book in books:
        count += 1
        if count <= 3 and book["review_count"] > 0:
            first_3_books.append(book)
        else:
            rest_of_books.append(book)

    context = {
        'first_3_books' : first_3_books,
        'rest_of_books' : rest_of_books
    }

    return render(request,'book_reviews.html', context)

def add_book_view(request):
    return render(request,'add_book.html')

def book_by_id(request, book_id):
    book = models.Book.objects.get(id=int(book_id))
    context = {
        'book' : book
    }
    return render(request,'book_by_id.html',context)

def add_review(request):
    print("In add_review")
    response = {
        'status' : 'unknown',
        'message' : 'unknown status'
    }
    if request.method == "POST":
        book_id = int(request.POST["book_id"])
        stars = int(request.POST["stars"])
        review_text = request.POST["review_text"]
        reviewer_email = request.POST["reviewer_email"]
        user = models.User.objects.filter(email__iexact=reviewer_email).first()
        book = models.Book.objects.get(id=book_id)
        models.Review.objects.create(review_text=review_text, stars=stars, book=book, created_by=user)
        response["status"] = "succeeded"
        response["message"] = "Added review"
    return JsonResponse(response)

def delete_review(request):
    print("In delete_review")
    response = {
        'status' : 'unknown',
        'message' : 'unknown status'
    }
    if request.method == "POST":
        review_id = int(request.POST["review_id"])
        review = models.Review.objects.get(id=review_id)
        review.delete()
        response["status"] = "succeeded"
        response["message"] = "Deleted review"
    return JsonResponse(response)

def get_reviews(request):
    print("In get_reviews")
    reviews_data = []
    if request.method == "POST":
        book_id = int(request.POST["book_id"])
        book = models.Book.objects.get(id=book_id)
        for review in book.reviews.all().order_by('-created_at'):
            reviews_data.append({
                'review_id': review.id,
                'review_text': review.review_text, 
                'reviewer' : review.created_by.email,
                'stars_html' : star_rating_html(review.stars),
                'created_at' : review.created_at,
                })

    return JsonResponse({ 'reviews' : reviews_data })
