from django.shortcuts import render, HttpResponse, redirect, reverse
from django.http import JsonResponse
from . import models
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