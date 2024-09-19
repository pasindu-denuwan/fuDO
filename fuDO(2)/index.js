const logo = document.getElementById('logo');

function fadeOut() {
  logo.style.opacity = 0.5;
}

function fadeIn() {
  logo.style.opacity = 1;
}

setInterval(() => {
    fadeOut();
    setTimeout(fadeIn, 1000); 
}, 2000);