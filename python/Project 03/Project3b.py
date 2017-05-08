#Cleo Parra CIS 122
#Project3b.py Track income tax data

nameList = [ ]
incomeList = [ ]
taxDueList = [ ]

numPeople = []
totalDueList = []


def get_tax(yearly_income):
    if yearly_income <= 5000:
        return 0.0

    elif yearly_income > 5000 and yearly_income < 15000:
        return 100 + (yearly_income - 5000) * 0.010

    elif yearly_income > 15000 and yearly_income < 50000:
        return 100 + (yearly_income - 5000) * 0.015

    elif yearly_income > 50000 and yearly_income < 250000:
        return 100 + (yearly_income - 5000) * 0.020

    elif yearly_income > 250000:
        return 100 + (yearly_income - 5000) * 0.020




yes_or_no = input("Would you like to create a list to find tax inxome due? y (yes), n (no): ")

while yes_or_no == 'y':
    personName = input("Enter a the person's first Name(Don't worry about capitalization): ")
    name = personName.capitalize()
    nameList.append(name)

    yearly_income = int(input("Enter the person's income: "))
    incomeList.append(yearly_income)

    #to find tax due
    finalanswer = get_tax(yearly_income)
    taxDueList.append(finalanswer)
 
    seeList = input("Would you Like to see your the Tax income due list? yes or no? ")
    if seeList == "yes":
            print("NO:  ", "Person's Name:  ", "Income List:  ", "Taxes Due:  ")
            for i in range(len(nameList)):
                numS = ''
                if i > 10:
                    numS = 3 - 1
                elif i < 10:
                    numS = 3
                    
                namS = 15 - len(nameList[i])
                incS = 11 - len(str(incomeList[i]))
                print(i + 1, " "*numS, nameList[i], " " * namS, "$", incomeList[i], " " * incS, "$", taxDueList[i])

            print("\n", "Total People: ", len(nameList),"Total Tax Due:", sum(taxDueList), "\n")
                      

    yes_or_no = input("Would you like to continue to create a list? y (yes), n (no): ")
    

numPeople = []
totalDueList = []
