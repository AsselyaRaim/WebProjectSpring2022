# Generated by Django 2.2 on 2022-05-02 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20220502_2305'),
    ]

    operations = [
        migrations.AlterField(
            model_name='portfolioelement',
            name='quantity',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='quantity',
            field=models.FloatField(null=True),
        ),
    ]
