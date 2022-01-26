from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from MudTug import views

router = routers.DefaultRouter()
router.register(r'teams', views.TeamView, 'team')
router.register(r'pits', views.PitView, 'pit')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]