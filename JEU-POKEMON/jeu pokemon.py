import tkinter as tk
from PIL import Image,ImageTk
from tkinter import ttk
import random

# Create main window
window = tk.Tk()
image = Image.open("Image/background.png")
photo = ImageTk.PhotoImage(image)

canvas = tk.Canvas(window, width=image.width, height=image.height)
canvas.pack()
canvas.create_image(0,0, image=photo, anchor="nw")

# Creer les personnages
personnage1 = Image.open("Image/poke1.png")
personnage2 = Image.open("Image/poke2.png")

perso1_tk = ImageTk.PhotoImage(personnage1)
perso2_tk = ImageTk.PhotoImage(personnage2)

canvas.create_image(455,200,image=perso1_tk,anchor="nw")
canvas.create_image(200,330,image=perso2_tk,anchor="nw")

# Barre de vie
progress1 = ttk.Progressbar(window,length=100)
progress1.place(x=200,y=300)
progress1["value"]=100

progress2 = ttk.Progressbar(window,length=100)
progress2.place(x=400,y=150)
progress2["value"]=100

# Malus
Malus_perso2 = 0 

# Attaque
def attaqueP():
    pourcentage = random.randint(0,100)
    if pourcentage < 15 :
        progress2["value"] -= 0
    if pourcentage >= 15 and pourcentage < 70  :
        progress2["value"] -= 15
    if pourcentage >= 70 and pourcentage < 100  :
        progress2["value"] -= 30
    if button1.bind("<ButtonPress>")==True:
        attaqueEnemie()
def attaqueF():
    pourcentage = random.randint(0,100)
    if pourcentage < 15 :
        progress2["value"] -= 0
    if pourcentage >= 15 and pourcentage < 40  :
        progress2["value"] -= 5
    if pourcentage >= 40 and pourcentage < 100  :
        progress2["value"] -= 10
def Soins():
    progress1["value"] += 20

def Aveuglement():
    pourcentage =random.randint(0,100)
    pourcentage = pourcentage/100
    
def attaqueEnemie():
    
    pourcentage = random.randint(0,100)
    
    if pourcentage < 10 :
        attaque = 0
        progress1["value"] -= attaque
    if pourcentage > 10 and pourcentage <=100 :
        
        attaque = 15
        progress1["value"] -= attaque
        if Aveuglement == True:
            Malus_perso2 = attaque * Aveuglement





   


# Creer les boutons

button1 = tk.Button(window, text="Attaque puissante",command= attaqueP,bg="red",fg="white")
button2 = tk.Button(window, text="Attaque faible",command=attaqueF,bg="blue",fg="white" )
button3 = tk.Button(window, text="Soins",command=Soins,bg="pink",fg="white")
button4 = tk.Button(window, text="Aveuglement",command=Aveuglement,bg="green",fg="white")
button1.place(x=170, y=400)
button2.place(x=300, y=400)
button3.place(x=400, y=400)
button4.place(x=450, y=400)


window.mainloop()