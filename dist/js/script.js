// Set image on diffrent viewports
const image = document.getElementById("img-hero");

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1440) {
    image.src = "./assets/images/illustration-sign-up-desktop.svg";
    console.log("desktop");
  } else {
    image.src = "./assets/images/illustration-sign-up-mobile.svg";
    console.log("mobile");
  }
});

// Save email

const form = document.querySelector("form");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Previeni l'invio del form

  const email = emailInput.value;
  
  console.log("Email inserita:", email);
});