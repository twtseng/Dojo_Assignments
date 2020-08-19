from django.db import models

# Create your models here.
class UserManager(models.Manager):
    def validate(self, first_name, last_name, email):
        validation_errors = []
        if self.filter(email__iexact=email).exists():    
            validation_errors.append(f"There was already a user with email [{email}]! Registration denied!")
        return validation_errors

class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password_hash = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()