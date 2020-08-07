from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return HttpResponse('placeholder to later display a list of all users')

def new(request):
    return HttpResponse('placeholder to later create new user')

def create(request):
    return redirect('/users')

def show(request, num):
    return HttpResponse(f'placeholder to display user number: {num}')

def edit(request, num):
    return HttpResponse(f'placeholder to edit user number: {num}')

def destroy(request, num):
    return redirect('/users')
