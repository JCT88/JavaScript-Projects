window.addEventListener( 'load',
    function(){

        // call subprograms after JS is loaded
        Update_Display()

        const Keys = document.querySelector('.calculator-keys')

        // add event listeners
        Keys.addEventListener('click', (event) => {

            // create object for element that was clicked
            const {target} = event

            // exit if it's not a button
            if(!target.matches('button')){return}

            if(target.classList.contains('operator')){

                Handle_Operators(target.value)

                Update_Display()

                return

            }

            if(target.classList.contains('decimal')){

                Input_Decimal(target.value)

                Update_Display()

                return

            }

            // make sure AC clears all numbers
            if(target.classList.contains('all-clear')){

                Calculator_Reset()

                Update_Display()

                return

            }

            Input_Digit(target.value)

            Update_Display()

        })





    }
)


// keep track of values
const Calculator = {

    // display 0 on the screen
    Display_Value: '0',

    // hold the first operand for any expression
    First_Operand: null,

    // checks if the second operand has been input
    Wait_Second_Operand: false,

    // holds the operator
    operator: null

}

// handles events when buttons are clicked
function Input_Digit(digit){

    const {Display_Value, Wait_Second_Operand} = Calculator

    // check if second operand is chosen and update display
    if (Wait_Second_Operand === true){

        Calculator.Display_Value = digit

        Calculator.Wait_Second_Operand = false

    } else {

        // overwrite if 0, or add to the digit
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit

    }

}

// handle decimal points
function Input_Decimal(dot){

    // handle accidental clicks of the decimal button
    if(Calculator.Wait_Second_Operand === true) return;

    // add a decimal if there isn't one
    if(!Calculator.Display_Value.includes(dot)){

        Calculator.Display_Value += dot

    }

}

// handle operators
function Handle_Operators(Next_Operator){

    const {First_Operand, Display_Value, operator} = Calculator

    // solve and store in first operand if none exists
    const Value_of_Input = parseFloat(Display_Value)

    // if operator and second operand exists, then update operator and exit
    if(operator && Calculator.Wait_Second_Operand){

        Calculator.operator = Next_Operator

        return

    }

    if(First_Operand == null){

        Calculator.First_Operand = Value_of_Input

    // if operator exists
    } else if(operator){

        const Value_Now = First_Operand || 0;

        // solve with current value and new value
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);

        // only display 9 digits
        result = Number(result).toFixed(9)

        // remove trailing 0s
        result = (result * 1).toString()

        Calculator.Display_Value = parseFloat(result)

        Calculator.First_Operand = parseFloat(result)

    }

    Calculator.Wait_Second_Operand = true

    Calculator.operator = Next_Operator

}

const Perform_Calculation = {

    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,

    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,

    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,

    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,

    '=': (First_Operand, Second_Operand) => Second_Operand

}

function Calculator_Reset(){

    Calculator.Display_Value = '0'
    
    Calculator.First_Operand = null

    Calculator.Wait_Second_Operand = false

    Calculator.operator = null

}

// use Display_Value
function Update_Display(){

    const display = document.querySelector('.calculator-screen')

    display.value = Calculator.Display_Value

}
