# Generated by Django 3.2 on 2021-04-30 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
