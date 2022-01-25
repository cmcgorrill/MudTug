from rest_framework import serializers
from .models import Team

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id', 'name', 'bracket_type', 'captain_name', 'captain_email', 'interpreting_requested','team_status')