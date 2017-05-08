#Cleo Parra CIS 122
#Project4b.py Display planets_list part 2

planet_list = [ ]
planet_million_km = [ ]
planet_million_mile = [ ]

my_file = 'planets2.txt'

with open(my_file, 'r', encoding = 'utf-8') as planets_file:
    for line in planets_file:
        line = line.strip()
        line_list = line.split(',')
        
        planet = line_list[0]
        planet_distance_string = line_list[1]
        planet_distance = int(planet_distance_string)
        planet_distance_miles = int(planet_distance_string) * 0.62137

        planet_list.append(planet)
        planet_million_km.append(planet_distance)
        planet_million_mile.append(planet_distance_miles)
        #
    #
#

n =len(planet_list)
for i in range(n):
    print (planet_list[i].ljust(10), 'Average distance from the sun:',
           format(planet_million_km[i], '7f'), 'million kilometers',
           format(planet_million_mile[i], '7f'), 'million miles')


