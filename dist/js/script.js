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
