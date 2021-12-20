//mobile menu toggle
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".nav--flex");
const link1 = document.querySelector("[drop1]");
const link2 = document.querySelector("[drop2]");
const link3 = document.querySelector("[drop3]");
const link4 = document.querySelector("[drop4]");

// toggleButton.addEventListener("click", () => {});

//mobile close toggle
const closeBurger = document.querySelector(".hamburger");
closeBurger.addEventListener("click", () => {
    closeBurger.classList.toggle("is-active");

    navbarLinks.classList.toggle("active");
    link1.classList.toggle("active");
    link2.classList.toggle("active");
    link3.classList.toggle("active");
    link4.classList.toggle("active");
});
//setting footer date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//books carousel
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});

// //modal
// var modal = document.getElementById("email-modal");
// var btns = document.querySelectorAll("#modal-btn");
// var span = document.getElementsByClassName("modal-close")[0];

// // When the user clicks the any modal button, open the modal
// for (const btn of btns) {
//     btn.addEventListener("click", function () {
//         modal.style.display = "block";
//     });
// }

// // When the user clicks on (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// };
