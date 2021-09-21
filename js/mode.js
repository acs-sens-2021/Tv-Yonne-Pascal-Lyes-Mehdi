let link = document.querySelector(".link");
let lightbtn = document.querySelector(".lightmode");
let darkbtn = document.querySelector(".darkmode")
let script = document.querySelector("#script");

lightbtn.addEventListener("click", () =>{
    link.href = "css/style.css";
})

darkbtn.addEventListener("click", () =>{
    link.href= "css/dark.css";
})