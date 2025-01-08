// Når email-ikonet bliver klikket
document.getElementById('email').addEventListener('click', function(event) {
    // Undgår at tooltip'en forbliver synlig, når du klikker på linket
    event.preventDefault();
    
    let tooltip = this.querySelector('.tooltip');
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = 1;
  
    // Hvis der allerede er et andet ikon med tooltip synlig, skjul det
    let otherTooltips = document.querySelectorAll('.tooltip');
    otherTooltips.forEach(function(tip) {
      if (tip !== tooltip) {
        tip.style.visibility = 'hidden';
        tip.style.opacity = 0;
      }
    });
  });
  
  // Når telefon-ikonet bliver klikket
  document.getElementById('phone').addEventListener('click', function(event) {
    // Undgår at tooltip'en forbliver synlig, når du klikker på linket
    event.preventDefault();
  
    let tooltip = this.querySelector('.tooltip');
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = 1;
  
    // Hvis der allerede er et andet ikon med tooltip synlig, skjul det
    let otherTooltips = document.querySelectorAll('.tooltip');
    otherTooltips.forEach(function(tip) {
      if (tip !== tooltip) {
        tip.style.visibility = 'hidden';
        tip.style.opacity = 0;
      }
    });
  });
  