const tableauVille = {
    c89003 : "AILLANT SUR THOLON ",
    c89005 :"ANCY LE FRANC ",
    c89007 :"ANDRYES ",
    c89013 : "APPOIGNY ",
    c89016 :"ARGENTENAY ",
    c89244 :"ARMEAU ",
    c89023 :"AUGY ",
    c89024 :"AUXERRE ",
    c89025 :"AVALLON ",
    c89039 :"BERU ",
    c89054 :"BRANNAY ",
    c89063 :"CELLE SAINT CYR ",
    c89068 :"CERISIERS ",
    c89175 :"CHABLIS ",
    c89071 :"CHAMOUX ",
    c89073 :"CHAMPIGNELLES ",
    c89077 :"CHAMPS SUR YONNE ",
    c89081 :"CHAPELLE VAUPELTEIGNE ",
    c89086 :"CHARNY OREE DE PUISAYE ",
    c89093 :"CHAUMONT ",
    c89100 :"CHEROY ",
    c89102 :"CHEVANNES ",
    c89107 :"CHIGY ",
    c89127 :"COURTOIS SUR YONNE ",
    c89133 :"CUDOT ",
    c89138 :"DICY ",
    c89142 :"DIXMONT ",
    c89151 :"EGRISELLES LE BOCAGE ",
    c89158 :"ETAIS LA SAUVIN ",
    c89163 :"FERTE LOUPIERE ",
    c89167 :"FLEURY LA VALLEE ",
    c89171 :"FOISSY SUR VANNE ",
    c89172 :"FONTAINE LA GAILLARDE ",
    c89189 :"GISY LES NOBLES ",
    c89201 :"HERY ",
    c89202 :"IRANCY ",
    c89206 :"JOIGNY ",
    c89212 :"JUSSY ",
    c89236 :"MAILLOT ",
    c89239 :"MALAY LE GRAND ",
    c89240 :"MALAY LE PETIT ",
    c89245 :"MARSANGY ",
    c89257 :"MIGENNES ",
    c89263 :"MONETEAU ",
    c89264 :"MONTACHER VILLEGARDIN ",
    c89278 :"NOE ",
    c89279 :"NOYERS ",
    c89287 :"PARON ",
    c89298 :"PIFFONDS ",
    c89309 :"PONT SUR YONNE ",
    c89311 :"POURRAIN ",
    c89314 :"PREGILBERT ",
    c89317 :"PRUNOY ",
    c89324 :"ROGNY LES SEPT ECLUSES ",
    c89326 :"ROSOY ",
    c89338 :"SAINT CLEMENT ",
    c89342 :"SAINT DENIS LES SENS ",
    c89344 :"SAINT FARGEAU ",
    c89345 :"SAINT FLORENTIN ",
    c89348 :"SAINT JULIEN DU SAULT ",
    c89353 :"SAINT MARTIN D ORDON ",
    c89354 :"SAINT MARTIN DU TERTRE ",
    c89355 :"SAINT MARTIN SUR ARMANCON ",
    c89358 :"SAINT MARTIN SUR OUANNE ",
    c89370 :"SAINT VALERIEN ",
    c89373 :"SALIGNY ",
    s89380 :"SAVIGNY SUR CLAIRIS ",
    c89342 :"SENS ",
    c89391 :"SERGINES ",
    c89395 :"SIEGES ",
    c89399 :"SOUCY ",
    c89411 :"THEIL SUR VANNE ",
    c89418 :"TONNERRE ",
    c89419 :"TOUCY ",
    c89430 :"VARENNES ",
    c89434 :"VAUMORT ",
    c89436 :"VENIZY ",
    c89437 :"VENOUSE ",
    c89438 :"VENOY ",
    c89441 :"VERMENTON ",
    c89443 :"VERON ",
    c89446 :"VEZELAY ",
    c89449 :"VILLEBLEVIN ",
    c89452 :"VILLECIEN ",
    c89456 :"VILLEMANOCHE ",
    c89460 :"VILLENEUVE LA GUYARD ",
    c89461 :"VILLENEUVE L ARCHEVEQUE ",
    c89464 :"VILLENEUVE SUR YONNE ",
    c89468 :"VILLEVALLIER ",
    c89480 :"VINNEUF ",
    c89483 :"VOISINES "
};
console.table(tableauVille.value);
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