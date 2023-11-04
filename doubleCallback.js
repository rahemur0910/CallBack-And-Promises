/*
Write a function that takes in an array of integers and a callback function, and returns a new array where each
element is doubled using the callback.
*/

function doubleArrayElements(arr,callback)
{
    // check if the input is an array and the callback is a function
    if(!Array.isArray(arr)||typeof callback !== 'function')
    {
        throw new Error('Invalid Input');
    }
    //Create a new array to store the doubled elements
    const doubledArray = [];

    //Iterrate through the input array and apply the callback function

    for(let i =0;i<arr.length;i++)
    {
        const doubledValue = callback(arr[i]);
        doubledArray.push(doubledValue);
    }
    return doubledArray;
}

const inputArray = [1,2,3,4,5,6,7,8,9,10];

function doubleNumber(num)
{
    return num*2;
}

const doubledResult = doubleArrayElements(inputArray,doubleNumber);

console.log(doubledResult);