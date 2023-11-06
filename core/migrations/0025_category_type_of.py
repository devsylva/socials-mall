# Generated by Django 4.1.5 on 2023-04-15 20:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0024_category_remove_account_category_account_category"),
    ]

    operations = [
        migrations.AddField(
            model_name="category",
            name="type_of",
            field=models.CharField(
                choices=[
                    ("Facebook", "Facebook"),
                    ("Google Voice", "Google Voice"),
                    ("Instagram", "Instagram"),
                    ("Twitter", "Twitter"),
                    ("Premium VPN", "Premium VPN"),
                    ("Facebook ADS", "Facebook ADS"),
                    ("Netflix", "Netflix"),
                    ("Tiktok", "Tiktok"),
                    ("Gmail", "Gmail"),
                    ("Snapchat", "Snapchat"),
                ],
                default=("Facebook", "Facebook"),
                max_length=150,
            ),
        ),
    ]
