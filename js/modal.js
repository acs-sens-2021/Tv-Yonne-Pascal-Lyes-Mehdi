let videos = document.querySelectorAll(".image");
let modal = document.querySelector(".modal-video");
let closemodal = document.querySelector(".close-modal");
let fond = document.querySelector(".fond");

for (let video of videos) {

    video.addEventListener("click", () => {
        modal.style.display = "flex";
        fond.style.display = "flex";
    });

    closemodal.addEventListener("click", () => {
        modal.style.display = "none";
        fond.style.display = "none";

    });
}