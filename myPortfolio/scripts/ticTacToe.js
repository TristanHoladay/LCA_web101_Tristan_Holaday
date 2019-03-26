


// clears board
function clearBoard() {
    for (var i = 1; i < 10; i++) {
    var clear = document.getElementById('sq' + i);
    clear.innerHTML = "";
    }
}
var gameMarker = "";

// changes marker
function changeMarkerToX() {
    gameMarker = "X";
    console.log("The x button was clicked!");
}

function changeMarkerToO() {
    gameMarker = "O";
    console.log("The o button was clicked!");
}


//places marker on location onclick

function placeMark(elementId) {
    var box = document.getElementById(elementId);
    
    if (gameMarker === "X") {


        if (box.innerHTML === "") {
           box.innerHTML = "X"; 
        }
    }
    else {

        if (box.innerHTML === "") {
            box.innerHTML = "O";
        }
    }
    
}

//keeps track of how many squares are marked

//declares win or lose by getting 3 in a row

//
