const tpl = document.getElementById("card-template");
const akhil = document.getElementById("akhil-section");
const omar = document.getElementById("omar-section");
const brian = document.getElementById("brian-section");
const joe = document.getElementById("joe-section");

const clone1 = tpl.content.cloneNode(true);
clone1.querySelector(".card-fullname").textContent = "Akhil Kalakota";
clone1.querySelector(".card-jobtitle").textContent = "Frontend Developer";
clone1.querySelector(".card-desc").textContent = "Designed CSS and Homepage. Studying Computering Engineering at UCSD";
let contact1 = clone1.querySelectorAll(".card-contact");
contact1[0].textContent = "(805) 630-4046";
contact1[1].textContent = "akalakota@ucsd.edu";
let social1 = clone1.querySelectorAll(".card-social a");
social1[0].href = "https://www.instagram.com/akhil_kalakota2003/?utm_source=ig_web_button_share_sheet"
social1[1].href = "https://www.linkedin.com/in/akhil-kalakota-5b1a70260";
akhil.appendChild(clone1);

const clone2 = tpl.content.cloneNode(true);
clone2.querySelector(".card-fullname").textContent = "Ohm R Mahmood";
clone2.querySelector(".card-jobtitle").textContent = "Game Developer";
clone2.querySelector(".card-desc").textContent = "Developed first person visual experience. Studying Electrical Engineering at UCSD";
let contact2 = clone2.querySelectorAll(".card-contact");
contact2[0].textContent = "(510) 789-3497";
contact2[1].textContent = "ommahmood@ucsd.edu";
let social2 = clone2.querySelectorAll(".card-social a");
social2[0].href = "https://www.instagram.com/_omarmahmood_?utm_source=ig_web_button_share_sheet&igsh=ZnJzbnh0ZTczN2N4";
social2[1].href = "https://www.linkedin.com/in/omarmahmood-";
omar.appendChild(clone2);

const clone3 = tpl.content.cloneNode(true);
clone3.querySelector(".card-fullname").textContent = "Brian Huynh";
clone3.querySelector(".card-jobtitle").textContent = "Game Designer/Lore";
clone3.querySelector(".card-desc").textContent = "Lore master and visual experience. Studying Data Science at UCSD";
let contact3 = clone3.querySelectorAll(".card-contact");
contact3[0].textContent = "(562) 331-1828";
contact3[1].textContent = "bth001@ucsd.edu";
let social3 = clone3.querySelectorAll(".card-social a");
social3[0].href = "https://www.instagram.com/_brianhuynh/?utm_source=ig_web_button_share_sheet";
social3[1].href = "https://www.linkedin.com/in/brian-huynh-33889823b";
brian.appendChild(clone3);

const clone4 = tpl.content.cloneNode(true);
clone4.querySelector(".card-fullname").textContent = "Joseph Gonzalez";
clone4.querySelector(".card-jobtitle").textContent = "Fullstack Developer";
clone4.querySelector(".card-desc").textContent = "Developed subsections of the website. Studying Electrical Engineering at UCSD";
let contact4 = clone4.querySelectorAll(".card-contact");
contact4[0].textContent = "(949) 630-7791";
contact4[1].textContent = "jog038@ucsd.edu";
let social4 = clone4.querySelectorAll(".card-social a");
social4[0].href = "https://www.instagram.com/joe_.mamaaa/?utm_source=ig_web_button_share_sheet";
social4[1].href  = "https://www.linkedin.com/in/joseph-gonzalez-4bab14249"
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



