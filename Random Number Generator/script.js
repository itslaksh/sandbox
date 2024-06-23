// // Random Number Generator

// const min = 50;
// const max = 100; 

// let rndNum = Math.floor(Math.random() * (max-min)) + min;

// console.log(rndNum);

const mybtn = document.getElementById("btn");
const minip = document.getElementById("min");
const maxip = document.getElementById("max");
const lbl = document.getElementById("lbl")

let randnum;

mybtn.onclick = function () {
    let min = parseInt(minip.value);
    let max = parseInt(maxip.value);
    randnum = Math.floor(Math.random() * (max - min + 1)) + min;
    lbl.textContent = `Randomly Generated Number: ${randnum}`;
}

// // Random Number Generator End
