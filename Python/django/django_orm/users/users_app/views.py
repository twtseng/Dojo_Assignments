from django.shortcuts import render, HttpResponse, redirect, render
from .models import User
# Create your views here.
def default(request):
    """
    Render the page with the users and form for adding users
    """
    all_users = User.objects.all()
    context = {
        "all_users" : all_users
    }
    return render(request, 'users.html', context)

def handle_post(request):
    if (request.POST["command"] == "add_user"):
        User.objects.create(
            first_name = request.POST["first_name"],
            last_name = request.POST["last_name"], 
            email_address = request.POST["email_address"], 
            age=int(request.POST["age"])
            )
    elif (request.POST["command"] == "delete_user"):
        user_id = int(request.POST["user_id"])
        user = User.objects.get(id=user_id)
        user.delete()

    return redirect("/")