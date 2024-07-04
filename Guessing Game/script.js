let minVal, maxVal, guessVal, trueVal;
let tries = 3;
let playbtn = document.getElementById("play");
let guessbtn = document.getElementById("guessBTN");
let FinalMsg = document.getElementById("FinalMsg");
let msg = document.getElementById("msg");

playbtn.onclick = function () {
    document.getElementById('introID').classList.remove('active');
    document.getElementById('gameID').classList.add('active');
}




guessbtn.onclick = function () {
    minVal = document.getElementById('min');
    maxVal = document.getElementById('max');
    let min = parseInt(minVal.value);
    let max = parseInt(maxVal.value);
    
    if(tries === 3){
        trueVal = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    guessVal = document.getElementById('guess');
    let guess = parseInt(guessVal.value);

    if (isNaN(guess)) {
        alert("Please enter a valid number for your guess.");
        return;
    }

    if (guess === trueVal) {
        FinalMsg.textContent = `🎉Congratulations ${guess} Was the Correct Guess!!`;
        endgame();
    }
    else {
        tries--;
        if (tries > 0) {
            let hint = guess > trueVal ? 'Too high!' : 'Too low!';
            msg.textContent = `${hint} Try again. You have ${tries} tries left.`;
        }
        else {
            // msg.textContent = `😞Wrong guess... ${trueVal} was the Correct Guess `;
            FinalMsg.textContent = `Out of tries! The correct number was ${trueVal}.`;
            endgame();
        }
    }
}
function endgame() {
    document.getElementById('gameID').classList.remove('active');
    document.getElementById('resultID').classList.add('active');
    tries = 3;
}

let playagain = document.getElementById('Again');
playagain.onclick = function() {
    document.getElementById('resultID').classList.remove('active');
    document.getElementById('introID').classList.add('active');
    document.getElementById('min').Value = '';
    document.getElementById('max').Value = '';
    document.getElementById('guess').Value = '';
    trueVal = null;
    msg.textContent = '';
    finalMsg.textContent = '';
}

