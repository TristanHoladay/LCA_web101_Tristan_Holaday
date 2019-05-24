
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
    var cells = document.querySelectorAll('.squares');
    
    
    

}
