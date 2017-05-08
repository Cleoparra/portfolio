#Project 02 part b, Cleo Parra, CIS 122

##def outline
##1 meters2feet(meters) m / 3.28084
def meters2feet(meters):
    feet = meters / 3.28084
    return round(feet, 3)

##2 miles2feet(miles) m / 5280
def miles2feet(miles):
    feet = miles / 5280
    return round(feet, 3)

##3 yards2feet(yards) y / 3
def yards2feet(yards):
    feet = yards / 3
    return round(feet, 3)

##4 kilometers2feet(kilometers) k * 3280.84
def kilometers2feet(kilometers):
    feet = kilometers * 3280.84
    return round(feet, 3)

##5 feet2meters(feet) f * 0.3048
def feet2meters(feet):
    meters = feet * 0.3048
    return round(meters, 3)

##6 feet2miles(feet)f * 5280
def feet2miles(feet):
    miles = feet * 5280
    return round(miles, 3)

##7 feet2yards(feet) f * 3
def feet2yards(feet):
    yards = feet * 3
    return round(yards, 3)

##8 feet2kilometers(feet) f / 3280.84
def feet2kilometers(feet):
    kilometers = feet / 3280.84
    return round(kilometers, 3)


##extra credit:
##9 meters2yards m * 1.09361
def meters2yards(meters):
    yards = meters * 1.09361
    return round(yards, 3)

##10 kilometers2yards k * 1093.61
def kilometers2yards(kilometers):
    kilometers = yards * 1.09361
    return round(kilometers, 3)

##11 meters2miles me * 0.000621371
def meters2miles(meters):
    miles = meters * 0.000621371
    return round(miles, 3)

##12 kilometers2miles k * 0.621371
def kilometers2miles(kilometers):
    miles = kilometers * 0.621371
    return round(miles, 3)

##13 meters2kilometers m / 1000
def meters2kilometers(meters):
    kilometers = meters / 1000
    return round(kilometers, 3)

##14 kilometers2meters k * 1000
def kilometers2meters(kilometers):
    meters = kilometers * 1000
    return round(meters, 3)

##15 yards2miles y * 0.000568182
def yards2miles(yards):
    miles = yards * 0.000568182
    return round(miles, 3)

##16 miles2yards y / 0.000568182
def miles2yards(miles):
    yards = miles / 0.000568182
    return round(yards, 3)

##17 yards2meters y / 1.09361
def yards2meters(yards):
    meters = yards / 1.09361
    return round(meters, 3)

##18 miles2meters mi / 0.000621371
def miles2meters(miles):
    meters = miles / 0.000621371
    return round(meters, 3)

##19 yards2kilometers y / 1093.61
def yards2kilometers(yards):
    kilometers = yards / 1093.61
    return round(kilometers, 3)

##20 miles2kilometers m / 0.621371
def miles2kilometers(miles):
    kilometers = miles / 0.621371
    return round(kilometers, 3)



yes_or_no = input("Convert Distances? y (yes), n (no): ")

while yes_or_no == 'y':
    print("1 Convert meters to feet")
    print("2 Convert miles to feet")
    print("3 Convert yards to feet")
    print("4 Convert kilometers to feet")
    print("5 Convert feet to meters")
    print("6 Convert feet to miles")
    print("7 Convert feet to yards")
    print("8 Convert feet to kilometers")
##extra credit:
    print("9 Convert meters to yards")
    print("10 Convert kilometers to yards 1")
    print("11 Convert meters to miles")
    print("12 Convert kilometers to miles")
    print("13 Convert meters to kilometers")
    print("14 Convert kilometers to meters")
    print("15 Convert yards to miles")	
    print("16 Convert miles to yards")
    print("17 Convert yards to meters")
    print("18 Convert miles to meters")
    print("19 Convert yards to kilometers")
    print("20 Convert miles to kilometers")




    option =input("Convert choice: ")
    print(option)
    distance = float(input("Distance to convert: "))

#1    
    if option == "1":
        finalanswer = meters2feet(distance)
        print(distance, "meters is", finalanswer, "feet.")

#2
    elif option == "2":
        finalanswer = miles2feet(distance)
        print(distance, "miles is", finalanswer, "feet.")

#3
    elif option == "3":
        finalanswer = yards2feet(distance)
        print(distance, "yards is", finalanswer, "feet.")

#4
    elif option == "4":
        finalanswer = kilometers2feet(distance)
        print(distance, "kilometers is", finalanswer, "feet.")

#5
    elif option == "5":
        finalanswer = feet2meters(distance)
        print(distance, "feet is", finalanswer, "meters.")

#6
    elif option == "6":
        finalanswer = feet2miles(distance)
        print(distance, "feet is", finalanswer, "miles.")

#7
    elif option == "7":
        finalanswer = feet2yards(distance)
        print(distance, "feet is", finalanswer, "yards.")

#8
    elif option == "8":
        finalanswer = feet2kilometers(distance)
        print(distance, "feet is", finalanswer, "kilometers.")

#9
    elif option == "9":
        finalanswer = meters2yards(distance)
        print(distance, "meters is", finalanswer, "yards.")

#10
    elif option == "10":
        finalanswer = kilometers2yards(distance)
        print(distance, "kilometers is", finalanswer, "yards.")

#11
    elif option == "11":
        finalanswer = meters2miles(distance)
        print(distance, "meters is", finalanswer, "miles.")

#12
    elif option == "12":
        finalanswer = miles2feet(distance)
        print(distance, "miles is", finalanswer, "feet.")

#13
    elif option == "13":
        finalanswer = meters2kilometers(distance)
        print(distance, "meters is", finalanswer, "kilometers.")

#14
    elif option == "14":
        finalanswer = kilometers2meters(distance)
        print(distance, "kilometers is", finalanswer, "meters.")

#15
    elif option == "15":
        finalanswer = yards2miles(distance)
        print(distance, "yards is", finalanswer, "miles.")

#16
    elif option == "16":
        finalanswer = miles2yards(distance)
        print(distance, "miles is", finalanswer, "yards.")

#17
    elif option == "17":
        finalanswer = yards2meters(distance)
        print(distance, "yards is", finalanswer, "meters.")

#18
    elif option == "18":
        finalanswer = miles2meters(distance)
        print(distance, "miles is", finalanswer, "meters.")

#19
    elif option == "19":
        finalanswer = yards2kilometers(distance)
        print(distance, "yards is", finalanswer, "kilometers.")

#20
    elif option == "20":
        finalanswer = miles2kilometers(distance)
        print(distance, "miles is", finalanswer, "kilometers.")

    yes_or_no = input("Convert Distances? y (yes), n (no): ")

#end


