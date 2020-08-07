from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return HttpResponse('placeholder to later display a list of all blogs')

def new(request):
    return HttpResponse('placeholder to later create new blog')

def create(request):
    return redirect('/blogs')

def show(request, num):
    return HttpResponse(f'placeholder to display blog number: {num}')

def edit(request, num):
    return HttpResponse(f'placeholder to edit blog number: {num}')

def destroy(request, num):
    return redirect('/blogs')
