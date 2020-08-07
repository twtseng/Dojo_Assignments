from django.shortcuts import render

# Create your views here.

from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return HttpResponse('placeholder to later display a list of all surveys')

def new(request):
    return HttpResponse('placeholder to later create new survey')

def create(request):
    return redirect('/surveys')

def show(request, num):
    return HttpResponse(f'placeholder to display survey number: {num}')

def edit(request, num):
    return HttpResponse(f'placeholder to edit survey number: {num}')

def destroy(request, num):
    return redirect('/surveys')
