from django.shortcuts import render, redirect
from .models import League, Team, Player
from django.db.models import Q

from . import team_maker

queries = {
	'all data': { 
		"leagues": League.objects.all(),
		"teams": Team.objects.all(),
		"players": Player.objects.all()},
	'...all baseball leagues' : { 
		"leagues": League.objects.filter(name__icontains='baseball'),
		"teams": [],
		"players": []},
	'...all womens leagues' : { 
		"leagues": League.objects.filter(name__icontains='women'),
		"teams": [],
		"players": []},
	'...all leagues where sport is any type of hockey' : { 
		"leagues": League.objects.filter(name__icontains='hockey'),
		"teams": [],
		"players": []},
	'...all leagues where sport is something OTHER THAN football' : { 
		"leagues": League.objects.exclude(name__icontains='football'),
		"teams": [],
		"players": []},
	'...all leagues that call themselves "conferences"' : { 
		"leagues": League.objects.filter(name__icontains='conference'),
		"teams": [],
		"players": []},
	'...all leagues in the Atlantic region' : { 
		"leagues": League.objects.filter(name__icontains='Atlantic'),
		"teams": [],
		"players": []},
	'...all teams based in Dallas' : { 
		"leagues": [],
		"teams": Team.objects.filter(location__icontains='Dallas'),
		"players": []},
	'...all teams named the Raptors' : { 
		"leagues": [],
		"teams": Team.objects.filter(team_name__icontains='Raptors'),
		"players": []},
	'...all teams whose location includes "City"' : { 
		"leagues": [],
		"teams": Team.objects.filter(location__icontains='City'),
		"players": []},
	'...all teams whose names begin with "T"' : { 
		"leagues": [],
		"teams": Team.objects.filter(team_name__istartswith='t'),
		"players": []},
	'...all teams, ordered alphabetically by location' : { 
		"leagues": [],
		"teams":  Team.objects.all().order_by('location'),
		"players": []},
	'...all teams, ordered by team name in reverse alphabetical order' : { 
		"leagues": [],
		"teams": Team.objects.all().order_by('-team_name'),
		"players": []},
	'...every player with last name "Cooper"' : { 
		"leagues":[],
		"teams": [],
		"players": Player.objects.filter(last_name__icontains='cooper')},
	'...every player with first name "Joshua"' : { 
		"leagues":[],
		"teams": [],
		"players": Player.objects.filter(first_name__icontains='Joshua')},
	'...every player with last name "Cooper" EXCEPT those with "Joshua" as the first name' : { 
		"leagues":[],
		"teams": [],
		"players": Player.objects.filter(last_name__icontains='cooper').exclude(first_name__icontains='Joshua')},
	'...all players with first name "Alexander" OR first name "Wyatt"' : { 
		"leagues":[],
		"teams": [],
		"players": Player.objects.filter(Q(first_name__icontains='Alexander') | Q(first_name__icontains='Wyatt'))},
} 
def index(request):
	context = {
		"leagues": League.objects.all(),
		"teams": Team.objects.all(),
		"players": Player.objects.all(),
	}
	if "selected_query" in request.GET:
		selected_query = request.GET["selected_query"]
		context = queries[selected_query]
	context["queries"] = list(queries.keys())
	print("in index")
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)
	return redirect("index")