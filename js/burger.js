let burger = document.querySelector(".burger");
let menu = document.querySelector(".lien");
let nav = document.querySelector(".nav-main");
let closebtn = document.querySelector(".closebtn");
let closebtndark = document.querySelector(".closebtndark");
let body = document.querySelector("main");

burger.addEventListener("click", () => {
    menu.style.display = "flex";
    burger.style.display = "none";
    closebtn.style.display = "block";
    closebtndark.style.display ="block";
});

closebtn.addEventListener("click", () => {
    menu.style.display = "none";
    closebtn.style.display = "none";
    burger.style.display = "flex";
});
closebtndark.addEventListener("click", () => {
    menu.style.display = "none";
    closebtndark.style.display = "none";
    burger.style.display = "flex";
});

body.addEventListener("click", () => {
    menu.style.display = "none";
    closebtn.style.display = "none";
    burger.style.display = "flex";
});