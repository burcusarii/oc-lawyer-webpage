const header_1 = document.querySelector(".header-1");
const header_2 = document.querySelector(".header-2");
const btn_right = document.querySelector(".btn-right");
const btn_left = document.querySelector(".btn-left");


btn_left.addEventListener("click", function() {
    header_1.classList.remove("hidden");
    header_2.classList.add("hidden");
    console.log("sol oldu")
})

btn_right.addEventListener("click", function() {
    header_1.classList.add("hidden");
    header_2.classList.remove("hidden");
    console.log("sağ oldu")

})