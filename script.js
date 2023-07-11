document.getElementById("generate-button").addEventListener("click", function() {
    var image = document.getElementById("image");
  
    // Logic to generate glitched image
    // ...
  
    // Set glitched image source
    image.src = "My-photo-for-the-socials-_1_-reverb.png";
  });
  
  document.getElementById("email-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var emailInput = document.getElementById("email-input").value;
    
    // Logic to send the glitched image to the specified email
    // ...
    
    alert("Glitched image sent to " + emailInput);
  });
  