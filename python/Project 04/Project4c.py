#Cleo Parra CIS 122
#Project4c.py Read data from an Internet site
#http://robjhyndman.com/tsdldata/ecology1/hopedale.dat

import urllib.request
fur_trading_url = 'http://robjhyndman.com/tsdldata/ecology1/hopedale.dat'

print("Data on fur trading from mid-1800\'s in Canada\n")
year = 1834
data_list = [ ]

with urllib.request.urlopen(fur_trading_url) as webpage:
    for line in webpage:
        line = line.strip()
        line = line.decode('utf-8')
        if line[0] in "0123456789":
            pelts = int(line)
            data_list.append(pelts)
            #print(data_list)
        else:
            print(line)
    #
#

total = 0
print()
print('Year Pelts   Total')
for pelts in data_list:
    total += pelts
    print(year, format(pelts, '5,d'), format(total, '7,d'))
    year += 1

