const tpl = document.getElementById("card-template");
const akhil = document.getElementById("akhil-section");
const omar = document.getElementById("omar-section");
const brian = document.getElementById("brian-section");
const joe = document.getElementById("joe-section");

const clone1 = tpl.content.cloneNode(true);
clone1.querySelector(".card-fullname").textContent = "Akhil Kalakota";
clone1.querySelector(".card-jobtitle").textContent = "Frontend Developer";
clone1.querySelector(".card-desc").textContent = "Design CSS and Homepage ";
let contact1 = clone1.querySelectorAll(".card-contact");
contact1[0].textContent = "(805) 630-4046"
contact1[1].textContent = "akalakota@ucsd.edu"
akhil.appendChild(clone1);

const clone2 = tpl.content.cloneNode(true);
clone2.querySelector(".card-fullname").textContent = "Ohm R Mahmood";
clone2.querySelector(".card-jobtitle").textContent = "Game Developer";
clone2.querySelector(".card-desc").textContent = "Developed first person visual experience";
let contact2 = clone2.querySelectorAll(".card-contact");
contact2[0].textContent = "(510) 789-3497"
contact2[1].textContent = "ommahmood@ucsd.edu"
omar.appendChild(clone2);

const clone3 = tpl.content.cloneNode(true);
clone3.querySelector(".card-fullname").textContent = "Brian Huynh";
clone3.querySelector(".card-jobtitle").textContent = "Game Designer/Lore";
clone3.querySelector(".card-desc").textContent = "Lore master and visual experience ";
let contact3 = clone3.querySelectorAll(".card-contact");
contact3[0].textContent = "(562) 331-1828"
contact3[1].textContent = "bth001@ucsd.edu"
brian.appendChild(clone3);

const clone4 = tpl.content.cloneNode(true);
clone4.querySelector(".card-fullname").textContent = "Joseph Gonzalez";
clone4.querySelector(".card-jobtitle").textContent = "Fullstack Developer";
clone4.querySelector(".card-desc").textContent = "Developed subsections of the website";
let contact4 = clone4.querySelectorAll(".card-contact");
contact4[0].textContent = "(949) 630-7791"
contact4[1].textContent = "jog038@ucsd.edu"
joe.appendChild(clone4);


document.addEventListener("DOMContentLoaded", () => {
  // Grab *all* cards on the page
  document.querySelectorAll(".card").forEach(card => {
    // Within THIS card, find its buttons and its sections
    const buttons  = card.querySelectorAll(".card-buttons button");
    const sections = card.querySelectorAll(".card-section");

    // (Optional) Activate the first tab by default
    buttons[0].classList.add("is-active");
    sections[0].classList.add("is-active");

    // Wire up each button
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        // 1) Reset buttons/sections *inside this card only*
        buttons.forEach(btn => btn.classList.remove("is-active"));
        sections.forEach(sec => sec.classList.remove("is-active"));

        // 2) Activate the clicked button…
        button.classList.add("is-active");

        // 3) …and its target section
        const targetSelector = button.dataset.section;
        const targetSection  = card.querySelector(targetSelector);
        if (targetSection) {
          targetSection.classList.add("is-active");
        }
      });
    });
  });
});



