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

class AuthorManager(models.Manager):
    def validate(self, name):
        validation_errors = []
        if self.filter(name__iexact=name).exists():    
            validation_errors.append(f"There was already an author with name [{name}]! Cannot add this author!")
        return validation_errors

class Author(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = AuthorManager()

class BookManager(models.Manager):
    def validate(self, title):
        validation_errors = []
        if self.filter(title__iexact=title).exists():    
            validation_errors.append(f"There was already a book with title [{title}]! Cannot add this book!")
        return validation_errors

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, related_name="books", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BookManager()

class ReviewManager(models.Manager):
    def validate(self, review_text, stars):
        validation_errors = []
        if len(review_text) < 5:    
            validation_errors.append(f"Review length must be at least 5 chars!")
        if stars < 0 or stars > 5:    
            validation_errors.append(f"Stars must be between 0 and 5!")    
        return validation_errors

class Review(models.Model):
    review_text = models.TextField()
    stars = models.IntegerField()
    created_by = models.ForeignKey(User, related_name="reviews", on_delete=models.CASCADE)
    book = models.ForeignKey(Book, related_name="reviews", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ReviewManager()


