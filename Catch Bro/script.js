let box = document.getElementById('box');
function DoTheThing() {
    var maxX = window.innerWidth - box.offsetWidth;
    var maxY = window.innerHeight - box.offsetHeight;
    let topP = Math.floor(Math.random() * maxY);
    let leftP = Math.floor(Math.random() * maxX);
    box.style.top = topP + 'px';
    box.style.left = leftP + 'px';
}

function Gotcha() {
    let msg = document.getElementById('msg');
    let image = document.getElementById('pepeImage');
    image.src = 'pepe_sad.gif';
    msg.textContent = 'You MONSTERR!!';
}
