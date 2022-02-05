from django.contrib.auth import forms
from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User
from django import forms
from .models import LoggedUser

class SignupForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username','email','password1','password2']

class LoggedUserForm(forms.ModelForm):
    class Meta:
        model = LoggedUser
        fields = ['username']