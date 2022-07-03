let hello = "hello",
    space  = " ",
    world = 'world';

// use concat
let result = hello.concat(space, world);
document.getElementById("concat").innerHTML = result;

// use slice
let newWorld = result.slice(6,11)
console.log(newWorld)

// use toString()
let randNumber = 99775764
let numberString = randNumber.toString()
console.log(numberString + " is a " + typeof numberString + " data type.")

// use toPrecision()
let pi = 3.14159265359
console.log("Pi approximately " + pi.toPrecision(3))

