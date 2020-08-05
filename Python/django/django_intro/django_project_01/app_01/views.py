from django.shortcuts import render, HttpResponse
from django.http import JsonResponse

# Create your views here.
def root(request):
    return HttpResponse("This is my root")

def index(request):
    return HttpResponse("placeholder to later display a list of all blogs")

def new(request):
    return HttpResponse("placeholder to display a new form to create a new blog")  

def create(request):
    return HttpResponse("placeholder to display a new form to create something")

def blog(request, blog_number):
    return HttpResponse(f"Blog number: {blog_number}")

def edit_blog(request, blog_number):
    return HttpResponse(f"EDIT Blog number: {blog_number}")    

def destroy_blog(request, blog_number):
    return HttpResponse(f"DESTROY Blog number: {blog_number}")  

def json(request):
    return JsonResponse({"firstName":"Joe", "lastName":"blow", "age": 33}) 