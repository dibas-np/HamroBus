# Generated by Django 4.0 on 2022-02-08 10:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0007_remove_route_seat31_remove_route_seat32_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
                ('routeId', models.IntegerField()),
                ('bookedSeat1', models.CharField(default='', max_length=10)),
                ('bookedSeat2', models.CharField(default='', max_length=10)),
            ],
        ),
    ]
