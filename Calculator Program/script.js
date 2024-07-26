var Display = document.getElementById("Display");


function ShowOnDisplay(val) {
    if (val === '%'){
        // Display.value = val;
        Percentage();
    }
    else{
        Display.value += val;
    }
}

function Percentage() {
    try {
        Display.value = (parseFloat(Display.value) / 100).toString();
    } catch (err) {
        Display.value = "Error";
    }
}


function AllClear() {
    Display.value = "";
}

function Backspace() {
    Display.value = Display.value.slice(0, -1);
}

function Result() {
    try {
        Display.value = eval(Display.value);
    }
    catch (err) {
        Display.value = "Error";
    }
}