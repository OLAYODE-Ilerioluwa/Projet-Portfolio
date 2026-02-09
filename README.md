<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Mon Portfolio</h1>
        <nav>
            <ul>
                <li><a href="#about">À propos</a></li>
                <li><a href="#education">Études</a></li>
                <li><a href="#skills">Compétences</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <section id="about">
        <h2>À propos de moi</h2>
        <p>Je suis un développeur passionné par le web et les jeux vidéo . Voici une brève description de mes compétences et expériences.</p>
        <p><strong>Region :</strong> Ile-de-France </p>
        <p><strong>Hobbies :</strong> Jeux vidéo, Voyage, Programmation, Cuisine et Basket-ball</p>
    </section>
    <section id="education">
        <h2>Mes Études</h2>
        <div class="education-item">
            <h3>BTS SIO - option SLAM </h3>
            <p>Lycée LeRebours , Paris 13éme, 2025 - 2027
            </p>
        </div>
        <div class="education-item">
            <h3>Baccalauréat Général</h3>
            <p>Lycée Jean-Racine, Montdidier, 2019 - 2021</p>
        </div>
    </section>
    <section id="skills">
        <h2>Mes Compétences</h2>
        <div class="skill">
            <span>HTML (Expert)</span>
            <div c[styles.css](https://github.com/user-attachments/files/25178158/styles.css)
lass="progress-bar">
                <div class="progress" style="width: 70%;"></div>
            </div>
        </div>
        <div class="skill">
            <span>CSS (Intermediate)</span>
            <div class="progress-bar">
                <div class="progress" style="width: 60%;"></div>
            </div>
        </div>
        <div class="skill">
            <span>Java (Beginner)</span>
            <div class="progress-bar">
                <div class="progress" style="width: 20%;"></div>
            </div>
        </div>
        <div class="skill">
            <span>JavaScript (Professionnel)</span>
            <div class="progress-bar">
                <div class="progress" style="width: 20%;"></div>
            </div>
        </div>
        <div class="skill">
            <span>Python (Professionnel)</span>
            <div class="progress-bar">
                <div class="progress" style="width: 90%;"></div>
            </div>
        </div>
        <div class="skill">
            <span>Unity (Beginner)</span>
            <div class="progress-bar">
                <div class="progress" style="width: 10%;"></div>
            </div>
        </div>
        <div class="skill">
            <span>SQL (Beginner)</span>
            <div class="progress-bar">
                <div class="progress" style="width: 30%;"></div>
            </div>
        </div>
    </section>
    <section id="personal-skills">
        <h2>Compétences Personnelles</h2>
        <ul>
            <li>Travail d'équipe </li>
            <li>Communication </li>
            <li>Curieux </li>
            <li>Réactivité </li>
            <li>Bienveillance </li>
            <li>Adaptivité au changement </li>
        </ul>
    </section>
    <section id="languages">
        <h2>Langues</h2>
        <div class="skill">
            <span>Français (Langue Natale)</span>
            <div class="progress-bar">
                <div class="progress" style="width: 100%;"></div>
            </div>
        </div>
        <div class="skill">
            <span>Anglais (Professionnel)</span>
            <div class="progress-bar">
                <div class="progress" style="width: 80%;"></div>
            </div>
        </div>
        <div class="skill">
            <span>Espagnol (Débutant)</span>
            <div class="progress-bar">
                <div class="progress" style="width: 20%;"></div>
            </div>
        </div>
        <div class="skill">
            <span>Allemand (Débutant)</span>
            <div class="progress-bar">
                <div class="progress" style="width: 10%;"></div>
            </div>
        </div>
    </section>
    <section id="projects">
        <h2>Mes Projets</h2>
        <div class="project">
            <img src="Image/Projet_jeu.png" alt="Image du Projet 1" class="project-image" onclick="zoomImage(this)">
            <h3>Projet 1 : Jeu Heros en python</h3>
            <p><strong>Jeu Héros</strong> est un jeu de combat en tour par tour développé en Python,
                jouable directement dans le terminal.
                Le joueur affronte un ennemi avec 50 points de vie chacun et dispose de potions
                de soin limitées permettant de récupérer des PV de manière aléatoire.
                </p>
            <p>
                À chaque tour, le joueur peut choisir entre attaquer ou utiliser une potion,
                cette dernière faisant perdre le tour suivant. L’ennemi attaque automatiquement
                après l’action du joueur. Le jeu se termine lorsque l’un des deux personnages
                n’a plus de points de vie.
            </p>
            <ul>
                <li><strong>Langage :</strong> Python</li>
                <li><strong>Concepts :</strong> boucles, conditions, fonctions</li>
                <li><strong>Fonctionnalités :</strong> système de tours, dégâts aléatoires, gestion des potions</li>
            </ul>
        </div>
        <div class="project">
            <img src="Image/Projet_Site.png" alt="Image du Projet 2" class="project-image" onclick="zoomImage(this)">
            <h3>Projet 2 : Site vitrine pour une agence de voyage</h3>
            <p><strong>MexiGo</strong> est un site vitrine responsive dédié à une agence de voyage
            spécialisée dans les séjours au Mexique. Le site a été conçu pour présenter
            clairement les services, les destinations proposées et faciliter la prise de contact
            avec les clients.
            </p>
            <p>
            Il met en avant une navigation fluide, une structure claire et une identité visuelle
            chaleureuse inspirée du Mexique. Le site comprend une page d’accueil immersive,
            des sections informatives (présentation, services, tarifs, équipe, réputation)
            ainsi qu’un formulaire de contact fonctionnel.
            </p>
            <ul>
            <li><strong>Type :</strong> Site vitrine</li>
            <li><strong>Technologies :</strong> HTML5, CSS3, JavaScript</li>
            <li><strong>Fonctionnalités :</strong> navigation fluide, sections structurées, formulaire de contact</li>
            <li><strong>Objectif :</strong> présenter une agence et générer des demandes de contact</li>
        </ul>
        </div>
    </section>
        </div>
    </section>
    <section id="contact">
        <h2>Contact</h2>
        <p>Email: iolayode@lerebours.fr</p>
        <p>Téléphone: +33 6 33 23 15 91</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/ileri-olayode">Mon LinkedIn</a></p>
    </section>
    <footer>
        <p>&copy; 2023 Mon Portfolio</p>
    </footer>
    <script>
        function zoomImage(img) {
            const zoomed = document.createElement('div');
            zoomed.className = 'zoomed';
            zoomed.innerHTML = '<img src="' + img.src + '" alt="' + img.alt + '">';
            zoomed.onclick = function() {
                document.body.removeChild(zoomed);
            };
            document.body.appendChild(zoomed);
        }
    </script>
</body>
</html>

/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}

