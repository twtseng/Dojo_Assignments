from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.default_view),
    path('post', views.handle_post)
]