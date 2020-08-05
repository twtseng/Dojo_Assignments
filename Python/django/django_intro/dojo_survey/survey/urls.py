from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.survey_form),
    path('submitsurvey', views.survey_post),
    path('display_survey', views.display_survey),
]