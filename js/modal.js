// Je vais chercher les images
let videos = document.querySelectorAll(".image");
// Je vais chercher la modal
let modal = document.querySelector(".modal-video");
// Je vais chercher le bouton pour fermer la modal
let closemodal = document.querySelector(".close-modal");
// Je vais chercher le fond 
let fond = document.querySelector(".fond");
// Je vais chercher l'Iframe
let iframe = document.querySelector("iframe");

// Je boucle sur les videos pour toutes les récupérer vue que c'est un querySelectorAll
for (let video of videos) {
    // je crée un evenement au click sur les images
    video.addEventListener("click", () => {
        // Je changer ke display de la modal en "flex" pour l'afficher
        modal.style.display = "flex";
        // Je changer ke display du fond en "flex" pour l'afficher
        fond.style.display = "flex";
    });

    // je crée un evenement au click sur le bouton de fermeture
    closemodal.addEventListener("click", () => {
        // Je change le display de la modal en "none" pour la faire disparaitre
        modal.style.display = "none";
        // Je change le display du fond en "none" pour la faire disparaitre
        fond.style.display = "none";
        // Je met fin à la video au click sur le bouton de fermeture
        iframe.src = "https://www.youtube.com/embed/G0KJJF2B3HE/end";
    });
};