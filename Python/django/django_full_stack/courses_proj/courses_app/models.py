from django.db import models

# Create your models here.

class Course(models.Model):
    course_name = models.CharField(max_length=80)
    description = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)
    
class Comment(models.Model):
    comment_text = models.TextField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="comments")
    date_added = models.DateTimeField(auto_now_add=True)