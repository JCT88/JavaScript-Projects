//  making line breaks less annoying
let lb = '<br>'

// determining the data type
let exampleString = "this is a "
let exampleStringType = typeof exampleString
document.write("<h1>This is a " + exampleStringType + '</h1>')

// using infinity
document.write(2e310 + lb)
document.write(-2e310 + lb)

// comparision boolean logic
document.write("30 > 10? " + (30 > 10) + lb)

// console and type coersion
console.log('1 + 1 = ' + "1" + 1)

// using a equation
console.log(1==2)
console.log(1==1)

// using value and data type comparison operator
console.log("true" === "true")
console.log(3 === false)
console.log("true" === true)
console.log(false === true)

// using logical operators
console.log((44===44)&&(true===true)) // both are true = true
console.log((42===44)&&(true===true)) // one is true = false
console.log((42===44)||(true===true)) // one is true = true
console.log((42===44)||(false===true)) // neither are true = false

// using the not operator
console.log(!true) // not true = false 
console.log(!false) // double negatives return a positive