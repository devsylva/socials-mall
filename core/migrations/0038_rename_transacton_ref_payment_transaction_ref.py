# Generated by Django 4.1.5 on 2023-10-03 21:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0037_payment_delete_depositpreview"),
    ]

    operations = [
        migrations.RenameField(
            model_name="payment",
            old_name="transacton_ref",
            new_name="transaction_ref",
        ),
    ]
