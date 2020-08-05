from django.urls import path
from . import views

urlpatterns = [
    path('', views.root),
    path('blogs', views.index),
    path('blogs/new', views.new),
    path('blogs/create', views.create),
    path('blogs/<int:blog_number>', views.blog),
    path('blogs/<int:blog_number>/edit', views.edit_blog),
    path('blogs/<int:blog_number>/delete', views.destroy_blog),
    path('blogs/json', views.json),
]