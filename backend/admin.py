from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Route, LoggedUser
# Register your models here.

class MovieAdmin(admin.ModelAdmin):
    list = ('name', 'departure', 'destination', 'price', 'departureDate', 'vehicle', 'vehicleID')
    admin.site.register(Route)

class LoggedAdmin(admin.ModelAdmin):
    list = ('username')
    admin.site.register(LoggedUser)