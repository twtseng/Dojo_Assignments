from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from . import models

# Create your views here.
def default_view(request):
    return render(request,'login_view.html')

def success_view(request):
    return render(request,'successful_login.html')

def register_user(request):
    response = {
        'status' : 'unknown',
        'message' : 'unknown status'
    }
    if request.method == "POST":
        first_name = request.POST["first_name"]
        last_name = request.POST["last_name"]
        email = request.POST["email"]
        password = request.POST["password"]
        if models.User.objects.filter(email__iexact=email).exists():    
            response["status"] = "failed"
            response["message"] = f"User with email [{email}] already exists!"
        else:
            models.User.objects.create(first_name=first_name, last_name=last_name, email=email, password_hash=password)
            response["status"] = "succeeded"
            response["message"] = f"User with email [{email}] added successfully."
    return JsonResponse(response) 