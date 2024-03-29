# Generated by Django 4.0.1 on 2022-01-24 23:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('bracket_type', models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('C', 'Coed')], max_length=1)),
                ('captain_name', models.CharField(max_length=120)),
                ('captain_email', models.EmailField(max_length=120)),
                ('interpreting', models.BooleanField(default=False)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
