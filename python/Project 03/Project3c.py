#Cleo Parra CIS 122
#Project 3c. List of Bird Species

birdsList = []

#end

yes_or_no = input("Would you like to search a bird name? y (yes), n (no): ")

while yes_or_no == 'y':
    birdName = input("Enter a Bird Name to serch the list(Don't worry about capitalization): ")
    name = birdName.capitalize()


#in the list
    if name in birdsList:
        print("\n", name, "is in the list of Bird names.", "\n")

#not in the List
    else:
        print("The name was not found.")
        print("Do not worry, We have added the name to the list.", "\n")
        birdsList.append(name)

    seeList = input("Would you Like to see the list? yes or no? ")
    if seeList == "yes":
        print("The Bird List:")
        for names in birdsList:
            print(names)
            
    else:
        print("Alright, Lets move on.", "\n")

    print("\n")
    yes_or_no = input( "Would you like to search another bird name? y (yes), n (no): ")

#end




             
