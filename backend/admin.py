from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Route, LoggedUser, Ticket, NewsLetter, SystemInfo, Contact
# Register your models here.

class RouteAdmin(admin.ModelAdmin):
    list = ('name', 'departure', 'destination', 'price', 'departureDate', 'vehicle', 'vehicleID')
    admin.site.register(Route)

class LoggedAdmin(admin.ModelAdmin):
    list = ('username')
    admin.site.register(LoggedUser)

class TicketAdmin(admin.ModelAdmin):
    list = ('username','routeId','bookedSeat1','bookedSeat2','payment','amount', 'destination','departure','arrival')
    admin.site.register(Ticket)

class NewsLetterAdmin(admin.ModelAdmin):
    list = ('email')
    admin.site.register(NewsLetter)

class SystemInfoAdmin(admin.ModelAdmin):
    list = ('about','weblink')
    admin.site.register(SystemInfo)

class ContactAdmin(admin.ModelAdmin):
    list = ('name','email','message')
    admin.site.register(Contact)