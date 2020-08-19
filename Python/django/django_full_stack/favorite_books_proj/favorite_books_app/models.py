from django.db import models
from login_app.models import User
# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    uploaded_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="books_uploaded")
    users_who_like = models.ManyToManyField(User, related_name="liked_books")


