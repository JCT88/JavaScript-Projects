
// sound dictionary
let animal = {
    cat : "Meow!",
    dog : "Bark!",
    cow : "Moo!",
    duck : "Quack!"
}


// display sound
function animalSounds(userAnimal){

    let sound;

    switch(userAnimal){

        case 'cat':
            sound = animal.cat;
            break;

        case 'dog':
            sound = animal.dog;
                break;

        case 'cow':
            sound = animal.cow;
            break;
            
        case 'duck':
            sound = animal.duck;
            break;

        default:
            "Not a valid animal"

    }

    document.getElementById('dictionary').innerHTML = sound
    
}


// remove DOM elements and dictionary KVPs
function removeCow(){
    delete animal.cow
    document.getElementById('cow').remove()
    document.getElementById('remove_cow').remove()
}

function removeCat(){
    delete animal.cat
    document.getElementById('cat').remove()
    document.getElementById('remove_cat').remove()
}

function removeDog(){
    delete animal.dog
    document.getElementById('dog').remove()
    document.getElementById('remove_dog').remove()
}

function removeDuck(){
    delete animal.duck
    document.getElementById('duck').remove()
    document.getElementById('remove_duck').remove()
}