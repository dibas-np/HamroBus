from rest_framework import serializers
from backend.models import Route, LoggedUser, Ticket
from django.contrib.auth.models import User
class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = '__all__'
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','password']
        extra_kwargs = {'password': {'write_only': True}}
   
class LoggedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoggedUser
        fields = ['username']

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'
