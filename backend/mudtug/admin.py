from django.contrib import admin

from .models import Team

class TeamAdmin(admin.ModelAdmin):
    class Meta:
        model = Team
    list_display = ('name', 'bracket_type', 'captain_name', 'captain_email', 'interpreting_requested','team_status')

admin.site.register(Team, TeamAdmin)
