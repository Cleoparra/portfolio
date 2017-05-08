#Project 02 part c, Cleo Parra, CIS 122

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

total_tax_paid = 0.0
total_payers = 0

while(1):
    name = input("enter name of the tax payer: ")
    income = float(input("enter salary: "))
    tax = get_tax(income)

    print(name, "has to pay", tax, "as income tax")
    total_tax_paid += tax
    total_payers += 1

    again = input("enter another? (Y/N)?")
    if again.lower() == 'n':
        break
    
print(format(total_tax_paid, ',.2f'), 'was paid by', total_payers, 'person')
