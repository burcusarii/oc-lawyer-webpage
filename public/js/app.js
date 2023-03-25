const sections = document.querySelectorAll(".section");

const scrollItem = (window.innerHeight / 3) * 2;

window.addEventListener("scroll", function () {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < scrollItem) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
});
