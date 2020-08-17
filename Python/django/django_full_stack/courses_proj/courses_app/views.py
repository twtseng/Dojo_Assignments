from django.shortcuts import render, HttpResponse, redirect
from django.urls import reverse
from django.http import JsonResponse
from . import models


# Create your views here.
def default_view(request):
    context = {
        "courses" : models.Course.objects.all()
    }
    return render(request,"default_view.html", context)

def add_course_post(request):
    print("in add_course_post")
    course_name = request.POST["name"]
    course_description = request.POST["description"]
    models.Course.objects.create(course_name=course_name, description=course_description)
    return redirect(reverse('home'))

def destroy_course_view(request, course_id):
    return HttpResponse(f"destroy_course_view[id={course_id}]")

def destroy_course_post(request, course_id):
    course = models.Course.objects.get(id=course_id)
    course.delete()
    return redirect(reverse('home'))

def comments_view(request, course_id):
    course = models.Course.objects.get(id=course_id)
    context = {
        "course" : course,
        "comments" : course.comments.all()
    }
    return render(request,"course_comments.html", context)

def add_comment_post(request, course_id):
    print(f"in add_comment_post, course_id={course_id}")
    course = models.Course.objects.get(id=course_id)
    comment_text = request.POST["comment_text"]
    models.Comment.objects.create(course=course, comment_text=comment_text)
    return redirect(f'/courses/comments/{course_id}')

def bad_request(request):
    return redirect(reverse('home'))

def get_courses(request):
    print(f"in get_courses")
    course_data = []
    for course in models.Course.objects.all():
        course_data.append({ 
            'id': course.id, 
            'course_name' : course.course_name,
            'description' : course.description,
            'date_added' : course.date_added,
            })
    return JsonResponse({ 'courses' : course_data })

def destroy_course_ajax(request, course_id):
    print(f"in destroy_course_ajax, course_id[{course_id}]")
    course = models.Course.objects.get(id=course_id)
    course.delete()
    course_data = []
    for course in models.Course.objects.all():
        course_data.append({ 
            'id': course.id, 
            'course_name' : course.course_name,
            'description' : course.description,
            'date_added' : course.date_added,
            })
    return JsonResponse({ 'courses' : course_data }) 