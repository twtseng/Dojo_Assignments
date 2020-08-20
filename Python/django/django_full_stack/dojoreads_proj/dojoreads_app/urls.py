"""login_proj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.default_view, name='login_main'),
    path('register_user', views.register_user),
    path('login_user', views.login_user),
    path('logout_user', views.logout_user),
    path('success', views.success_view),
    path('books', views.books_reviews_view, name='books_main'),
    path('books/', views.books_reviews_view, name='books_main'),
    path('books/all', views.all_books_view, name='books_all'),
    path('books/<int:book_id>', views.book_by_id, name='book_by_id'),
    path('books/add_review', views.add_review, name='add_review'),
    path('books/delete_review', views.delete_review, name='delete_review'),
    path('books/get_reviews', views.get_reviews, name='get_reviews'),
]
