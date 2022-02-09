from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Route, LoggedUser, Ticket
# Register your models here.

class RouteAdmin(admin.ModelAdmin):
    list = ('name', 'departure', 'destination', 'price', 'departureDate', 'vehicle', 'vehicleID')
    admin.site.register(Route)

class LoggedAdmin(admin.ModelAdmin):
    list = ('username')
    admin.site.register(LoggedUser)

class TicketAdmin(admin.ModelAdmin):
    list = ('username','routeId','bookedSeat1','bookedSeat2','payment','amount')
    admin.site.register(Ticket)