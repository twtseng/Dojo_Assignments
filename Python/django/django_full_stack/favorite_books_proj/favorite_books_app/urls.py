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
    path('', views.default_books_view, name='books_main'),
    path('<int:book_id>', views.book_by_id, name='books_by_id'),
    path('get_books', views.get_books, name='get_books'),
    path('add_book', views.add_book, name='add_book'),
    path('toggle_favorite', views.toggle_favorite, name='toggle_favorite'),
]
