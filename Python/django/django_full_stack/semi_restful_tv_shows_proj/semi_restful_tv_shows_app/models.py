from django.db import models

# Create your models here.
class Network(models.Model):
    name = models.CharField(max_length=50)

class Show(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    network = models.ForeignKey(Network, on_delete=models.CASCADE, related_name="shows")
    release_date = models.DateTimeField()