document.getElementById("generate-button").addEventListener("click", function() {
  var image = document.getElementById("image");

  // Logic to generate glitched image
  // ...

  // Set glitched image source
  image.src = "My-photo-for-the-socials-_1_-reverb.png";
});

document.getElementById("send-button").addEventListener("click", function() {
  var emailBox = document.getElementById("email-box");
  emailBox.classList.toggle("show-email-box");
});

document.getElementById("email-input").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { // Enter key pressed
    sendEmail();
  }
});

function sendEmail() {
  var emailInput = document.getElementById("email-input").value;

  // Logic to send the glitched image to the specified email
  // ...
  
  alert("Glitched image sent to " + emailInput);
}
