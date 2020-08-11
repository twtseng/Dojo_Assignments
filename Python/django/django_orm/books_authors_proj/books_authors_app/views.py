from django.shortcuts import render, HttpResponse

# Create your views here.
def default_view(request):
    return HttpResponse('books_authors_app default_view')