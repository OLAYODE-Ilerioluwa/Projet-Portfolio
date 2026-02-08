# Importation des modules nécessaires
import pygame  # Bibliothèque pour créer des jeux en Python, gère graphismes, sons, événements
import sys  # Module système pour quitter le programme proprement

# Classe principale du jeu, encapsule toute la logique du jeu
class Game:
    def __init__(self):
        # Initialisation de Pygame : prépare tous les modules importés
        pygame.init()

        # Configuration de l'affichage : crée une fenêtre de 800x600 pixels
        self.screen = pygame.display.set_mode((800, 600))
        pygame.display.set_caption("Pokemon Jeu")  # Titre de la fenêtre
        icon = pygame.image.load('Image/icon.png')  # Charge l'icône du jeu
        pygame.display.set_icon(icon)  # Définit l'icône de la fenêtre

        # Chargement des images d'animation pour l'intro
        self.frames = []  # Liste pour stocker les images des frames
        for i in range(1, 56):  # Boucle de 1 à 55 pour charger chaque frame
            img = pygame.image.load(f'Menu/frame_{i}.gif')  # Charge l'image du frame
            self.frames.append(pygame.transform.scale(img, (800, 600)))  # Redimensionne et ajoute à la liste
        self.current_frame = 0  # Index de la frame actuelle pour l'animation

        # Configuration de la police et des couleurs pour le texte
        self.font = pygame.font.SysFont("arialblack", 40)  # Police Arial Black, taille 40
        self.text_color = (255, 255, 255)  # Couleur blanche pour le texte

        # États du jeu
        self.running = True  # Booléen pour savoir si le jeu tourne
        self.state = 'intro'  # États possibles: 'intro', 'menu', 'options', 'playing'

        # Menu principal
        self.menu_options = ['Play', 'Options', 'Quit']
        self.selected_option = 0

        # Sous-menu Options
        self.options_options = ['Window Size', 'FPS', 'Difficulty', 'Back']
        self.selected_option_options = 0

        # Paramètres
        self.settings = {
            'window_size': (800, 600),
            'fps': 30,
            'difficulty': 'Medium'
        }

        # Options pour les paramètres
        self.window_sizes = [(800, 600), (1024, 768)]
        self.fps_options = [30, 60, 120]
        self.difficulty_options = ['Easy', 'Medium', 'Hard']

        # Indices actuels pour les options
        self.window_size_index = 0
        self.fps_index = 0
        self.difficulty_index = 1

        # Horloge pour contrôler les FPS (images par seconde)
        self.clock = pygame.time.Clock()

    # Méthode pour gérer les événements (clics, touches, fermeture de fenêtre)
    def handle_events(self):
        for event in pygame.event.get():  # Récupère tous les événements en attente
            if event.type == pygame.QUIT:  # Si l'utilisateur ferme la fenêtre
                self.running = False  # Arrête la boucle principale
            elif event.type == pygame.KEYDOWN:  # Si une touche est pressée
                if self.state == 'intro':
                    if event.key == pygame.K_SPACE:
                        self.state = 'menu'
                elif self.state == 'menu':
                    if event.key == pygame.K_UP:
                        self.selected_option = (self.selected_option - 1) % len(self.menu_options)
                    elif event.key == pygame.K_DOWN:
                        self.selected_option = (self.selected_option + 1) % len(self.menu_options)
                    elif event.key == pygame.K_RETURN:
                        if self.selected_option == 0:  # Play
                            self.state = 'playing'
                        elif self.selected_option == 1:  # Options
                            self.state = 'options'
                        elif self.selected_option == 2:  # Quit
                            self.running = False
                elif self.state == 'options':
                    if event.key == pygame.K_UP:
                        self.selected_option_options = (self.selected_option_options - 1) % len(self.options_options)
                    elif event.key == pygame.K_DOWN:
                        self.selected_option_options = (self.selected_option_options + 1) % len(self.options_options)
                    elif event.key == pygame.K_LEFT:
                        if self.selected_option_options == 0:  # Window Size
                            self.window_size_index = (self.window_size_index - 1) % len(self.window_sizes)
                            self.settings['window_size'] = self.window_sizes[self.window_size_index]
                            self.screen = pygame.display.set_mode(self.settings['window_size'])
                        elif self.selected_option_options == 1:  # FPS
                            self.fps_index = (self.fps_index - 1) % len(self.fps_options)
                            self.settings['fps'] = self.fps_options[self.fps_index]
                        elif self.selected_option_options == 2:  # Difficulty
                            self.difficulty_index = (self.difficulty_index - 1) % len(self.difficulty_options)
                            self.settings['difficulty'] = self.difficulty_options[self.difficulty_index]
                    elif event.key == pygame.K_RIGHT:
                        if self.selected_option_options == 0:  # Window Size
                            self.window_size_index = (self.window_size_index + 1) % len(self.window_sizes)
                            self.settings['window_size'] = self.window_sizes[self.window_size_index]
                            self.screen = pygame.display.set_mode(self.settings['window_size'])
                        elif self.selected_option_options == 1:  # FPS
                            self.fps_index = (self.fps_index + 1) % len(self.fps_options)
                            self.settings['fps'] = self.fps_options[self.fps_index]
                        elif self.selected_option_options == 2:  # Difficulty
                            self.difficulty_index = (self.difficulty_index + 1) % len(self.difficulty_options)
                            self.settings['difficulty'] = self.difficulty_options[self.difficulty_index]
                    elif event.key == pygame.K_RETURN:
                        if self.selected_option_options == 3:  # Back
                            self.state = 'menu'
                elif self.state == 'playing':
                    if event.key == pygame.K_ESCAPE:
                        self.state = 'menu'

    # Méthode pour mettre à jour l'état du jeu (logique)
    def update(self):
        if self.state == 'intro':  # Si en état intro
            # Anime les frames : passe à la suivante
            self.current_frame = (self.current_frame + 1) % len(self.frames)

    # Méthode pour dessiner sur l'écran (affichage)
    def draw(self):
        if self.state == 'intro':
            # Dessine la frame actuelle
            self.screen.blit(self.frames[self.current_frame], (0, 0))
            # Dessine le texte d'instruction
            self.draw_text("Press SPACE to start", self.font, self.text_color, 160, 250)
        elif self.state == 'menu':
            # Remplit l'écran en noir
            self.screen.fill((0, 0, 0))
            # Dessine le titre du menu
            self.draw_text("Pokemon Game Menu", self.font, self.text_color, 200, 100)
            # Dessine les options du menu
            for i, option in enumerate(self.menu_options):
                color = (255, 255, 0) if i == self.selected_option else self.text_color
                self.draw_text(option, self.font, color, 300, 200 + i * 60)
        elif self.state == 'options':
            # Remplit l'écran en noir
            self.screen.fill((0, 0, 0))
            # Dessine le titre des options
            self.draw_text("Options", self.font, self.text_color, 300, 100)
            # Dessine les options
            for i, option in enumerate(self.options_options):
                color = (255, 255, 0) if i == self.selected_option_options else self.text_color
                if i < 3:  # Pour Window Size, FPS, Difficulty
                    value = ""
                    if i == 0:
                        value = f"{self.settings['window_size'][0]}x{self.settings['window_size'][1]}"
                    elif i == 1:
                        value = str(self.settings['fps'])
                    elif i == 2:
                        value = self.settings['difficulty']
                    self.draw_text(f"{option}: {value}", self.font, color, 200, 200 + i * 60)
                else:
                    self.draw_text(option, self.font, color, 300, 200 + i * 60)
        elif self.state == 'playing':
            # Remplit l'écran en noir
            self.screen.fill((0, 0, 0))  # Fond noir
            # Dessine le message de jeu commencé
            self.draw_text("Game Started! Press ESC to quit.", self.font, self.text_color, 100, 250)

        pygame.display.flip()  # Met à jour l'affichage
    
    # Méthode utilitaire pour dessiner du texte à l'écran
    def draw_text(self, text, font, color, x, y):
        img = font.render(text, True, color)  # Rend le texte en image
        self.screen.blit(img, (x, y))  # Dessine l'image à la position donnée

    # Méthode principale qui fait tourner la boucle du jeu
    def run(self):
        while self.running:  # Tant que le jeu tourne
            self.handle_events()  # Gère les événements
            self.update()  # Met à jour la logique
            self.draw()  # Dessine l'écran
            self.clock.tick(self.settings['fps'])  # Limite aux FPS définis

        pygame.quit()  # Ferme Pygame
        sys.exit()  # Quitte le programme

# Point d'entrée du programme : exécute le jeu si le fichier est lancé directement
if __name__ == "__main__":
    game = Game()  # Crée une instance du jeu
    game.run()  # Lance la boucle principale
