from django.shortcuts import render, HttpResponse, redirect
from . import models
from datetime import datetime
# Create your views here.


def view_shows(request):
    print("In view_shows")
    context = {
        "shows": models.Show.objects.all(),
    }
    return render(request, "view_shows.html", context)

def new_show(request):
    print("In new_show")
    context = {
        "add_or_edit_action": "Add",
        "networks": models.Network.objects.all(),
    }
    return render(request, "add_or_edit_show.html", context)


def edit_show(request, show_id):
    print("In edit_show")
    context = {
        "add_or_edit_action": "Edit",
        "show": models.Show.objects.get(id=show_id),
        "networks": models.Network.objects.all(),
    }
    return render(request, "add_or_edit_show.html", context)


def view_show(request, show_id):
    print("In view_show")
    context = {
        "show": models.Show.objects.get(id=show_id)
    }
    return render(request, "view_show.html", context)


def handle_post(request):
    print("In handle_post")
    if "post_action" in request.POST:
        if request.POST["post_action"] == "Add":
            title = request.POST["title"]
            description = request.POST["description"]
            network_id = int(request.POST["network_id"])
            network = models.Network.objects.get(id = network_id)
            release_date = request.POST["release_date"]
            models.Show.objects.create(
                title=title,
                description=description,
                network=network,
                release_date=release_date
            )
        if request.POST["post_action"] == "Edit":
            show_id = int(request.POST["show_id"])
            show = models.Show.objects.get(id=show_id)
            show.title = request.POST["title"]
            show.description = request.POST["description"]
            network_id = int(request.POST["network_id"])
            show.network = models.Network.objects.get(id = network_id)
            show.release_date = request.POST["release_date"]
            show.save()
                  
    if "post_action" in request.GET and request.GET["post_action"] == "Delete":
        show_id = int(request.GET["show_id"])
        show = models.Show.objects.get(id = show_id)
        show.delete()
    return redirect("/")
