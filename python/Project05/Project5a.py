#Cleo Parra CIS 122
#Project5a.py Display make_word_list as a list of words in the line.
#line = "Romeo! I'm tired--aren't you? Take me to the 'Primavera' restaurant."

line = "Romeo! I'm tired--aren't you? Take me to the 'Primavera' restaurant."


def make_word_list(line):
    line = line.strip(' ').lower()
    clean_line = ""
    for letter in line:
        if letter in "abcdefghijklmnopqrstuvwxyz' ":
            clean_line += letter
        else:
            clean_line += " "
        #if
    #end for
    temp_list = clean_line.split()
    word_list = []
    for item in temp_list:
        word = item.strip("'")
        word_list.append(word)
        #print(word_list)
    return word_list

my_list = make_word_list(line)
for word in my_list:
    print(word)
        
            
    
                    
