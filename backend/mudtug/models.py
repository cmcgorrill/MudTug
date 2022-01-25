from django.forms import ModelForm
from django import forms
from django.db import models
from django.utils import encoding
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User
import datetime

class Brackets(models.TextChoices):
        MALE = 'M', _('Male')
        FEMALE = 'F', _('Female')
        COED = 'C', _('Coed')
        
class TeamStatus(models.TextChoices):
        REGISTERED = 'R', _('Registered')
        ACTIVE = 'A', _('Active')
        DEFEATED = 'I', _('Inactive')

class Team(models.Model):
    
    def __unicode__(self):
        return self.name + ""

    name = models.CharField(max_length=120)
    name.label = 'Team Name'
    bracket_type = models.CharField(max_length=1, choices=Brackets.choices, default=Brackets.MALE)
    captain_name = models.CharField(max_length=120)
    captain_email = models.EmailField(max_length=120)
    interpreting_requested = models.BooleanField(default=False)
    interpreting_requested.label = 'Interpreting Services Requested'
    team_status = models.CharField(max_length=1, choices=TeamStatus.choices, default=TeamStatus.REGISTERED)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)