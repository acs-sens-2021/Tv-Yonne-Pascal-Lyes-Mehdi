// const tableauVille = [
//     "AILLANT SUR THOLON ",
//     "ANCY LE FRANC ",
//     "ANDRYES ",
//     "APPOIGNY ",
//     "ARGENTENAY ",
//     "ARMEAU ",
//     "AUGY ",
//     "AUXERRE ",
//     "AVALLON ",
//     "BERU ",
//     "BRANNAY ",
//     "CELLE SAINT CYR ",
//     "CERISIERS ",
//     "CHABLIS ",
//     "CHAMOUX ",
//     "CHAMPIGNELLES ",
//     "CHAMPS SUR YONNE ",
//     "CHAPELLE VAUPELTEIGNE ",
//     "CHARNY OREE DE PUISAYE ",
//     "CHAUMONT ",
//     "CHEROY ",
//     "CHEVANNES ",
//     "CHIGY ",
//     "COURTOIS SUR YONNE ",
//     "CUDOT ",
//     "DICY ",
//     "DIXMONT ",
//     "EGRISELLES LE BOCAGE ",
//     "ETAIS LA SAUVIN ",
//     "FERTE LOUPIERE ",
//     "FLEURY LA VALLEE ",
//     "FOISSY SUR VANNE ",
//     "FONTAINE LA GAILLARDE ",
//     "GISY LES NOBLES ",
//     "HERY ",
//     "IRANCY ",
//     "JOIGNY ",
//     "JUSSY ",
//     "MAILLOT ",
//     "MALAY LE GRAND ",
//     "MALAY LE PETIT ",
//     "MARSANGY ",
//     "MIGENNES ",
//     "MONETEAU ",
//     "MONTACHER VILLEGARDIN ",
//     "NOE ",
//     "NOYERS ",
//     "PARON ",
//     "PIFFONDS ",
//     "PONT SUR YONNE ",
//     "POURRAIN ",
//     "PREGILBERT ",
//     "PRUNOY ",
//     "ROGNY LES SEPT ECLUSES ",
//     "ROSOY ",
//     "SAINT CLEMENT ",
//     "SAINT DENIS LES SENS ",
//     "SAINT FARGEAU ",
//     "SAINT FLORENTIN ",
//     "SAINT JULIEN DU SAULT ",
//     "SAINT MARTIN D ORDON ",
//     "SAINT MARTIN DU TERTRE ",
//     "SAINT MARTIN SUR ARMANCON ",
//     "SAINT MARTIN SUR OUANNE ",
//     "SAINT VALERIEN ",
//     "SALIGNY ",
//     "SAVIGNY SUR CLAIRIS ",
//     "SENS ",
//     "SERGINES ",
//     "SIEGES ",
//     "SOUCY ",
//     "THEIL SUR VANNE ",
//     "TONNERRE ",
//     "TOUCY ",
//     "VARENNES ",
//     "VAUMORT ",
//     "VENIZY ",
//     "VENOUSE ",
//     "VENOY ",
//     "VERMENTON ",
//     "VERON ",
//     "VEZELAY ",
//     "VILLEBLEVIN ",
//     "VILLECIEN ",
//     "VILLEMANOCHE ",
//     "VILLENEUVE LA GUYARD ",
//     "VILLENEUVE L ARCHEVEQUE ",
//     "VILLENEUVE SUR YONNE ",
//     "VILLEVALLIER ",
//     "VINNEUF ",
//     "VOISINES ",
// ];
// console.table(tableauVille.value);
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
let villes = document.querySelectorAll(".visited");
// Je boucle pour récuperer toutes les villes
for (let ville of villes) {
    // Je récupère le nom des villes stocké dans la balise A
    var nomVille = ville.getAttribute("xlink:title");
    // Je crée une balise P pour afficher les villes
    let baliseP = document.createElement("option");
    // J'injècte le nom des villes dans la balise P
    baliseP.textContent = nomVille;
    console.log(nomVille);
    // Je récupère le container de la map pour afficher les balises P
    let map = document.querySelector(".ville-container");
    // J'injecte la baliseP dans le conainer
    map.appendChild(baliseP);


    let idVille = ville.firstElementChild.id;
    baliseP.dataset.id = idVille;

    // Je vais chercher le path des villes visitées
    baliseP.addEventListener("click", () => {

        if (sessionStorage.id != null) {

            let pathTwo = document.querySelector("#" + sessionStorage.id);

            pathTwo.style.fill = "#8130AC";

        }

        let path = document.querySelector("#" + baliseP.dataset.id);

        path.style.fill = "#c6d141";

        sessionStorage.id = path.id;

    });
}