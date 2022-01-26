from rest_framework import serializers
from .models import Team, Pit

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id', 'name', 'bracket_type', 'captain_name', 'captain_email', 'interpreting_requested','team_status')
				
class PitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pit
        fields = ('id', 'name', 'bracket_type', 'team1', 'team2')