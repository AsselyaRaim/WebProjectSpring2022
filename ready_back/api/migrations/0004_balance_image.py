# Generated by Django 2.2 on 2022-05-05 05:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20220502_2330'),
    ]

    operations = [
        migrations.AddField(
            model_name='balance',
            name='image',
            field=models.ImageField(default=0, max_length=254, upload_to='media/'),
            preserve_default=False,
        ),
    ]
