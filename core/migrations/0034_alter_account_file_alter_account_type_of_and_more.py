# Generated by Django 4.1.5 on 2023-04-27 20:13

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0033_purchasehistory_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='file',
            field=models.FileField(default=django.utils.timezone.now, upload_to='logs'),
        ),
        migrations.AlterField(
            model_name='account',
            name='type_of',
            field=models.CharField(choices=[('Facebook', 'Facebook'), ('Facebook Dating', 'Facebook Dating'), ('Google Voice', 'Google Voice'), ('Instagram', 'Instagram'), ('Twitter', 'Twitter'), ('VPN', 'VPN'), ('Facebook ADS', 'Facebook ADS'), ('Netflix', 'Netflix'), ('Tiktok', 'Tiktok'), ('Gmail', 'Gmail'), ('Snapchat', 'Snapchat'), ('OLD FANPAGE', 'OLD FANPAGE'), ('Linkedin', 'Linkedin')], default=('Facebook', 'Facebook'), max_length=150),
        ),
        migrations.AlterField(
            model_name='category',
            name='type_of',
            field=models.CharField(choices=[('Facebook', 'Facebook'), ('Facebook Dating', 'Facebook Dating'), ('Google Voice', 'Google Voice'), ('Instagram', 'Instagram'), ('Twitter', 'Twitter'), ('VPN', 'VPN'), ('Facebook ADS', 'Facebook ADS'), ('Netflix', 'Netflix'), ('Tiktok', 'Tiktok'), ('Gmail', 'Gmail'), ('Snapchat', 'Snapchat'), ('OLD FANPAGE', 'OLD FANPAGE'), ('Linkedin', 'Linkedin')], default=('Facebook', 'Facebook'), max_length=150),
        ),
    ]