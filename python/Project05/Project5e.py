#Cleo Parra CIS 122
#Project5e.py
#Use turtle graphics to draw 4 "random walks". Each step 10 pixels long.
#All dif colors

import random

import turtle as t

for i in range (3):

    def random_angle(n):
        angle_chunk = 360 / n
        which = random.randrange(0,n)
        my_angle = which * angle_chunk
        return my_angle
    #

    def random_color(color_list):
        n = len(color_list)
        color= color_list[random.randrange(0,n)]
        return color
    #end def

    colors = ['red', 'blue', 'green']
    t.speed('fastest')
    t.dot(8, 'red')
    for i in range (150):
        angle = random_angle(12)
        color = random_color(colors)
        t.forward(10)
        t.left(angle)
        t.pencolor(color)
    #
    t.dot(8, 'blue')
    t.penup()
    t.home()
    t.pendown()
