
// Retrieve the saved email from Local Storage
var savedEmail = localStorage.getItem("savedEmail");

// Check if email exists in Local Storage (optional)
if (savedEmail) {
  // Display the email in success.html (you can modify how you display it)
  document.getElementById("email-success").innerHTML = "Your email: " + savedEmail;
} else {
  // Handle the scenario where no email is found in Local Storage (optional)
  console.log("No email found in Local Storage");
}
