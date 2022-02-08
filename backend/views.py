from django.shortcuts import render
from .models import Route, LoggedUser, Ticket
from .serializers import RouteSerializer, UserSerializer, LoggedUserSerializer, TicketSerializer
from rest_framework import viewsets
from django.contrib.auth.models import User

# Create your views here.
class RouteViewSet(viewsets.ModelViewSet):
    serializer_class = RouteSerializer
    queryset = Route.objects.all()

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class LoggedUserViewSet(viewsets.ModelViewSet):
    serializer_class = LoggedUserSerializer
    queryset = LoggedUser.objects.all()

class TicketViewSet(viewsets.ModelViewSet):
    serializer_class = TicketSerializer
    queryset = Ticket.objects.all()