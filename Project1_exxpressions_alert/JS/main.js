//alerts
alert("Hello world!")
window.alert('This is an alert written with the Window object')

//using document.write to make a <p> tag
var exampleParagraph = '<p>This is a paragraph written in JS</p>';
document.write(exampleParagraph)

//showing the use of backslashes to make quotes possible in JS parameters
var exampleBackslash = '<p>\'This is a paragraph written with quotes\'</p>';
document.write(exampleBackslash)

//showing string concatenation
var stringOne = '<p>This is written with ',
    stringTwo = 'concatenation and multiple variables in JS!</p>'
stringOne = stringOne.fontcolor('blue')
stringTwo = stringTwo.fontcolor('red')
var exampleConcat = stringOne + stringTwo
document.write(exampleConcat)

//using expressions 
var exampleExpression = 555+444;
document.write('This number was calculate using an expression in JS - ' +exampleExpression)

