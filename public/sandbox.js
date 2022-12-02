"use strict";
//----------TYPES----------
//----------FUNCTION SIGNATURES----------
let greet;
greet = (name, greeting) => {
    console.log(name, greeting);
};
//
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    } //error because if action is not add we are NOT returning a number as specified
    else {
        return numOne - numTwo;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(ninja.name, ninja.age);
};
