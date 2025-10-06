from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r"access-infor", views.AccessInforViewSet)
urlpatterns = [
    path("", include(router.urls)),
    path("flights/", views.Flight.as_view(), name='flights'),
]