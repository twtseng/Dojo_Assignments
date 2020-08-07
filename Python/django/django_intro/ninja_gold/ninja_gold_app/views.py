from django.shortcuts import render, HttpResponse, redirect
import random

def init_session_variables(request, force = False):
    if force or not "gold_count" in request.session:
        request.session["gold_count"] = 0
    if force or not "activity_log" in request.session:
        request.session["activity_log"] = ""

# Create your views here.
def default_view(request):
    init_session_variables(request)
    return render(request, 'index.html')

def add_gold(request, item_name, min_golds, max_golds):
    gold_count = random.randint(min_golds, max_golds)
    style = 'color: green'
    if gold_count < 0:
        style = 'color: red'
    request.session["gold_count"] += gold_count
    request.session["activity_log"] += f"<p style='{style}'>Earned {gold_count} golds from {item_name}</p>"

def handle_post(request):
    action = request.POST["action"]
    if action == "reset":
        init_session_variables(request, force=True)
    elif action == "farm":
        add_gold(request, "farm", 10, 20)
    elif action == "cave":
        add_gold(request,"cave", 5, 10)
    elif action == "house":
        add_gold(request,"house", 2, 5)
    elif action == "casino":
        add_gold(request,"casino", -50, 50)
    return redirect("/")