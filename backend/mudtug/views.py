from django.shortcuts import render
from rest_framework import viewsets
from .models import Team
from .serializers import TeamSerializer

class TeamView(viewsets.ModelViewSet):
    serializer_class = TeamSerializer
    queryset = Team.objects.all()