#Cleo Parra CIS 122
#Project4h.py Read data from http://www.cs.uoregon.edu/Classes/15W/cis122/data/yob1994.txt

import urllib.request

def get_int(promt):
    answer = input(promt + ' ')
    try:
        number = int(answer)
        return number
    except:
        print('Digits 0,1,2,3,4,5,6,7,8,9 only please')
        return get_int(promt)
    #
#
              
def search_count(name_list, at_least, not_over):
    results_list = []
    for sublist in name_list:
        count = sublist[2]
        if count >= at_least and count <= not_over:
            results_list.append(sublist)
        #
    return results_list
#


def search_starts_with(name_list, find_me):
    results_list = []
    for sublist in name_list:
        name = sublist[0]
        if name.startswith(find_me):
            results_list.append(sublist)
        #
    return results_list
#

def search_ends_with(name_list, find_me):
    results_list = []
    for sublist in name_list:
        name = sublist[0]
        if name.endswith(find_me):
            results_list.append(sublist)
        #
    return results_list
#

def search_contains(name_list, find_me):
    results_list = []
    for sublist in name_list:
        name = sublist[0]
        if find_me in name:
            results_list.append(sublist)
        #
    return results_list
#

def display_results(results_list):
    print()
    for sublist in results_list:
        name = sublist[0].title()
        gender = sublist[1]
        baby_count = int(sublist[2])
        nice_pop = format(baby_count, '10,d')

        print(name.ljust(16, ' '),\
              (gender + ', ' + str(baby_count)).ljust(24, '.'),\
              nice_pop)
        #
#

print('Search for Baby Names\n')
tab='\t'
filename = 'http://www.cs.uoregon.edu/Classes/15W/cis122/data/yob1994.txt'
name_data = []
with urllib.request.urlopen(filename) as name_file:
    for line in name_file:
        line = line.strip()
        line = line.decode('utf-8')

        
        line_list = line.split(',')

        name = line_list[0].lower()
        gender = line_list[1].upper()
        baby_count = int(line_list[2])
        name_data.append([name, gender, baby_count])
        #
    #
#

print('S Starts with\nE Ends with\nC Contains\nN Count\n' + 'Q Quit\n')
choice = input('Your Choice: ').upper()
while choice !='Q':

    if choice == 'S':
        what = input('Letters to match: ').lower()
        results_list = search_starts_with(name_data, what)
        if len(results_list) < 1:
            print('Not in babylist')
        else:
            display_results(results_list)
        
    elif choice == 'E':
        what = input('Letters to match: ').lower()
        resuls_list = search_ends_with(name_data, what)
        if len(results_list) < 1:
            print('Not in babylist')
        else:
            display_results(results_list)
        
    elif choice == 'C':
        what = input('Letters to match: ').lower()
        resuls_list = search_contains(name_data, what)
        if len(results_list) < 1:
            print('Not in babylist')
        else:
            display_results(results_list)
        
    elif choice == 'N':
        lower_limit = get_int('Count at least: ')
        upper_limit = get_int('Count not over: ')
        results_list = search_count(name_data, lower_limit, upper_limit)
        if len(results_list) < 1:
            print('Not in babylist')
        else:
            display_results(results_list)

    print()
    print('S Starts with\n'+
          'E Ends With\n' +
          'C Contains\n' +
          'N Count\n' +
          'Q Quit\n')
    choice =input('Your choice: ').upper
    
    
    

        
