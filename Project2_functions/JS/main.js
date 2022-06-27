
//change the style of #paragraph to green and concatenate
function greenify(){
    var p = document.getElementById('paragraph')
    p.style.color = "green"
    //tell the user what has happened
    p.innerHTML += " I'm now green"
}