# Generated by Django 4.1.5 on 2023-02-09 12:02

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0002_facebookservice_instagramservice_telegramservice_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Handle",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "description",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                ("price", models.FloatField()),
                ("username", models.CharField(blank=True, max_length=155, null=True)),
                ("password", models.CharField(blank=True, max_length=255, null=True)),
                ("is_sold", models.BooleanField(default=False)),
                (
                    "date_created",
                    models.DateTimeField(default=django.utils.timezone.now),
                ),
            ],
        ),
    ]
