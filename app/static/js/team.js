const tpl = document.getElementById("card-template");
const akhil = document.getElementById("akhil-section");
const omar = document.getElementById("omar-section");
const brian = document.getElementById("brian-section");
const joe = document.getElementById("joe-section");

const clone1 = tpl.content.cloneNode(true);
clone1.querySelector(".card-fullname").textContent = "Akhil Kalakota";
akhil.appendChild(clone1);

const clone2 = tpl.content.cloneNode(true);
clone2.querySelector(".card-fullname").textContent = "Ohm R Mahmood";
omar.appendChild(clone2);

const clone3 = tpl.content.cloneNode(true);
clone3.querySelector(".card-fullname").textContent = "Brian Huynh";
brian.appendChild(clone3);

const clone4 = tpl.content.cloneNode(true);
clone4.querySelector(".card-fullname").textContent = "Joseph Gonzalez";
joe.appendChild(clone4);

document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const buttons = document.querySelectorAll(".card-buttons button");
  const sections = document.querySelectorAll(".card-section");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove("is-active"));
      // Add to the clicked one
      button.classList.add("is-active");

      const target = button.dataset.section;

      // Hide all sections
      sections.forEach(section => {
        section.classList.remove("is-active");
      });

      // Show the target section
      const activeSection = card.querySelector(target);
      if (activeSection) {
        activeSection.classList.add("is-active");
      }
    });
  });
});


