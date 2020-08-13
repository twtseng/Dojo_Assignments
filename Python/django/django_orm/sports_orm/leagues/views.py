from django.shortcuts import render, redirect
from .models import League, Team, Player
from django.db.models import Q, Count


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
	'...all teams in the Atlantic Soccer Conference' : {
		"leagues":[],
		"teams": Team.objects.filter(league__name__iexact='Atlantic Soccer Conference'),
		"players":[]
	},
	'...all (current) players on the Boston Penguins' : {
		"leagues":[],
		"teams": [],
		"players": Player.objects.filter(curr_team__team_name__iexact='Penguins',
		curr_team__location__iexact='Boston' )
	},
	'...all (current) players in the International Collegiate Baseball Conference' : {
		"leagues":[],
		"teams": [],
		"players": Player.objects.filter(
			curr_team__league__name__iexact='International Collegiate Baseball Conference' )
	},
	'...all (current) players in the American Conference of Amateur Football with last name "Lopez"' : {
		"leagues":[],
		"teams": [],
		"players": Player.objects.filter(
			curr_team__league__name__iexact='American Conference of Amateur Football',
			last_name__iexact='lopez' )
	},
	'...all football players' : {
		"leagues":[],
		"teams": [],
		"players": Player.objects.filter(
			curr_team__league__sport__iexact='Football')
	},
	'...all teams with a (current) player named "Sophia"' :  {
		"leagues":[],
		"teams": Team.objects.filter(id__in = [x.curr_team.id for x in Player.objects.filter(first_name = 'Sophia')]).order_by('team_name'),
		"players": Player.objects.filter(
			first_name='Sophia').order_by('curr_team__team_name')
	},
	'...everyone with the last name "Flores" who DOESN''T (currently) play for the Washington Roughriders' : {
		"leagues":[],
		"teams": [],
		"players": Player.objects.filter(
			last_name__iexact='Flores')
			.exclude(curr_team__team_name__iexact='Roughriders', curr_team__location__iexact='Washington')
	},
	'...all teams, past and present, that Samuel Evans has played with' : {
		"leagues":[],
		"teams": Player.objects.filter(first_name__iexact='Samuel', last_name__iexact='Evans').first().all_teams.all().order_by('team_name'),
		"players": [],
		"playerallteams" : [{ "team_name": t.team_name, "first_name":p.first_name, "last_name": p.last_name , "league": t.league.name} 
							for p in Player.objects.all() for t in p.all_teams.all() 
							if t in Player.objects.filter(first_name__iexact='Samuel', last_name__iexact='Evans')[0].all_teams.all()
		]
	},
	'...all players, past and present, with the Manitoba Tiger-Cats' : {
		"leagues":[],
		"teams": [],
		"players": [],
		"playerallteams" : [{ "team_name": t.team_name, "first_name":p.first_name, "last_name": p.last_name, "league": t.league.name } 
							for p in Player.objects.all() for t in p.all_teams.all() 
							if t.team_name == 'Tiger-Cats' and t.location=='Manitoba'
		]
	},
	'...all players who were formerly (but aren''t currently) with the Wichita Vikings' :  {
		"leagues":[],
		"teams": [],
		"players": [p for p in Player.objects.all() for t in p.all_teams.all() 
							if (t.team_name == 'Vikings' and t.location=='Wichita')
							and (p.curr_team.id  != 
								Team.objects.filter(team_name__iexact='Vikings', location__iexact='Wichita').first().id
							)
		],
		"playerallteams" : [{ "team_name": t.team_name, "first_name":p.first_name, "last_name": p.last_name, "league": t.league.name } 
							for p in Player.objects.all() for t in p.all_teams.all() 
							if (t.team_name == 'Vikings' and t.location=='Wichita')
							and (p.curr_team.id  != 
								Team.objects.filter(team_name__iexact='Vikings', location__iexact='Wichita').first().id
							)
		]
	},
	'...every team that Jacob Gray played for before he joined the Oregon Colts' : {
		"leagues":[],
		"teams": [],
		"players": Player.objects.filter(first_name__iexact='Jacob', last_name__iexact='Gray'),
		"playerallteams" : [{ "team_name": t.team_name, "first_name":p.first_name, "last_name": p.last_name } 
							for p in Player.objects.filter(first_name__iexact='Jacob', last_name__iexact='Gray') 
							for t in p.all_teams.all() if t.id != p.curr_team.id
		]
	},
	'...everyone named "Joshua" who has ever played in the Atlantic Federation of Amateur Baseball Players' : {
		"leagues":[],
		"teams": [],
		"players": [p for p in Player.objects.filter(first_name__iexact='Joshua') 
							for t in p.all_teams.all() if t.league.name=='Atlantic Federation of Amateur Baseball Players'],
		"playerallteams" : [{ "team_name": t.team_name, "first_name":p.first_name, "last_name": p.last_name, "league": t.league.name } 
							for p in Player.objects.filter(first_name__iexact='Joshua') 
							for t in p.all_teams.all() if t.league.name=='Atlantic Federation of Amateur Baseball Players'
		]
	},
	'...all teams that have had 12 or more players, past and present. (HINT: Look up the Django annotate function.)' : { 
		"leagues": [],
		"teams":  [{'location':t.location, 'team_name':f"{t.team_name} PlayerCount={t.num_all_players}", 'league' : t.league } 
			for t in Team.objects.annotate(num_all_players=Count('all_players'))  
			if t.num_all_players >= 12
			],
		"players": []},
	'...all players and count of teams played for, sorted by the number of teams they''ve played for' : {
		"leagues":[],
		"teams": [],
		"players": [],
		"playerallteams" : [{ "team_name": f"CurTeam:{p.curr_team.team_name} TeamCount:{p.team_count}", "first_name":p.first_name, "last_name": p.last_name, "league": p.curr_team.league.name } 
							for p in Player.objects.annotate(team_count=Count('all_teams')).order_by('-team_count')
		]
	},
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