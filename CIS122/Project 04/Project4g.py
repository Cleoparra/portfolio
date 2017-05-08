#Cleo Parra CIS 122
#Project4g.py Read data from yob1994.txt to a txt file

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
def write_stuff(results_list):
    ##pick the name of file
    users_name = input('Your File Name: ')
    outfilename = users_name + '.txt'
    with open(outfilename, 'w', encoding ='utf-8') as out_file:
        for sublist in results_list:
            #name,gender,count = sublist
            name = sublist[0].title()
            gender = sublist[1]
            count = sublist[2]
            baby_count = str(count)
            out_record = name + ',' +    \
                         gender + ',' +     \
                         baby_count + '\n'
            out_file.write(out_record)
            #
        #
    #

print('Search for Baby Names\n')
tab='\t'
filename = 'yob1994.txt'
name_data = []
with open(filename, 'r', encoding ='utf-8') as name_file:
    for line in name_file:
        line = line.strip()
        
        line_list = line.split(',')

        name = line_list[0].lower()
        gender = line_list[1].upper()
        baby_count = int(line_list[2])
        name_data.append([name, gender, baby_count])
        #
    #
#

print('S Starts with\nE Ends with\nC Contains\nN Count\nW Write\n' + 'Q Quit\n')
choice = input('Your Choice: ').upper()
while choice !='Q':

    if choice == 'S':
        what = input('Letters to match: ').lower()
        results_list = search_starts_with(name_data, what)
        display_results(results_list)
        
    elif choice == 'E':
        what = input('Letters to match: ').lower()
        resuls_list = search_ends_with(name_data, what)
        display_results(results_list)
        
    elif choice == 'C':
        what = input('Letters to match: ').lower()
        resuls_list = search_contains(name_data, what)
        display_results(results_list)
            
    elif choice == 'W':
        write_stuff(results_list)

        
    elif choice == 'N':
        lower_limit = get_int('Count at least: ')
        upper_limit = get_int('Count not over: ')
        results_list = search_count(name_data, lower_limit, upper_limit)
        display_results(results_list)

    print()
    print('S Starts with\n'+
          'E Ends With\n' +
          'C Contains\n' +
          'N Count\n' +
          'W Write\n' +
          'Q Quit\n')
    choice =input('Your choice: ').upper()
    
    
    

        
