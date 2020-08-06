from django.shortcuts import render, HttpResponse, redirect

def index(request):
    if "visits" in request.session:
        request.session["visits"] += 1
    else:
        request.session["visits"] = 1

    if not "increment" in request.session:
        request.session["increment"] = 1

    if "increment_counter" in request.session:
        request.session["increment_counter"] += request.session["increment"]
    else:
        request.session["increment_counter"] = request.session["increment"]    

    return render(request, 'index.html')

def post(request):
    if "reset_visits" in request.POST:
         request.session["visits"] = 0
    if "reset_increment_counter" in request.POST:
         request.session["increment_counter"] = 0
         request.session["increment"] = int(request.POST["increment"])
    return redirect("/")

