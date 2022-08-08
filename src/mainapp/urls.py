from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("contact/", views.contact_, name="contact"),
    path("send-message/", views.send_message, name="send-message"),
]
