let burger = document.querySelector(".burger");
let menu = document.querySelector(".lien");
let nav = document.querySelector(".nav-main");
let closebtn = document.querySelector(".closebtn");

burger.addEventListener("click", () => {
    menu.style.display = "flex";
    burger.style.display = "none";
    closebtn.style.display = "block";
});

closebtn.addEventListener("click", () => {
    menu.style.display = "none";
    closebtn.style.display = "none";
    burger.style.display = "flex";
});