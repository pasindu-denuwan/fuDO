let welcome=document.getElementById('findyour');
let fashion=document.getElementById('tasthere');
const box = document.getElementById('box');
// let text=document.getElementById('text');

window.addEventListener('scroll',()=>{
    let value=window.scrollY;

    findyour.style.marginRight =value *0.7+'px';
    tasthere.style.marginLeft=value *0.7+'px';
    // fashion.style.marginRight=value *3.5+'px';


});

function fadeOut() {
    box.style.opacity = 0;
}

function fadeIn() {
    box.style.opacity = 1;
}

setInterval(() => {
    fadeOut();
    setTimeout(fadeIn, 1000); // Match this duration to the transition duration
}, 2000);
