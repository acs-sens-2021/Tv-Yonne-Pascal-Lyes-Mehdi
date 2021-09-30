let departements = document.querySelectorAll("svg a");

for(let departement of departements){

    if(departement.classList.contains("visited")){
        
        departement.setAttribute("href", "emission.html");
        console.log(departement.href);
    };
};