let link = document.querySelector(".link");
let lightbtn = document.querySelector(".lightmode");
let darkbtn = document.querySelector(".darkmode")

lightbtn.addEventListener("click", () =>{
    link.href = "css/style.css";
})

darkbtn.addEventListener("click", () =>{
    link.href= "css/dark.css";
})