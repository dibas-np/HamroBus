from django.db import models
from backend.locationlist import LocationChoices

VEHICLE_CHOICES = [
    ('car', 'Car'),
    ('van', 'Van'),
    ('bus', 'Bus'),
]
# Create your models here.
class Route(models.Model):
    name = models.CharField(max_length=100)
    departureLocation = models.CharField(max_length=50,choices=LocationChoices,default="Kathmandu")
    destinationLocation = models.CharField(max_length=50,choices=LocationChoices,default="Pokhara")
    departureTime = models.TimeField(default='00:00:00')
    arrivalTime = models.TimeField(default='00:00:00')
    departureDate = models.DateField()
    price = models.IntegerField()
    vehicleID = models.CharField(max_length=50)
    seat1 = models.BooleanField(default=False)
    seat2 = models.BooleanField(default=False)
    seat3 = models.BooleanField(default=False)
    seat4 = models.BooleanField(default=False)
    seat5 = models.BooleanField(default=False)
    seat6 = models.BooleanField(default=False)
    seat7 = models.BooleanField(default=False)
    seat8 = models.BooleanField(default=False)
    seat9 = models.BooleanField(default=False)
    seat10 = models.BooleanField(default=False)
    seat11 = models.BooleanField(default=False)
    seat12 = models.BooleanField(default=False)
    seat13 = models.BooleanField(default=False)
    seat14 = models.BooleanField(default=False)
    seat15 = models.BooleanField(default=False)
    seat16 = models.BooleanField(default=False)
    seat17 = models.BooleanField(default=False)
    seat18 = models.BooleanField(default=False)
    seat19 = models.BooleanField(default=False)
    seat20 = models.BooleanField(default=False)
    seat21 = models.BooleanField(default=False)
    seat22 = models.BooleanField(default=False)
    seat23 = models.BooleanField(default=False)
    seat24 = models.BooleanField(default=False)
    seat25 = models.BooleanField(default=False)
    seat26 = models.BooleanField(default=False)
    seat27 = models.BooleanField(default=False)
    seat28 = models.BooleanField(default=False)
    seat29 = models.BooleanField(default=False)
    seat30 = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class LoggedUser(models.Model):
    userid = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    isadmin = models.BooleanField(default=True)
    loggedin = models.BooleanField(default=True)
    
    def __str__(self):
        return self.username

class NewsLetter(models.Model):
    email = models.EmailField()
    def __str__(self):
        return self.email

class Ticket(models.Model):
    username = models.CharField(max_length=50,default="dibas")
    routeId = models.IntegerField()
    bookedSeat1 = models.CharField(max_length=10,default="")
    bookedSeat2 = models.CharField(max_length=10,default="")
    payment = models.BooleanField(default=False)
    amount = models.IntegerField(default=0)
    departureLocation = models.CharField(max_length=50,choices=LocationChoices,default="Kathmandu")
    destinationLocation = models.CharField(max_length=50,choices=LocationChoices,default="Pokhara")
    departureTime = models.TimeField(default='00:00:00')
    arrivalTime = models.TimeField(default='00:00:00')
    departureDate = models.DateField()
    vehicleID = models.CharField(max_length=50)
    

    def __str__(self):
        return self.username