# Generated by Django 4.1.5 on 2023-03-09 22:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("account", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="user",
            name="profile_pic",
        ),
    ]
