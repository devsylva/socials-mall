# Generated by Django 4.1.5 on 2023-10-04 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0038_rename_transacton_ref_payment_transaction_ref"),
    ]

    operations = [
        migrations.AddField(
            model_name="payment",
            name="confirmed",
            field=models.BooleanField(default=False),
        ),
    ]