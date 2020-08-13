from leagues.models import *
from django.db.models import Exists
from django.db.models import Q, Count

# Teams that Samuel Evans played on
teams = Player.objects.filter(first_name__iexact='Samuel', last_name__iexact='Evans')[0].all_teams.all()
for t in teams:
    print(f"{t.team_name}")



# for p in Player.objects.filter(all_teams__in=teams):
#     for t in p.all_teams.all():
#         print(f"Player name: {p.first_name} {p.last_name} Team: {t.team_name}")

# for p in Player.objects.filter(all_teams__in=Player.objects.filter(first_name__iexact='Samuel', last_name__iexact='Evans')[0].all_teams.all()):
#     for t in p.all_teams.all():
#         print(f"Player name: {p.first_name} {p.last_name} Team: {t.team_name}")

# items = [{ "team_name": t.team_name, "first_name":p.first_name, "last_name": p.last_name } for p in Player.objects.all() for t in p.all_teams.all() ]
# for i in items:
#     print(i)

#	'...all teams that have had 12 or more players, past and present. (HINT: Look up the Django annotate function.)' : { 
items=[{'location':t.location, 'team_name':f"{t.team_name} PlayerCount={t.num_all_players}", 'league' : t.league } for t in Team.objects.annotate(num_all_players=Count('all_players'))  if t.num_all_players >= 12]
for i in items:
    print(i)
		