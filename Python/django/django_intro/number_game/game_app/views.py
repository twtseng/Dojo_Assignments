from django.shortcuts import render, HttpResponse, redirect
import random

# Create your views here.
def default_view(request):
    if not "random_number" in request.session:
        request.session["random_number"] = random.randint(1,10)
    if not "your_guess" in request.session:
        request.session["your_guess"] = ""   
    if not "guess_message" in request.session:
        request.session["guess_message"] = ""  
    if not "guesses_remaining" in request.session:
        request.session["guesses_remaining"] = 4
    if not "guess_message_style" in request.session:
        request.session["guess_message_style"] = ""               
    return render(request,'index.html')

def handle_post(request):


    if "reset_game" in request.POST \
        or request.session["guesses_remaining"] < 1:
        request.session.flush()
        return redirect("/")

    # Ignore post if guess is not numeric
    if not request.POST["your_guess"].isnumeric():
        return redirect("/")

    your_guess = int(request.POST["your_guess"])
    request.session["your_guess"] = your_guess

    if your_guess > request.session["random_number"]:
        request.session["guess_message"] = "Too high!!!"
        request.session["guesses_remaining"] -= 1
        request.session["guess_message_style"] = " bg-warning"
    elif your_guess < request.session["random_number"]:
        request.session["guess_message"] = "Too low!!!"
        request.session["guesses_remaining"] -= 1
        request.session["guess_message_style"] = " bg-danger"
    else:
        request.session["guess_message"] = "You guessed it!!!"
        request.session["guess_message_style"] = " bg-success"

    if request.session["guesses_remaining"] == 0 and your_guess != request.session["random_number"]:
        request.session["guess_message"] = "Too bad, you lose"
        request.session["guess_message_style"] = " bg-info"

    return redirect("/")
