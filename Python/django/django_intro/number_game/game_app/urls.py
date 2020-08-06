from django.urls import path
from . import views
urlpatterns = [
    path('', views.default_view),
    path('post', views.handle_post)
    #path('admin/', admin.site.urls),
]