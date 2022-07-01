
// create numbers object
let calcInts = {
    one : 0,
    two : 0
};

// radio values
let addOp,
    subOp,
    multOp,
    divOp,
    multiOp,
    remOp,
    unOp,
    inOp,
    deOp,
    random;

// find values in DOM
function getNumbers(){
    calcInts.one = Math.floor(document.getElementById("first_number").value);
    calcInts.two = Math.floor(document.getElementById("second_number").value);
};

// find the operator
function getRadio(){
    addOp =     document.getElementById("add_radio");
    subOp =     document.getElementById("subtract_radio");
    multOp =    document.getElementById("multiply_radio");
    divOp =     document.getElementById("divide_radio");
    multiOp =   document.getElementById("multiple_radio");
    remOp =     document.getElementById('remainder_radio');
    unOp =      document.getElementById('unary_radio');
    inOp =      document.getElementById("increment_radio");
    deOp =      document.getElementById("decrement_radio");
    random =    document.getElementById("random_radio")
}


// Do Math
function doMath(){

    getNumbers();
    getRadio();

    // check add
    if(addOp.checked == true){
        
        // select empty h1
        let p = document.getElementById('result');
        
        // write to page
        let sum = calcInts.one + calcInts.two;
        p.innerHTML = "The sum is " + sum;
    } 
    
    // check subtract
    if(subOp.checked == true){

        // select empty h1
        let p = document.getElementById('result');
        
        // write to page
        let diff = calcInts.one - calcInts.two;
        p.innerHTML = "The difference is " + diff;
    } 
    
    // check multiply
    if(multOp.checked == true){

        // select empty h1
        let p = document.getElementById('result');
    
        // write to page
        let product = calcInts.one * calcInts.two;
        p.innerHTML = "The product is " + product;
    } 
    
    // check divide
    if(divOp.checked == true){
        
        // select empty h1
        let p = document.getElementById('result');
    
        // write to page
        let dividend = calcInts.one / calcInts.two;
        p.innerHTML = "The dividend is " + dividend;
    } 

    // check multiple
    if(multiOp.checked == true){

        // select empty h1
        let p = document.getElementById('result');

        // write to page
        let multipleOps = (calcInts.one * calcInts.two) - (calcInts.two - 1);
        p.innerHTML = "(" + calcInts.one +  " * " + calcInts.two + ')' + " - " + (calcInts.two - 1) + " = " + multipleOps;
    } 

    // check remainder
    if(remOp.checked == true){
    
        let p = document.getElementById('result');
    
        // write to page
        let remainder = calcInts.one % calcInts.two;
        p.innerHTML = calcInts.one + " divided by " + calcInts.two + " has a remainder of " + remainder;
    }

    // check unary
    if(unOp.checked == true){
    
        let p = document.getElementById('result');
        
        // write to page
        p.innerHTML = -(calcInts.one)
    }

    // check increment
    if(inOp.checked == true){

        let p = document.getElementById('result');
        
        calcInts.one++;

        // write to page
        document.getElementById("first_number").value = calcInts.one;
        p.innerHTML = "Click as fast as you can! " + calcInts.one;


    }

    // check increment
    if(deOp.checked == true){

        let p = document.getElementById('result');

        calcInts.one--

        // write to page
        document.getElementById("first_number").value = calcInts.one
        p.innerHTML = "This is kind of like my bank account :'( " + calcInts.one;

    }

    // check random
    if(random.checked == true){

        let p = document.getElementById('result');

        // write to page
        let randomNum = getRandomNumber(calcInts.one, calcInts.two)
        p.innerHTML = "Here's a random number " + randomNum

    }



};


// random number generator
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}




// Hide and show DOM elements-------------------------------------
// second field
function hideSecondField(){
    let secondField = document.getElementById('second_field');
    secondField.style = "visibility:hidden;"
}
function showSecondField(){
    let secondField = document.getElementById('second_field');
    secondField.style = "visibility:show;"
}

