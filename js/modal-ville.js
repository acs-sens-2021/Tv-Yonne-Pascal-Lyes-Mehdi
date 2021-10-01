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
let iframe = document.querySelector("#iframe-ville");
let modal = document.querySelector(".modal-video")
let closemodal = document.querySelector(".close-modal");

closemodal.addEventListener("click", () => {
    modal.style.display = "none";
});

for (let url of urls) {

    url.addEventListener("click", (e) => {
        e.preventDefault();
        iframe.src = url.href;
        modal.style.display = "flex";
    });
}