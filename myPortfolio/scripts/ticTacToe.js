
//global variables
var gameMarker = "";
var player = null;
var moves = 1;
 

//Selects Random Player to start
function start() {
    var startPlayer = Math.floor((Math.random() *2) + 1);
    player = startPlayer;
    changeMarker();
 }

//Clears Board
function clearBoard() {
    for (var i = 1; i < 10; i++) {
        var clear = document.getElementById('sq' + i);
        clear.innerHTML = "";
        moves = 1;
    }
}

//Changes Marker
function changeMarker() {
    if(player === 1) {
        gameMarker = "X";
        player = 2;
    } else {
        gameMarker = "O";
        player = 1;
    }; 
};


//places marker on location onclick
function placeMark(elementId) {

    if (moves < 10) {
    var box = document.getElementById(elementId);
    moves += 1


        if (gameMarker === "X") {


            if (box.innerHTML === "") {
            box.innerHTML = "X";
            changeMarker();
            win();
            }
        }
        else {

            if (box.innerHTML === "") {
                box.innerHTML = "O";
                changeMarker();
                win();
            }
        }
        
        if (moves == 9) {
            alert("It's a draw...");
        }
    }
    
}



//declares win or lose by getting 3 in a row
function win() {
    var one = document.getElementById("sq1").innerHTML
    var two = document.getElementById("sq2").innerHTML
    var three = document.getElementById("sq3").innerHTML
    var four = document.getElementById("sq4").innerHTML
    var five = document.getElementById("sq5").innerHTML
    var six = document.getElementById("sq6").innerHTML
    var seven = document.getElementById("sq7").innerHTML
    var eight = document.getElementById("sq8").innerHTML
    var nine = document.getElementById("sq9").innerHTML
    
    var group = ((one && two && three) || ((four && five) && six) || ((seven && eight) && nine) || ((one && four) && seven) || ((two && five) && eight) || ((three && six) && nine) || ((one && five) && nine) || ((three && five) && seven));

    if ((group === "X") && (group != "O")) {
        alert("X wins!!!");
    }
    
    if ((group === "O") && (group != "X")) {
        alert("O wins!!!");
    }
    

}
