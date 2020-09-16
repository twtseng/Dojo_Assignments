from django.forms import ModelForm, Form, CharField
from . import models

class MyModelForm(ModelForm):
    class Meta:
        model = models.MyModel
        fields = ['first_name', 'last_name', 'hobby']
    

class TestForm(Form):
    field1 = CharField(max_length=100)
    field2 = CharField(max_length=100)
    field3 = CharField(max_length=100)
    field4 = CharField(max_length=100)

def Test():
    x = models.MyModel()
    print(f"{x.first_name} {x.last_name}")
