function rideFunction(){
    var height, can_ride;
    height = document.getElementById('height').value
    can_ride = (height < 52) ? "You are too short" : "You are tall enough"
    document.getElementById("ride").innerHTML = can_ride + " to ride"
}






function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red")
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black")
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard")

function myFunction(){
    document.getElementById("New_and_This").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year
}




function nestedFunction(){

    document.getElementById("User_Number").style.visibility = "hidden"
    document.getElementById("User_Number").style.position = "absolute"

    let User_Number = document.getElementById("User_Number").value
    
        function countDown(num){

            if(User_Number === 0){
                return;
            }
            
            document.getElementById("Result").innerHTML = User_Number
            User_Number -= 1

            // Doesn't work in IE9 or earlier
            let delay = setTimeout(function(){countDown(User_Number)}, 75)

        }
        
    countDown()
}













