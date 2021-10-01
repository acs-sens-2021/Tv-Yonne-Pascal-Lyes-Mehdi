// Je vais chercher le burger
let burger = document.querySelector(".burger");
// Je vais chercher le container ".Lien"
let menu = document.querySelector(".lien");
// Je vais chercher nav main
let nav = document.querySelector(".nav-main");
// Je vais chercher le bouton de fermeture
let closebtn = document.querySelector(".close");
// Je vais chercher le body
let body = document.querySelector("main");

// Je crée un evenement au click sur le burger
burger.addEventListener("click", () => {
    // Je change le display du menu avec les lien en "flex" pour l'afficher
    menu.style.display = "flex";
    // Je change de display du menu burger en "none" quand le menu est ouvert
    burger.style.display = "none";
    // Je change le display du bouton de fermeture en "flex" pour fermer le menu
    closebtn.style.display="flex";
});

// Je crée un evenement au click pour fermer le menu avec les lien
closebtn.addEventListener("click", () => {
    // Je change le display du menu en "none" pour le fermer
    menu.style.display = "none";
    // Je change le display du bouton de fermeture en "none" pour le faire disparaitre
    closebtn.style.display = "none";
    // Je change le display du burger en "flex" pour l'afficher
    burger.style.display = "flex";
});

// body.addEventListener("click", () => {
//     menu.style.display = "none";
//     closebtn.style.display = "none";
//     burger.style.display = "flex";
// });

// Rotate logo
// Je vais chercher le titre de la page
const titre = document.querySelector(".titre")
// Je vais chercher le logo dark dans la navbar
const logo = document.querySelector(".dark-logo");
// Je vais chercher le logo white dans la navbar
const logo2 = document.querySelector(".white-logo");

// Je crée un evenement au click sur le titre
titre.addEventListener("click", () =>{
    // J'ajoute la classe ".animation" sur le logo dark au click sur le titre
    logo.classList.toggle("animation");
});

// Je crée un evenement au click sur le titre
titre.addEventListener("click", () =>{
// J'ajoute la classe ".animation" sur le logo white au click sur le titre
    logo2.classList.toggle("animation");
});