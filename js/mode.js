//On récupere les balise Link 
let link = document.querySelector(".link");
// On récupère le bouton pour changer de mode
let darkbtn = document.querySelector(".darkmode");
// On récupère la balise P dans le bouton de changement de mode
let darkbtnContent = document.querySelector(".darkmode p");

// Je crée un event au click pour changer de mode
darkbtn.addEventListener("click", () => {
    // Je fait une condition pour le stockage du thème dans le localStorage
    // Si le thème stocké dans le localStorage est égal à "style"
    if (localStorage.theme === "style") {
        //Si le la valeur stocké est "dark"
        localStorage.theme = "dark";
        // Le conteu de la balise P devient "Thème clair"
        darkbtnContent.textContent = "Thème clair";
        // Alors 
    } else {
        //Si la valeur stocké est "style"
        localStorage.theme = "style";
        //Le contenu de la balise P devient "Thème sombre"
        darkbtnContent.textContent = "Thème sombre";
    }
    //Injecte la valeur du thème stocké dans la balise linkl    
    link.href = `css/${localStorage.theme}.css`;

});
// Condition pour le changement de thème
// Si le thème stocké est égal à null
if (localStorage.theme != null) {
    // Alors j'injecte le thème stocké(dark.css)
    link.href = `css/${localStorage.theme}.css`;
// Sinon j'injecte le thème clair (style.css)
} else {
    link.href = "css/style.css";
    localStorage.theme = "style";
};