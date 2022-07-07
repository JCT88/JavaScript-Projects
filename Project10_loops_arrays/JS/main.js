
// where to start the counter
var counter = 1;
function callLoop () {

    // count to ten
    while(counter<=10){
        document.getElementById('loop').innerHTML += (counter + "<br>")
        counter++
    }

}

// store alphabet string
var alphabet = "abcdefghijklmnopqrstuvwxyz"

// get the length of the alphabet string
function callLength () {
    
    document.getElementById('length'). innerHTML = 'There are ' + alphabet.length + " letters in the alphabet"

}

// write a for loop that writes each letter in a string
function writeLetters () {

    // create an array for the letters
    let letters = []

    // store each letter
    for (i = 0; i < alphabet.length; i++){
        letters.push(alphabet.slice(i,i+1))
    }

    // render each letter as a badge
    for (i=0; i < letters.length; i++){
        document.getElementById('alphabet').innerHTML += '<h5><span class="badge bg-secondary inline">' + letters[i] + '</span></h5>'
    }

}


const MathConstants = {
    lightSpeed : 186282,
    pi : 3.14,
    euler : 2.71
}

function mathConstants() {
    document.getElementById('constant').innerHTML = "Pi is " + MathConstants.pi
}




function getMonths () {
    Months.listMonths()
}

// months of the year object
let Months = {

    month1 : "January",
    month2 : "February",
    month3 : "March",
    month4 : "April",
    month5 : "May",
    month6 : "June",
    month7 : "July",
    month8 : "August",
    month9 : "September",
    month10 : "October",
    month11 : "November",
    month12 : "December",

    listMonths : function () {

        // create array with keys for the Month object
        let m =  Object.keys(Months)

        // render a badge per value using the keys, excluding the method
        for ( i=0; i<m.length-1; i++ ){

            document.getElementById('method').innerHTML += ('<h5><span class="badge bg-secondary inline">' + Months[m[i]] + '</span></h5>')

        }

    } 

}

function getFloors () {
    
    // start at floor 0
    let floor = 0;

    // start a while loop with 900 floors
    while(floor <= 900){

        // increase to floor 1
        floor++
        
        // skip floor 13
        if (floor == 13){continue;}

        // stop before floor 21
        if (floor == 21){break;}

        // render each floor according to the 
        document.getElementById('continue').innerHTML += ("Floor "+floor+"<br>")
    }
}