



function getReceipt(){

    // build reciept list
    var text1 = "<h3>You ordered</h3>"
    var runningTotal = 0
    var sizeTotal = 0
    var sizeArray = document.getElementsByClassName('size')

    // run through all size options
    for(i = 0; i < sizeArray.length; i++){

        // check which size was selected
        if(sizeArray[i].checked){

            // add selected size to the list
            var selectedSize = sizeArray[i].value
            text1 = text1 + selectedSize + '<br>'
        }
    }

    // find the price according to size
    if      (selectedSize === "Personal Pizza"){sizeTotal = 6}
    else if (selectedSize === "Small Pizza"){sizeTotal = 8}
    else if (selectedSize === "Medium Pizza"){sizeTotal = 10}
    else if (selectedSize === "Large Pizza"){sizeTotal = 14}
    else if (selectedSize === "Extra Large Pizza"){sizeTotal = 16}

    // add size to the total
    runningTotal = sizeTotal
    console.log(selectedSize+" = $"+sizeTotal+".00")
    console.log("Size text1: "+text1)
    console.log("subtotal: $"+runningTotal+".00")

    // pass list items to the next subprogram
    getTopping(runningTotal, text1)

}

function getTopping(runningTotal, text1){

    var toppingTotal = 0
    var selectedTopping = []
    var toppingArray = document.getElementsByClassName('toppings')

    // run through topping options
    for(j = 0; j < toppingArray.length; j++){

        // check which toppings were selected
        if(toppingArray[j].checked){

            // add selected toppings to the list
            selectedTopping.push(toppingArray[j].value)
            console.log("selected topping item: ("+toppingArray[j].value+")")
            text1 = text1 + toppingArray[j].value + "<br>"
        }

    }

    // find how many toppings
    var toppingCount = selectedTopping.length

    // if there are toppings
    if(toppingCount > 1){

        // give one free
        toppingTotal = (toppingCount -1)

    } else {

        // if no toppings
        toppingTotal = 0
    }

    // add the toppings to the running total
    runningTotal = (runningTotal + toppingTotal)

    console.log("total selected topping items: "+toppingCount)
    console.log(toppingCount+" toping -1 free topping = "+"$"+toppingTotal+".00")
    console.log("topping text1: "+text1)
    console.log("Purchase total: "+"$"+runningTotal+".00")

    document.getElementById('showText').innerHTML = text1
    document.getElementById('totalPrice').innerHTML = "<h3>Total: <strong>$"+ runningTotal + ".00" + "</strong></h3>"

}