document.getElementById("generate-button").addEventListener("click", function() {
    var originalImage = document.getElementById("original-image");
    var glitchedImage = document.getElementById("glitched-image");
  
    // Logic to generate glitched image
    // ...
  
    // Set glitched image source and show it
    glitchedImage.src = "My-photo-for-the-socials-_1_-reverb.png";
    glitchedImage.style.opacity = 1;
  });
  
  document.getElementById("email-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var emailInput = document.getElementById("email-input").value;
    
    // Logic to send the glitched image to the specified email
    // ...
    
    alert("Glitched image sent to " + emailInput);
  });
  