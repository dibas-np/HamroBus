"""hamrobus URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from turtle import home
from django.contrib import admin
from django.urls import path, include
from backend.login import login_view, logout_view
from backend.routeview import routeView
from backend.signup import signup_view  
from backend.home import homeView
from django.contrib.auth.decorators import login_required

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', login_required((homeView),login_url='login')),
    path('home', login_required((homeView),login_url='login'),name='home'),
    path('login/', login_view, name="login"),
    # path('route/',routeView, name="route"),
    path('signup/', signup_view, name="signup"),
    path('backend/', include('backend.urls')),
    path('',include('ui.urls')),
]
