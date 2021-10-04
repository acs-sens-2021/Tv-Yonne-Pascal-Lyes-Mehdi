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
// Je récupère le balise A dans le SVG
let villes = document.querySelectorAll(".visited path");
// Je boucle pour récuperer toutes les villes
for (let ville of villes) {
    // Je récupère le nom des villes stocké dans la balise A
    let nomVille = ville.getAttribute("id");
    // Je crée une balise P pour afficher les villes
    let baliseP = document.createElement("p");
    // J'injècte le nom des villes dans la balise P
    baliseP.textContent = nomVille;
    // Je récupère le container de la map pour afficher les balises P
    let map = document.querySelector(".ville-container");
    // J'injecte la baliseP dans le conainer
    map.appendChild(baliseP);


    // Je vais chercher le path des villes visitées
    let villeVisites = document.querySelectorAll(".visited");

    baliseP.addEventListener("click", () => {

        for (let villeVisite of villeVisites) {

            let nomVille = villeVisite.getAttribute("xlink:title");

            if (nomVille === baliseP.innerText) {
                console.log(baliseP.innerText);
                console.log(nomVille);
                
                document.querySelector(".visited path").style.fill = "blue";
                
            }
        }
    });
}