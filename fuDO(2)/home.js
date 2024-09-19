const box = document.getElementById('box');
const discount = document.getElementById('discount');
let position = 0;

function animate() {
    position += 1;
    box.style.left = position + 'px';

    if (position >= window.innerWidth - box.clientWidth) {
        position = 0;
    }
}

setInterval(animate, 10);

function fadeOut() {
    discount.style.opacity = 0;
}

function fadeIn() {
    discount.style.opacity = 1;
}

setInterval(() => {
    fadeOut();
    setTimeout(fadeIn, 1000); 
}, 2000);