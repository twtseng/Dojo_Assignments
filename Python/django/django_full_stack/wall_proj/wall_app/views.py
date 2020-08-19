from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from . import models
from login_app.models import User
import sys

# Create your views here.
def default_view(request):
    return render(request, 'wallapp_default.html')

def add_message(request):
    response = {
        'status' : 'unknown',
        'message' : 'unknown status'
    }
    try:
        user_email = request.session["user_email"]
        message_text = request.POST["message_text"]
        user = User.objects.filter(email__iexact=user_email).first()
        models.Message.objects.create(user=user, message=message_text)
        response['status'] = "succeeded"
        response['message'] = f"Created message for user {user_email}"
    except:
        response['status'] = "failed"
        response['message'] = str(sys.exc_info()[0])

    return JsonResponse(response)

def add_comment(request):
    response = {
        'status' : 'unknown',
        'message' : 'unknown status'
    }
    try:
        user_email = request.session["user_email"]
        message_id = request.POST["message_id"]
        comment_text = request.POST["comment_text"]
        user = User.objects.filter(email__iexact=user_email).first()
        message = models.Message.objects.get(id=int(message_id))
        models.Comment.objects.create(user=user, message=message, comment=comment_text)
        response['status'] = "succeeded"
        response['message'] = f"Created comment for user {user_email}"
    except:
        response['status'] = "failed"
        response['message'] = str(sys.exc_info()[0])

    return JsonResponse(response)
def get_messages(request):
    print(f"in get_messages")
    message_data = []
    for message in models.Message.objects.all():
        comments=[]
        for comment in message.comments.all():
            comments.append(f"{comment.user.email} {comment.created_at} : {comment.comment}")
        message_data.append({ 
            'id': message.id, 
            'user_email' : message.user.email,
            'message_text' : message.message,
            'comments' : comments,
            'created_at' : message.created_at,
            })
    return JsonResponse({ 'messages' : message_data })