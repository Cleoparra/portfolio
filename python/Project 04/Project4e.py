#Cleo Parra CIS 122
#Project4d.py switch to the yob1994.txt, exact name


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

print('1 Exact\n' + '2 Quit\n')
choice = input('Your Choice: ').upper()
while choice !='2':
        
    if choice == '1':
        what = input('Letters to match: ').lower()
        results_list = search_contains(name_data, what)
        if len(results_list) < 1:
            print('Not in babylist')
        else:
            display_results(results_list)
        

    print()
    print('1 Contains\n' +
          '2 Quit\n')
    choice =input('Your choice: ').upper
    


        
