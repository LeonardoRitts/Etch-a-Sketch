const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell")
let btn = document.getElementById("btn")
let reload = document.getElementById('reload')
//reset screen
reload.addEventListener('click', deleteContent);
//Start game
btn.addEventListener('click', play);

function makeRow(number) {
    for (k = 0; k < number; k++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
}

function makeColumn(number) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < number; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
            //Add action to change color on mouse over
            newCell.setAttribute('onMouseOver', 'style.background = "black"');
        }
    }
}

function play() {
    let num = document.querySelector('input').value;
    if (num > 100) {
        alert("Less than 100")
    }
    makeRow(num);
    makeColumn(num);
}

function deleteContent() {
    if (document.getElementById('container').textContent != " ") {
        container.textContent = "";
    }
}

// Previous functioned used to start game with a prompt
// function play() {
//     let request = prompt("How squares per side should the board be?", "Choose from 10 to 100");
//     if (request > 100) {
//         let request = prompt("Sorry, it needs to be less than 101.", "What will it be?");
//     }
//     makeRow(request);
//     makeColumn(request);
// }