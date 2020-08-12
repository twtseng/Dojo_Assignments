from django.shortcuts import render, HttpResponse, redirect
from . import models

# Create your views here.
def default_view(request):

    context = {
        'authors' : models.Author.objects.all(),
        'books' : models.Book.objects.all()
    }
    if 'selected_book_id' in request.GET:
        book_id = int(request.GET['selected_book_id'])
        context['selected_book'] = models.Book.objects.get(id = book_id)
    if 'selected_author_id' in request.GET:
        context['selected_author'] = models.Author.objects.get(id = int(request.GET['selected_author_id']))

    return render(request, "books_and_authors.html", context)

def handle_post(request):
    context = {

    }
    command = request.POST["command"]
    if command == "add_author_to_book":
        author_id = int(request.POST["author_id"])
        book_id = int(request.POST["book_id"])
        author = models.Author.objects.get(id = author_id)
        book = models.Book.objects.get(id = book_id)
        print(author)
        print(book)
        book.authors.add(author)
        if "selected_author_id" in request.POST:
            return redirect(f"/?selected_book_id={book_id}&selected_author_id={request.POST['selected_author_id']}")
        else:
            return redirect(f"/?selected_book_id={book_id}")
    elif command == "add_book":
        title = request.POST["title"]
        desc = request.POST["desc"]   
        book = models.Book.objects.create(title=title, desc=desc)
        if "selected_author_id" in request.POST:
            return redirect(f"/?selected_book_id={book.id}&selected_author_id={request.POST['selected_author_id']}")
        else:
            return redirect(f"/?selected_book_id={book.id}")
    elif command == "add_author":
        first_name = request.POST["first_name"]
        last_name = request.POST["last_name"]   
        author = models.Author.objects.create(first_name=first_name, last_name=last_name)
        if "selected_book_id" in request.POST:
            return redirect(f"/?selected_author_id={author.id}&selected_book_id={request.POST['selected_book_id']}")
        else:
            return redirect(f"/?selected_author_id={author.id}")
    elif command == "add_book_to_author":
        author_id = int(request.POST["author_id"])
        book_id = int(request.POST["book_id"])
        author = models.Author.objects.get(id = author_id)
        book = models.Book.objects.get(id = book_id)
        print(author)
        print(book)
        author.books.add(book)
        if "selected_book_id" in request.POST:
            return redirect(f"/?selected_author_id={author_id}&selected_book_id={request.POST['selected_book_id']}")
        else:
            return redirect(f"/?selected_author_id={author_id}")

    return redirect("/")