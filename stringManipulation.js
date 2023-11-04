/*
Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
with the manipulated string or the new string to the console.
*/

function manipulateString(inputString)
{
    //Define the callback function "logString"
    function logString()
    {
        const manipulateString = inputString.toUpperCase();
        console.log(`The Manipulated String is: ${manipulateString}`);
    }
    // callback function
    return logString;
}

const originalString = "along with the manipulated string or the new string to the console.";
console.log(`Original String is: ${originalString}`);
const logFunction = manipulateString(originalString);
//When I call the "logFunction,"it will log the manipulated string.
logFunction();