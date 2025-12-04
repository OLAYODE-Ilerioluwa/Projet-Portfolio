// Animation pour le bouton Scroll (rebond)
const scrollBtn = document.querySelector('.defiler');
if (scrollBtn) {
    scrollBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Déterminer la cible en fonction de la page actuelle
        let targetSelector = '#contact'; // Par défaut pour Accueil.html
        if (window.location.pathname.includes('activites.html')) {
            targetSelector = '#photos';
        } else if (window.location.pathname.includes('Gastronomie.html')) {
            targetSelector = '#plats';
        }
        const target = document.querySelector(targetSelector);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Animation de rebond (optionnel, pour rendre le bouton plus dynamique)
    setInterval(() => {
        scrollBtn.style.transform = 'translateY(-5px)';
        setTimeout(() => {
            scrollBtn.style.transform = 'translateY(0)';
        }, 500);
    }, 2000); // Répète toutes les 2 secondes
}

// Hide/show header on scroll
let lastScrollTop = 0;
const header = document.querySelector('.entete');
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.classList.add('hidden');
    } else {
        // Scroll up
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

// Validation du formulaire de contact
const form = document.querySelector('.formulaire-contact');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche l'envoi par défaut

        const nom = document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;
        let errors = [];

        // Vérifier le nom
        if (!nom) {
            errors.push('Le nom est obligatoire.');
            isValid = false;
        }

        // Vérifier l'email (format basique)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            errors.push('Un email valide est obligatoire.');
            isValid = false;
        }

        // Vérifier le message
        if (!message) {
            errors.push('Le message est obligatoire.');
            isValid = false;
        }

        if (isValid) {
            alert('Formulaire envoyé avec succès ! (Simulation - en vrai, envoyez à un serveur)');
            form.reset(); // Réinitialise le formulaire
        } else {
            alert('Erreurs :\n' + errors.join('\n'));
        }
    });
}
