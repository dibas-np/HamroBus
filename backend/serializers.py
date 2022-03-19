from rest_framework import serializers
from backend.models import Route, LoggedUser, Ticket, NewsLetter
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
        fields = ['username','isadmin','loggedin']

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'

class NewsLetterSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsLetter
        fields = '__all__'