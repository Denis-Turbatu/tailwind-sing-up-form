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
function saveEmail(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get the email value from the input field
  var email = document.getElementById("email").value;

  // Check if email is valid (optional)
  // You can add email validation logic here using regular expressions or libraries

  // Store the email in Local Storage
  localStorage.setItem("savedEmail", email);

  // Redirect to success page (you can remove target="_blank" from the button)
  window.location.href = "success.html";
}