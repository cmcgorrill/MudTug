from django.forms import ModelForm
from django import forms
from django.db import models
from django.utils import encoding
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User
import datetime

class Brackets(models.TextChoices):
        MALE = 'Male'
        FEMALE = 'Female'
        COED = 'Coed'
        
class TeamStatus(models.TextChoices):
        REGISTERED = 'Registered'
        ACTIVE = 'Active'
        DEFEATED = 'Inactive'

class Team(models.Model):
    
    def __unicode__(self):
        return self.name + ""

    name = models.CharField(max_length=120)
    name.label = 'Team Name'
    bracket_type = models.CharField(max_length=20, choices=Brackets.choices, default=Brackets.MALE)
    captain_name = models.CharField(max_length=120)
    captain_email = models.EmailField(max_length=120)
    interpreting_requested = models.BooleanField(default=False)
    interpreting_requested.label = 'Interpreting Services Requested'
    team_status = models.CharField(max_length=20, choices=TeamStatus.choices, default=TeamStatus.REGISTERED)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
		
class Pit(models.Model):
    
    def __unicode__(self):
        return self.name + ""

    name = models.CharField(max_length=120)
    team1 = models.ForeignKey(
    	Team,
    	on_delete=models.CASCADE,
			related_name='team1',
			blank=True, 
			null=True
    )
    team2 = models.ForeignKey(
    	Team,
    	on_delete=models.CASCADE,
			related_name='team2',
			blank=True, 
			null=True
    )
		