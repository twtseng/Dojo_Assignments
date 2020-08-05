from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, 'index.html')

def create_user(request):
    print("=== POST INFO ===")
    print(request.POST)
    request.session['name'] = request.POST["name"]
    request.session['email'] = request.POST["email"]
    return redirect('/showform')

def show_form(request):
    return render(request, 'show.html')