from django.db import models
from datetime import date
# Create your models here.
class Network(models.Model):
    name = models.CharField(max_length=50)

class ShowManager(models.Manager):
    def basic_validator(self, title, description, release_date):
        errors = {}
        if title == "":
            errors["title"] = "Title cannot be blank!"
        if len(description) < 10:
            errors["description"] = "Please enter a longer description, at least 10 chars" 
        if release_date > date.today():
            errors["release_date"] = "That release date is in the future! Please pick a date from the past" 
        return errors

class Show(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    network = models.ForeignKey(Network, on_delete=models.CASCADE, related_name="shows")
    release_date = models.DateTimeField()
    objects = ShowManager()

