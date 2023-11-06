# Generated by Django 4.1.5 on 2023-09-21 22:21

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_delete_owletaccount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='balance',
            field=models.FloatField(default=0.0, validators=[django.core.validators.MinValueValidator(limit_value=0.0)]),
        ),
    ]