from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from . import models
from login_app.models import User
import sys

# Create your views here.
def default_books_view(request):
    return render(request, 'books_default.html')

def book_by_id(request, book_id):
    book = models.Book.objects.get(id = int(book_id))
    context = {
        'book' : book,
        'likers' : book.users_who_like.all()
    }
    return render(request, 'book_by_id.html', context)

def toggle_favorite(request):
    response = {
        'status' : 'unknown',
        'message' : 'unknown status'
    }
    try:
        user_email = request.POST["user_email"]
        book_id = int(request.POST["book_id"])
        is_favorite = request.POST["is_favorite"]
        print(f"In toggle_favorite, user_email:{user_email} book_id:{book_id} is_favorite:{is_favorite}")
        user = User.objects.filter(email__iexact=user_email).first()
        book = models.Book.objects.get(id=book_id)

        if is_favorite == "true":
            if not book.users_who_like.filter(id=user.id).exists():
                book.users_who_like.add(user)
        else:
            if book.users_who_like.filter(id=user.id).exists():
                book.users_who_like.remove(user)

        response['status'] = "succeeded"
        response['message'] = f"Favorite toggled for book:{book.title} user:{user.email} favorite:{is_favorite}"
    except:
        response['status'] = "failed"
        response['message'] = str(sys.exc_info()[0])

    return JsonResponse(response)
def add_book(request):
    print("In add_book")
    response = {
        'status' : 'unknown',
        'message' : 'unknown status'
    }
    try:
        uploaded_by_email = request.POST["uploaded_by_email"]
        title = request.POST["title"]
        desc = request.POST["desc"]
        user = User.objects.filter(email__iexact=uploaded_by_email).first()
        models.Book.objects.create(title=title, desc=desc, uploaded_by=user)
        response['status'] = "succeeded"
        response['message'] = f"Book added by user {user_email}"
    except:
        response['status'] = "failed"
        response['message'] = str(sys.exc_info()[0])

    return JsonResponse(response)

def get_books(request):
    print("In get_books")
    books_data = []
    if 'user_email' in request.session:
        user = User.objects.filter(email__iexact=request.session['user_email']).first()
        for book in models.Book.objects.all():
        
            books_data.append({ 
                'id': book.id, 
                'title' : book.title,
                'uploaded_by' : book.uploaded_by.email,
                'favorite' : book.users_who_like.filter(id=user.id).exists(),
                })
    else:
        for book in models.Book.objects.all():
            books_data.append({ 
            'id': book.id, 
            'title' : book.title,
            'uploaded_by' : book.uploaded_by.email,
            'favorite' : False,
            })

    return JsonResponse({ 'books' : books_data })