#Project 02 part a, Cleo Parra, CIS 122

##def outlines

##celsius2kelvin(c) c + 273.15
def celsius2kelvin(celsius):
    kelvin = celsius + 273.15
    return round(kelvin, 3)

##celsius2fahrenheit(c)  c – 32 * 5/9
def celsius2fahrenheit(celsius):
    fahrenheit = celsius - 32 * 5/9
    return round(fahrenheit, 3)

##kelvin2celsius(k)  k = c - 273.15
def kelvin2celsius(kelvin):
    celsius = kelvin - 273.15
    return round(celsius, 3)

##kelvin2fahrenheit(k) (k - 273.15)* 1.8 + 32
def kelvin2fahrenheit(kelvin):
    fahrenheit = (kelvin - 273.15)* 1.8 + 32
    return round(fahrenheit, 3)

##fahrenheit2celsius(f) f * 9/5 +32
def fahrenheit2celsius(fahrenheit):
    celsius = fahrenheit * 9/5 +32
    return round(celsius, 3)

##fahrenheit2kelvin(f) (f- 32) /1.8 + 273.15
def fahrenheit2kelvin(fahrenheit):
    kelvin = (fahrenheit - 32) /1.8 + 273.15
    return round(kelvin, 3)



yes_or_no = input("Convert Distances? y (yes), n (no): ")

while yes_or_no == 'y':
    print("1 Convert celsius to kelvin")
    print("2 Convert celsius to fahrenheit")
    print("3 Convert kelvin to celsius")
    print("4 Convert kelvin to fahrenheit") 
    print("5 Convert fahrenheit to celsius")
    print("6 Convert fahrenheit to kelvin")

    option =input("Convert choice: ")
    print(option)
    tempature = float(input("Distance to convert: "))
    
    if option == "1":
        finalanswer = celsius2kelvin(tempature)
        print(tempature, "celsius is", finalanswer, "kelvin.")

    elif option == "2":
        finalanswer = celsius2fahrenheit(tempature)
        print(tempature, "celsius is", finalanswer, "fahrenheit.")
    
    elif option == "3":
        finalanswer = kelvin2celsius(tempature)
        print(tempature, "kelvin is", finalanswer, "celsius.")

    elif option == "4":
        finalanswer = kelvin2fahrenheit(tempature)
        print(tempature, "kelvin is", finalanswer, "fahrenheit.")
        
    elif option == "5":
        finalanswer = fahrenheit2celsius(tempature)
        print(tempature, "fahrenheit is", finalanswer, "celsius.")       

    elif option == "6":
        finalanswer = fahrenheit2kelvin(tempature)
        print(tempature, "fahrenheit is", finalanswer, "kelvin.")
    
    yes_or_no = input("Convert Distances? y (yes), n (no): ")
#end


