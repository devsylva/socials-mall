# Generated by Django 4.1.5 on 2023-08-31 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0035_alter_account_type_of_alter_category_type_of'),
    ]

    operations = [
        migrations.CreateModel(
            name='DeliveryItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.CharField(blank=True, max_length=100, null=True)),
                ('amount', models.FloatField(default=0)),
            ],
        ),
    ]
