from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def survey_form(request):
    return render(request, 'survey.html')

def survey_post(request):
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comments'] = request.POST['comments']
    return redirect('/display_survey')

def display_survey(request):
    return render(request, 'display_survey.html')