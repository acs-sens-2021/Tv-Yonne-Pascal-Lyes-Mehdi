// let modal = document.querySelector(".modal-video");
// let iframe = document.querySelector("iframe");
// //emission
// let volley = document.querySelector(".volley");
// let art = document.querySelector(".art");
// let simplicicar = document.querySelector(".simplicicar");
// let theatre = document.querySelector(".theatre");
// let funspace = document.querySelector(".funspace");
// let vaccin = document.querySelector(".vaccin");

// volley.addEventListener("click", () => {
//     modal.style.display = "flex";
//     iframe.src = "https://www.youtube.com/embed/vVpuIhJocsE?controls=0";
// });

// simplicicar.addEventListener("click", () => {
//     modal.style.display = "flex";
//     iframe.src = "https://www.youtube.com/embed/v8hjgnO-2p0";
// });

// art.addEventListener("click", () => {
//     modal.style.display = "flex";
//     iframe.src = "https://www.youtube.com/embed/JW725-_2U2U";
// });

// funspace.addEventListener("click", () => {
//     modal.style.display = "flex";
//     iframe.src = "https://www.youtube.com/embed/6VxqGpV8CLY";
// });

// vaccin.addEventListener("click", () => {
//     modal.style.display = "flex";
//     iframe.src = "https://www.youtube.com/embed/JzUBXKWHSBo";
// });

// theatre.addEventListener("click", () => {
//     modal.style.display = "flex";
//     iframe.src = "https://www.youtube.com/embed/GFkfGfcDlqI";
// });

let urls = document.querySelectorAll(".url-modal");
//Je récupère la balise A 
let iframe = document.querySelector("#iframe-ville");
//Je récupère l'Iframe
let modal = document.querySelector(".modal-video")
//Je récupère la Modal
let closemodal = document.querySelector(".close-modal");
//Je récupère le bouton pour fermer la modal

//Evenement de fermeture de la modal via un bouton
closemodal.addEventListener("click", () => {
    //Changement du Display du bouton, de flex à none
    modal.style.display = "none";
});

//Je boucle pour récuperer toutes les balises A comme c'est un querySeclectorAll
for (let url of urls) {
    // Evenement au click pour ouverture de la modal, récupération du href de la balise A, et injéction dans la source de l'Iframe
    url.addEventListener("click", (e) => {
        //J'annule la redirection de la balise A
        e.preventDefault();
        //Je récupère le href dans la balise A et je l'injecte dans la source de l'Iframe
        iframe.src = url.href;
        //Changement du Display de la modal, de none à flex
        modal.style.display = "flex";
    });
}