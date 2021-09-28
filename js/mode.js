let link = document.querySelector(".link");
let darkbtn = document.querySelector(".darkmode");
let darkbtnContent = document.querySelector (".darkmode p");

darkbtn.addEventListener("click", () =>{
   if(localStorage.theme === "style"){
    localStorage.theme = "dark";
    darkbtnContent.textContent = "Thème clair";
   }else{
       localStorage.theme = "style";
       darkbtnContent.textContent = "Thème sombre";
   }
   link.href = `css/${localStorage.theme}.css`;

});

if(localStorage.theme  != null){
    link.href = `css/${localStorage.theme}.css`;

}else{
    link.href = "css/style.css";
    localStorage.theme = "style";
}