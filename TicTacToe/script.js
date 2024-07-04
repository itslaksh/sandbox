let play = document.getElementById("play");
let start = document.getElementById("start");
let turn = document.getElementById('turnID');
let ResultID = document.getElementById("ResultID");

const Player_1 = document.getElementById('Player-1');
const Player_2 = document.getElementById('Player-2');
let P1 = document.getElementById('P1');
let P2 = document.getElementById('P2');


function changeScreen(fromScreenID, toScreenID) {
    const fromScreen = document.getElementById(fromScreenID);
    const toScreen = document.getElementById(toScreenID);

    // Fade out the current screen
    fromScreen.style.opacity = 0;

    // After the fade-out transition, change display and fade in the new screen
    setTimeout(() => {
        fromScreen.classList.remove('active'); // Hide the old screen
        fromScreen.style.display = 'none'; // Ensure it's not taking up space

        toScreen.style.display = 'block'; // Make the new screen visible
        setTimeout(() => {
            toScreen.style.opacity = 1; // Fade in the new screen
            toScreen.classList.add('active');
        }, 50); // Short delay to trigger transition
    }, 500); // Delay to match the CSS transition duration for opacity
}



play.onclick = function () {
    document.getElementById('SocialID').classList.remove('active');
    changeScreen('IntroID', 'NameID');

}

// Game Start
start.onclick = function () {
    changeScreen('NameID', 'GameID');
    P1.textContent = `${Player_1.value || "Player 1"}`;
    P2.textContent = `${Player_2.value || "Player 2"}`;
    turn.textContent = `${Player_1.value || "Player 1"}'s Turn`;
}

let turnctr = 1;

function tap(box_ID) {
    let ID = document.getElementById(box_ID);
    if (ID.textContent === "") {
        if (turnctr === 1) {
            ID.innerHTML = `<img src="x.png">`;
            turnctr = 0;
            turn.textContent = `${Player_2.value || "Player 2"}'s Turn`; // ⭕'s turn
        }
        else if (turnctr === 0) {
            ID.innerHTML = `<img src="o.png">`;
            turnctr = 1;
            turn.textContent = `${Player_1.value || "Player 1"}'s Turn`; // ❌'s turn
        }

        const img = ID.querySelector('img');
        img.classList.add('pop');

        img.addEventListener('animationend', () => {
            img.classList.remove('pop');
        });

        ID.classList.add('pop')
        checkWin();
        ID.onclick = null;
    }
}

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('animationend', () => {
        box.classList.remove('pop');
    });
});

// Winner: Game is Game 🤫🧏‍♂️
function checkWin() {
    const winComb = [
        ["box1", "box2", "box3"],
        ["box4", "box5", "box6"],
        ["box7", "box8", "box9"],
        ["box1", "box4", "box7"],
        ["box2", "box5", "box8"],
        ["box3", "box6", "box9"],
        ["box1", "box5", "box9"],
        ["box3", "box5", "box7"]
    ];


    for (const comb of winComb) {
        const [a, b, c] = comb;
        const boxA = document.getElementById(a).querySelector('img');
        const boxB = document.getElementById(b).querySelector('img');
        const boxC = document.getElementById(c).querySelector('img');


        if (boxA && boxB && boxC && boxA.src === boxB.src && boxA.src === boxC.src) {

            document.getElementById('AgainID').classList.add('active');

            // const winner = boxA.alt === 'x' ? Player_1.value : Player_2.value;
            // turn.innerHTML = `Game Over!<br>${winner || (boxA.alt === 'x' ? "Player 1" : "Player 2")} Wins!`;
            const winnerSrc = boxA.src;
            let winner;
            if (winnerSrc.includes('x.png')) {
                winner = Player_1.value || "Player 1";
            } else if (winnerSrc.includes('o.png')) {
                winner = Player_2.value || "Player 2";
            }
            turn.innerHTML = `Game Over!<br>${winner} Wins!`;

            boxC.style.animation = "";  // Reset any existing animations
            // box      .classList.add('flash-icon');
            const winningBoxes = [boxA, boxB, boxC];
            for (const box of winningBoxes) {
                box.id = "winning-icon";  // Add a unique ID to each winning icon
                box.classList.add('flash-icon');
            }

            console.log("Adding flash-icon class to winning icons");
            console.log("boxA:", boxA);
            console.log("boxB:", boxB);
            console.log("boxC:", boxC);
            // boxA.classList.add('flash-icon');
            // boxB.classList.add('flash-icon');
            // boxC.classList.add('flash-icon');

            boxA.addEventListener('animationend', () => {
                boxA.classList.remove('flash-icon');
            });
            boxB.addEventListener('animationend', () => {
                boxB.classList.remove('flash-icon');
            });
            boxC.addEventListener('animationend', () => {
                boxC.classList.remove('flash-icon');
            });


            const allBoxes = document.getElementsByClassName('box');
            for (const box of allBoxes) {
                if (!comb.includes(box.id)) {
                    box.classList.add('blur-box');
                }
            }

            disableAllClicks();
            return;
        }
    }

    const allFilled = [...document.getElementsByClassName('box')].every(box => box.children.length > 0);
    if (allFilled) {
        document.getElementById('AgainID').classList.add('active');
        turn.textContent = "It's a Draw!";
        turn.innerHTML = "It's a Draw!<br>Game Over!";

        const allBoxes = document.getElementsByClassName('box');
        for (const box of allBoxes) {
            box.classList.add('blur-box');
        }
        disableAllClicks();

    }

}

function disableAllClicks() {
    const boxes = document.getElementsByClassName('box');
    for (const box of boxes) {
        box.onclick = null;
    }
}

// Play Again
function PlayAgain() {
    const boxes = document.getElementsByClassName('box');
    for (const box of boxes) {
        while (box.firstChild) {
            box.removeChild(box.firstChild);
        }
        box.style.textShadow = "";
        box.onclick = function () { tap(box.id); };
        box.classList.remove('blur-box');

    }

    turnctr = 1;
    turn.textContent = `${Player_1.value || "Player 1"}'s Turn`;
    document.getElementById('AgainID').classList.remove('active')
}


// Home 
function GoHome() {
    changeScreen('GameID', 'IntroID');
    document.getElementById('SocialID').classList.add('active');

    document.getElementById('AgainID').classList.remove('active');
    const boxes = document.getElementsByClassName('box');
    for (const box of boxes) {
        while (box.firstChild) {
            box.removeChild(box.firstChild);
        }
        box.style.textShadow = "";
        box.onclick = function () { tap(box.id); };
        box.classList.remove('blur-box');
    }

    turnctr = 1;
    turn.textContent = `${Player_1.value || "Player 1"}'s Turn`;


}

