//On récupère les balise A dans le SVG
let departements = document.querySelectorAll("svg a");
// On boucle pour récuperer chaque balise A vue que c'est un querySelectorAlkl
for (let departement of departements) {
    //Je fait une condition disant que SI une balise A a la classe ".Visited"
    if (departement.classList.contains("visited")) {
        // Alors il ajoute le href "ville.html"
        departement.setAttribute("href", "ville.html");
    };
};