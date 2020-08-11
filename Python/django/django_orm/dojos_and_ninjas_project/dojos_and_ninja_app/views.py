from django.shortcuts import render, HttpResponse, redirect
from .models import Dojo, Ninja
# Create your views here.
def default_view(request):
    context = {
        "dojos" : Dojo.objects.all()
    }
    return render(request, "index.html", context)

def handle_post(request):
    if request.POST["command"] == "add_ninja":
        dojo = Dojo.objects.get(id = request.POST["dojo"])
        Ninja.objects.create(
            first_name=request.POST["first_name"],
            last_name=request.POST["last_name"], 
            dojo_id=dojo
            )
    elif request.POST["command"] == "add_dojo":
        Dojo.objects.create(
            name=request.POST["name"],
            city=request.POST["city"], 
            state=request.POST["state"], 
            desc=request.POST["desc"]
            )
    return redirect("/")