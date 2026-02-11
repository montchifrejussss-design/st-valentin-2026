/**
 * Logique du Test de Fidélité avec Effets Spéciaux
 * Développé par : Fréjus MONTCHI
 */

function calculerAmour() {
    const nom1 = document.getElementById('userName').value.trim();
    const nom2 = document.getElementById('partnerName').value.trim();
    const resultatDiv = document.getElementById('resultat');

    if (nom1 === "" || nom2 === "") {
        resultatDiv.innerHTML = "<p style='color: #D72638;'>Entrez deux noms pour voir la magie... ✨</p>";
        return;
    }

    resultatDiv.innerHTML = "<p>Calcul des battements de cœur... ❤️</p>";

    // Liste de tes nouveaux textes courts
    const petitsMots = [
        "Deux âmes, un seul cœur. ✨",
        "L'amour est la seule réponse. ❤️",
        "Le code ne ment jamais ! 😉",
        "Écrit dans les étoiles... 🌟",
        "Plus qu'un score, une évidence. 🌹",
        "Aussi parfait qu'un mélange de saveurs maîtrisé ! 🍫",
        "Votre connexion est cryptée par l'amour. 🔐"
    ];

    setTimeout(() => {
        // Algorithme de score (entre 60 et 100)
        const score = 60 + (Math.floor(Math.random() * 41));
        const messageAleatoire = petitsMots[Math.floor(Math.random() * petitsMots.length)];

        resultatDiv.innerHTML = `
            <div style="animation: fadeIn 1s;">
                <h3 style="font-size: 2.5rem; color: #D72638;">${score}%</h3>
                <p style="font-weight: bold;">${messageAleatoire}</p>
            </div>
        `;

        // Si le score est excellent, on lance la pluie de cœurs !
        if (score >= 75) {
            lancerPluieDeCoeurs();
        }
    }, 1500);
}

// Fonction pour l'animation de pluie de cœurs
function lancerPluieDeCoeurs() {
    for (let i = 0; i < 30; i++) {
        const coeur = document.createElement('div');
        coeur.innerHTML = "❤️";
        coeur.className = "animation-coeur";
        
        // Position aléatoire
        coeur.style.left = Math.random() * 100 + "vw";
        coeur.style.animationDuration = (Math.random() * 3 + 2) + "s"; 
        
        document.body.appendChild(coeur);

        // Supprimer le cœur après l'animation
        setTimeout(() => { coeur.remove(); }, 5000);
    }
}
// On attend que tout le HTML soit chargé par le navigateur
document.addEventListener('DOMContentLoaded', function() {
    
    const citations = [
        "L'amour ne se compte pas en jours, mais en moments partagés. Que votre complicité soit le moteur de chaque projet. ❤️",
        "Deux âmes qui se trouvent, c'est comme un code sans erreur : une harmonie parfaite et sans limites. ✨",
        "Plus précieux qu'un Bitcoin à son sommet, votre lien est le meilleur investissement pour le bonheur. 🔐🌹"
    ];

    // Sélection de l'élément
    const display = document.getElementById('quoteDisplay');

    // On vérifie si l'élément existe bien pour éviter les erreurs
    if (display) {
        const randomQuote = citations[Math.floor(Math.random() * citations.length)];
        display.innerText = randomQuote;
    } else {
        console.error("L'élément #quoteDisplay est introuvable dans le HTML !");
    }
});
const afficharge=document.getElementById("imgAleato");
const imgAleat=document.createElement("img");
const tousImg=["Image1.png", "Image2.png", "Image3.png", "Image4.png"];
const affiAleat=Math.floor(Math.random()*
tousImg.length);
afficharge.src=tousImg[affiAleat];