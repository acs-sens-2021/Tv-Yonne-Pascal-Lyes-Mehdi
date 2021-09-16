let burger = document.querySelector(".burger");
let menu = document.querySelector(".lien");
let nav = document.querySelector(".nav-main")
let close = document.createElement("p")
burger.addEventListener("click", () => {
    menu.style.display = "flex";
    burger.style.display = "none";
    close.textContent = "Fermer"
    nav.appendChild(close)
})

close.addEventListener("click", () => {
    menu.style.display = "none";
    close.style.display = "none";
    burger.style.display = "flex";
})