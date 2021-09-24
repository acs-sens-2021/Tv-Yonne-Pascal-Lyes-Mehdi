let video = document.querySelector(".carroussel-emission");
let modal = document.querySelector(".modal-video");
let navbar = document.querySelector(".modal-title");
let fond = document.querySelector(".fond");

video.addEventListener("click", () => {
    modal.style.display = "flex ";
    fond.style.display = "flex  ";
    
})

navbar.addEventListener("click", ()=>{
    
    modal.style.display = "none";
    fond.style.display = "none";

})