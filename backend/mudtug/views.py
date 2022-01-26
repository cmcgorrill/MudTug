from django.shortcuts import render
from rest_framework import viewsets
from .models import Team, Pit
from .serializers import TeamSerializer, PitSerializer

class TeamView(viewsets.ModelViewSet):
    serializer_class = TeamSerializer
    queryset = Team.objects.all()
		
class PitView(viewsets.ModelViewSet):
    serializer_class = PitSerializer
    queryset = Pit.objects.all()