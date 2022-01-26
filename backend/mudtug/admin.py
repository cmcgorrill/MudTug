from django.contrib import admin

from .models import Team, Pit

class TeamAdmin(admin.ModelAdmin):
    class Meta:
        model = Team
    list_display = ('name', 'bracket_type', 'captain_name', 'captain_email', 'interpreting_requested', 'team_status', 'victories', 'updated_at')

admin.site.register(Team, TeamAdmin)

class PitAdmin(admin.ModelAdmin):
    class Meta:
        model = Pit
    list_display = ('name', 'bracket_type', 'team1', 'team2')

admin.site.register(Pit, PitAdmin)
