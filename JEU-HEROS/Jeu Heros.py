import random

Tour = 0
Vous = 50
Ennemi = 50 



def Jeu():
    Choix = input("Potion ou Attaque ?")
    if Choix == 1:
        Vous += random.randint(0,50)
        print(potion())
    if Choix == 2:
        print(Attaque())
    



def potion():
    if Jeu() == 1:
        Vous += random.randint(15,25)
        Tour += 1
        print("Vous avez",Vous,"points de vie et votre ennemi a ",Ennemi,"points de vie pour le tour",Tour)
    if Jeu() == 2:
        Vous += random.randint(25,35)
        Tour += 1
        print("Vous avez",Vous,"points de vie et votre ennemi a ",Ennemi,"points de vie pour le tour",Tour)
    if Jeu() == 3:
        Vous += random.randint(35,50)
        Tour +=1
        print("Vous avez",Vous,"points de vie et votre ennemi a ",Ennemi,"points de vie pour le tour",Tour)

def Attaque():
    Ennemi -= random.randint(5,10)
    print("Vous avez",Vous,"points de vie et votre ennemi a ",Ennemi,"points de vie pour le tour",Tour)

def AttaqueEnnemi():
    Vous -= random.randint(5,15)
    print("Vous avez",Vous,"points de vie et votre ennemi a ",Ennemi,"points de vie pour le tour",Tour)


print(Jeu())