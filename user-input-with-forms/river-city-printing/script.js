window.addEventListener('load', function() {

    // Elements in card preview to add/change content/styling
    const cardBkg = document.getElementById('card-bkg');
    const cardText = document.getElementById('card-text');
    const name = document.getElementById('name');
    const address1 = document.getElementById('address1');
    const address2 = document.getElementById('address2');
    const phoneEmail = document.getElementById('phone-email');
  
    // TODO: Add object for form
    const form =this.document.getElementById('form');
  
    // TODO: Add objects for input elements
   const styleInput = document.getElementById('style-input');
   const nameInput = document.getElementById('name-input');
   const addressInput = document.getElementById('address1-input'); 
   const address2Input = document.getElementById('address2-input'); 
   const omitAddress2 = document.getElementById('omit-address2'); 
   const phoneInput = document.getElementById('phone-input'); 
   const emailInput = document.getElementById('email-input'); 
    
   // TODO: Add object for reset button
   const resetButton = document.getElementById('#reset-button');

    // TODO: Update styling of card preview based on input
   styleInput.addEventListener('change', function() {
      if (styleInput.value === 'elegant') {
        cardBkg.style.backgroundImage = 'url(images/elegant-bkg.png)';
        cardBkg.style.justifyContent = 'center';
        cardText.style.alignItems = 'center';
        cardText.style.alignItems = '#1a4362';
        name.style.fontFamily =  `'Cormorant SC', serif`;
        name.style.fontSize =  '20px';
      }
      // SAME LOGIC FOR OTHER IMAGES
   });

    // Card background - background-image and justify-content
    // Card text - align-items and text color
    // Name text - font-family and font-size
  
  
    // TODO: Update content of card preview with user input
   nameInput.addEventListener('input', function() {
      name.innerHTML = nameInput.value || "Your Name";
   });
   // SAME LOGIC FOR ADDRESS 1-2
  
   omitAddress2.addEventListener('input', function() {
    if(omitAddress2.checked) {
      address2.style.display = 'none';
    } else {
      address2.style.display = 'block';
    }
   });

   phoneInput.addEventListener('input', function() {
    phoneEmail.innerHTML = `${phoneInput.value} || ${emailInput.value || 'Your Name'}`;
  });
   emailInput.addEventListener('input', function() {
    phoneEmail.innerHTML = `${phoneInput.value ||'Your Name'} || ${emailInput.value} `;
  });
    // TODO: Add logic for resetting form & card preview
  
  
    // TODO: Give user an alert after a successful form submission
    // This will run only after it passes built-in validation
   
  
  });