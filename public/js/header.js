const header = document.querySelector("#home-header");
const btn_right = document.querySelector(".btn-right");
const btn_left = document.querySelector(".btn-left");
const header_title = document.querySelector("#home-header__title");

btn_left.addEventListener("click", function() {
    header.style.backgroundImage = "url('img/bg-2.jpeg')"
    header_title.textContent = "Avukatlık Hizmetleri"

})

btn_right.addEventListener("click", function() {
    header.style.backgroundImage = "url('img/bg.jpeg')"
    header_title.textContent = "Arabulucuk Hizmetleri"

})