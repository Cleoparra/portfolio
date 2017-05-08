#Cleo Parra CIS 122
#Project5c.py Read the romeo_and_juliet.txt into a word_count dictionary with word to look up.
#http://www.cs.uoregon.edu/Classes/15W/cis122/data/romeo_and_juliet.txt

import urllib.request


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

word_count_dictionary = { }

filename = 'http://www.cs.uoregon.edu/Classes/15W/cis122/data/romeo_and_juliet.txt'
with urllib.request.urlopen(filename) as webpage:
    for line in webpage:
        line = line.decode('utf-8')
        my_list = make_word_list(line)
        #print(my_list)
        for word in my_list:
            if word in word_count_dictionary:
                word_count_dictionary[word] = word_count_dictionary[word] + 1
            else:
                word_count_dictionary[word] = 1

#for word in sorted(word_count_dictionary):
   # count = word_count_dictionary[word]
   # print(word.ljust(13, "."), count)


wordsearch = input("Enter a Enter a word, or x to exit: ")
while wordsearch != 'x':

#in the list
    if wordsearch in word_count_dictionary:
        count = word_count_dictionary[wordsearch]
        
        print(wordsearch.ljust(13, "."), count)

#not in the List
    else:
        print("The name was not found.")
    wordsearch = input("Enter a Enter a word, or x to exit: ")
