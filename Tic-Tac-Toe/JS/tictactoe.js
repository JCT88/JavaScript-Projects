let activePlayer = "X";
let selectedSquares = [];

// place and x or o
function placeXOrO(squareNumber){

    // check if the square has been selected already
    if(!selectedSquares.some(element => element.includes(squareNumber))){
        
        // check element that was clicked
        let select = document.getElementById(squareNumber)

        // check whos turn
        if (activePlayer === "X"){

            // if player X
            select.style.backgroundImage = 'url("images/x.png")'

        } else {
            // if player o
            select.style.backgroundImage = 'url("images/o.png")'
        }



        // concatenate squareNumber and player
        selectedSquares.push(squareNumber + activePlayer)

        checkWinConditions()

        if (activePlayer === "X"){
            activePlayer = 'O'
        } else {
            activePlayer = 'X'
        }

        // play place audio
        audio('./Media/place.mp3')

        if (activePlayer === "O"){

            // don't let X play
            disableClick();

            // let computer choose and add delay
            setTimeout(function(){computersTurn()},1000)
        }

        // tell player O the square was valid
        return true; 
    }


    

    // place a random square
    function computersTurn() {
        
        // success default
        let success = false;

        // the computers square
        let pickASquare;

        // keep choosing till empty square is found
        while (!success) {
            
            // pick random square; 0-8
            pickASquare = String(Math.floor(Math.random() * 9))

            // check 
            if (placeXOrO(pickASquare)){

                // place the O
                placeXOrO(pickASquare)

                // square was placed
                success = true;
            }


        }

    }

    function checkWinConditions () {

        // check all possilbe X win conditions
        if      (arrayIncludes('0X','1X','2X')){drawWinLine(50,100,558,100);}
        else if (arrayIncludes('3X','4X','5X')){drawWinLine(50,304,558,304);}
        else if (arrayIncludes('6X','7X','8X')){drawWinLine(50,508,558,508);}
        else if (arrayIncludes('0X','3X','6X')){drawWinLine(100,50,100,558);}
        else if (arrayIncludes('1X','4X','7X')){drawWinLine(304,50,304,558);}
        else if (arrayIncludes('2X','5X','8X')){drawWinLine(508,50,508,558);}
        else if (arrayIncludes('6X','4X','2X')){drawWinLine(100,508,510,90);}
        else if (arrayIncludes('0X','4X','8X')){drawWinLine(100,100,520,520);}
      
        // check all possible O win conditions
        else if (arrayIncludes('0O','1O','2O')){drawWinLine(50,100,558,100);}
        else if (arrayIncludes('3O','4O','5O')){drawWinLine(50,304,558,304);}
        else if (arrayIncludes('6O','7O','8O')){drawWinLine(50,508,558,508);}
        else if (arrayIncludes('0O','3O','6O')){drawWinLine(100,50,100,558);}
        else if (arrayIncludes('1O','4O','7O')){drawWinLine(304,50,304,558);}
        else if (arrayIncludes('2O','5O','8O')){drawWinLine(508,50,508,558);}
        else if (arrayIncludes('6O','4O','2O')){drawWinLine(100,508,510,90);}
        else if (arrayIncludes('0O','4O','8O')){drawWinLine(100,100,520,520);}

        // tie condition
        else if (selectedSquares.length >= 9){
            audio('./Media/tie.mp3')
            setTimeout(function(){resetGame()},1000)
        }

    }

    // check if the array includes any of the conditions
    function arrayIncludes(squareA, squareB, squareC){
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        if (a===true && b===true && c===true){return true}
    }


}

// access audio according to path and play
function audio(audioUrl){
    
    let audio = new Audio(audioUrl)
    audio.play()

}


function disableClick(){

    // make body unclickable
    body.style.pointerEvents = 'none'
    
    // make clickable after 1 second
    setTimeout(function(){body.style.pointerEvents = 'auto'},1000)

}

function drawWinLine(coordX1, coordY1, coordX2, coordY2){

    // get canvas
    const canvas = document.getElementById('win-lines')

    // get canvas object and methods
    const c  = canvas.getContext('2d')

    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2
        x = x1,
        y = y1;

    function animateLineDrawing () {

        // when the game ends, it restarts
        const animationLoop = requestAnimationFrame(animateLineDrawing)

        // clear content from last loop
        c.clearRect(0,0,608,608)

        // start a new path
        c.beginPath()

        // create a starting point
        c.moveTo(x1,y1)

        // create an end point
        c.lineTo(x,y)

        // set line width
        c.lineWidth = 10

        // set line color
        c.strokeStyle = 'rgba(70,255,33,.8)'

        // draw with above conditions
        c.stroke()
        
        // check if the endpoint is met
        if (x1 <= x2 && y1 <= y2){
            // add ten to previous x
            if (x < x2){x += 10}
            // add ten to previous y
            if (y < y2){y += 10}
            // cancel animation if end is met
            if (x >= x2 && y >= y2){cancelAnimationFrame(animationLoop)}
        }

        // for a 2, 4, 6 win condition
        if (x1 <= x2 && y1 >= y2){
            if (x < x2) {x += 10}
            if (y > y2) {y -= 10}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop)}
        }

    }

    // clear the canvas after a win is met
    function clear () {
        
        // start animation loop
        const animationLoop = requestAnimationFrame(clear)

        // clear the canvas
        c.clearRect(0,0,608,608)

        cancelAnimationFrame(animationLoop)

    }

    disableClick()

    audio('./Media/winGame.mp3')

    animateLineDrawing()

    setTimeout(function(){clear(); resetGame()}, 1000)

}

function resetGame () {

    for (let i = 0; i < 9; i++) {

        let square = document.getElementById(String(i))

        square.style.backgroundImage = ''

    }

    selectedSquares = []
}