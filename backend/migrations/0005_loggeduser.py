# Generated by Django 4.0 on 2022-02-05 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_route_seat1_route_seat10_route_seat11_route_seat12_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='LoggedUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
            ],
        ),
    ]
