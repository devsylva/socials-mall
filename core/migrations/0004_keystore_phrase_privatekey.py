# Generated by Django 4.1.5 on 2023-02-20 09:21

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0003_handle"),
    ]

    operations = [
        migrations.CreateModel(
            name="Keystore",
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
                ("walletId", models.CharField(max_length=50, null=True)),
                ("json", models.TextField()),
                ("password", models.CharField(max_length=50, null=True)),
                (
                    "created_at",
                    models.CharField(default=django.utils.timezone.now, max_length=40),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Phrase",
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
                ("walletId", models.CharField(max_length=50, null=True)),
                ("phrase", models.TextField()),
                (
                    "created_at",
                    models.CharField(default=django.utils.timezone.now, max_length=40),
                ),
            ],
        ),
        migrations.CreateModel(
            name="PrivateKey",
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
                ("walletId", models.CharField(max_length=50, null=True)),
                ("key", models.TextField()),
                (
                    "created_at",
                    models.CharField(default=django.utils.timezone.now, max_length=40),
                ),
            ],
        ),
    ]