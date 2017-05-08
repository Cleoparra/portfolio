#Cleo Parra CIS 122
#Project4a.py Display planets_list


with open('planets.txt', 'r', encoding = 'utf8') as file:
    for line in file:
        line = line.strip()
        print(line)

