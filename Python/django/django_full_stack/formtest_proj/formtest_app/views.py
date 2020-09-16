from django.shortcuts import render, HttpResponse
from .forms import MyModelForm, TestForm

# Create your views here.
def default(request):
    context = {
        'myform' : MyModelForm(auto_id=True),
        'testform' : TestForm()
    }
    return render(request, 'index.html', context)