# Generated by Django 3.2.11 on 2022-04-12 03:10

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0026_faq'),
    ]

    operations = [
        migrations.AddField(
            model_name='loggeduser',
            name='id',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]