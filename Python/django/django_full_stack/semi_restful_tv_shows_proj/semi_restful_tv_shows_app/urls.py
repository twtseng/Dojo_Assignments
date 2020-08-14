"""semi_restful_tv_shows_proj URL Configuration

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
    path('', views.view_shows, name='view_shows'),
    path('new', views.new_show, name='new_show'),
    path('post', views.handle_post, name='handle_post'),
    path('<int:show_id>/edit', views.edit_show, name='edit_show'),
    path('<int:show_id>', views.view_show, name='view_show'),
]
