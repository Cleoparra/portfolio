#Cleo Parra CIS 122
#Project3d.py Shopping Cart for Valentines


itemProduct = [
" Candy Gift Set  ",
" Chocolate       ",
" Wine and Cheese ",
" Dinner Cruise   ",
" Spa gift        ",
" Bracelet        ",
" Earrings        ",
" Jewelry Box     ",
" Neckless        ",
"Ring            ",
"Candle          ",
"Flowers         ",
"Phone Case      ",
"Scarf           ",
"Soap Gift set   ",
"Stuff bear      ",
"Throw Pillow    ",
"Valentine’s Card"]

itemPrice=[
19.99,
5.99,
19.99,
79.99,
49.99,
69.99,
39.99,
24.99,
59.99,
29.99,
9.99,
9.99,
19.99,
14.99,
14.99,
9.99,
9.99,
4.99]

print("Item Number:    ", "Item Product:    ", "Item Price:    ")
for i in range(len(itemProduct)):
    print(i + 1, " "*13, itemProduct[i], " $", itemPrice[i])


cartList = []
cartTotal = []
cancleNum = []

#end


yes_or_no = input("Would you like to start shopping? y (yes), n (no): ")

while yes_or_no == 'y':

#in the list
    catalogNumber = int(input("Enter the Number of the porduct you want: "))
    if catalogNumber < len(itemProduct):
        print("\n", catalogNumber, "is", itemProduct[catalogNumber], itemPrice[catalogNumber], "\n")

        cartList.append(itemProduct[catalogNumber])
        cartTotal.append(itemPrice[catalogNumber])
        
    else: 
        print("\n", catalogNumber, "is not in the Item Product List.", "\n")

    seeList = input("Would you Like to see your Cart list? yes or no? ")
    if seeList == "yes":
            print("Item Number:    ", "Item Product:    ", "Item Price:    ")
            for x in range(len(cartList)):
                print(" ", catalogNumber," "*12, cartList[x], cartTotal[x])
            print("\n", "Total: ", sum(cartTotal))
            print("\n")
            
#cancle item
    canI = input("Would you like to cancle any items? please (yes), or no thanks (no)?")
    if canI == "please":
        cancleNumber = int(input("Enter the Number of the porduct you want to remove: "))
        if cancleNumber < len(cartList):
            print("\n", cancleNumber, "is", itemProduct[cancleNumber], itemPrice[cancleNumber], "\n")

            cartList.remove(itemProduct[cancleNumber])
            cartTotal.remove(itemPrice[cancleNumber])

        canI = input("Would you like to cancle anything else? please (yes), or no thanks (no)? ")
        seeUpdate = input("Would you Like to see your updated Cart list? yes! or no! ? ")
        if seeUpdate == "yes!":
            if len(cartList) > 0:
                print("Item Number:    ", "Item Product:    ", "Item Price:    ")
                for x in range(len(cartList)):
                    print(" ", catalogNumber," "*12, cartList[x], cartTotal[x])
                    print("\n", "Total: ", sum(cartTotal))
                    print("\n")
            else:
                print("Sorry, your Cart is empty.")
        else:
            print("\n")
   
    else:
        print("\n")


    
#to end            
    yes_or_no = input("Would you like to continue shopping or cancle your order? y (yes) keep shopping, n (no) cancle order: ")

#end
