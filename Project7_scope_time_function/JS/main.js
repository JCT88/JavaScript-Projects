


function getTime(){

    // get hours and minutes
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()

    // cache DOM element
    let p = document.getElementById('click')

    // find am/pm
    if (hours >= 12){
        p.innerHTML = hours + ":" + minutes + " pm"
    } else {
        p += " am"
        p.innerHTML = hours + ":" + minutes + " am"
    }
}


// 
function checkAnswer(){

    // get the user input and find DOM elements
    let answer = document.getElementById('User_Input').value
    let result = document.getElementById('User_Result')

    // validate user input
    if (answer == '10'){
        result.innerHTML = "Correct!"
    } else {
        result.innerHTML = "Sorry, that is incorrect."
    }
}


// Copy Code
function timeFunction() {
    // get time
    let Time = new Date().getHours()

    // find DOM element
    let Time_of_Day = document.getElementById("Time_of_Day");

    // programed reply
    let reply;

    // decide what section of day it is
    if (Time < 12 == Time >0){
        reply = "It is morning time!"
    } else if (Time > 12 == Time < 10){
        reply = "It is afternoon."
    } else {
        reply = "It is evening time."
    }

    // inform the user
    Time_of_Day.innerHTML = reply
}










































