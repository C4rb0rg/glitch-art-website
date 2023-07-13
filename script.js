document.getElementById("generate-button").addEventListener("click", function() {
  var image = document.getElementById("image");

  // Logic to generate glitched image
  // ...

  // Set glitched image source
  image.src = "My-photo-for-the-socials-_1_-reverb.png";
});

document.getElementById("send-button").addEventListener("click", function() {
  var emailInput = document.getElementById("email-input").value;
  if (emailInput.trim() !== "") {
    sendEmail(emailInput);
  } else {
    alert("Please enter a valid email address.");
  }
});

document.getElementById("reset-button").addEventListener("click", function() {
  var image = document.getElementById("image");
  var emailInput = document.getElementById("email-input");
  
  // Reset image and email input
  image.src = "My-photo-for-the-socials-_1_.png";
  emailInput.value = "";
});

document.getElementById("email-input").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { // Enter key pressed
    var emailInput = document.getElementById("email-input").value;
    if (emailInput.trim() !== "") {
      sendEmail(emailInput);
    } else {
      alert("Please enter a valid email address.");
    }
  }
});

function sendEmail(email) {
  // Logic to send the glitched image to the specified email
  // ...

  alert("Glitched image sent to " + email);
}