header {
    background-color: #0d20c4;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
}

header h1 {
    margin-bottom: 0.5rem;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

nav a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
}

nav a:hover {
    color: #ddd;
}

section {
    padding: 2rem;
    margin: 2rem auto;
    max-width: 800px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

section h2 {
    margin-bottom: 1rem;
    color: #333;
}

.project {
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    border: 2px solid #ddd;
    border-radius: 10px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fafafa;
}

.project:hover {
    border-color: #007bff;
    box-shadow: 0 4px 20px rgba(0, 123, 255, 0.3);
    transform: translateY(-5px);
}

.project:last-child {
    border-bottom: none;
}

.project-image {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin-bottom: 1rem;
}

.project-image:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.zoomed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.zoomed img {
    max-width: 90%;
    max-height: 90%;
    transform: scale(1.2);
}

.skill {
    margin-bottom: 1rem;
}

.skill span {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.progress-bar {
    width: 100%;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
}

.progress {
    height: 100%;
    background-color: #007bff;
    border-radius: 10px;
    transition: width 0.3s ease;
}

.education-item {
    margin-bottom: 1.5rem;
    padding: 1rem;
    border-left: 4px solid #007bff;
    background-color: #fafafa;
    border-radius: 4px;
}

.education-item h3 {
    margin-bottom: 0.5rem;
    color: #333;
}

.education-item p {
    color: #666;
}

footer {
    text-align: center;
    padding: 1rem 0;
    background-color:  #0d20c4;
    color: #fff;
}

/* Responsive design */
@media (max-width: 600px) {
    nav ul {
        flex-direction: column;
        gap: 1rem;
    }
    section {
        padding: 1rem;
        margin: 1rem;
    }
}
