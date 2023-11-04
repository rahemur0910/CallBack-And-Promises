/*
Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
name, and age in years as input. The function should concatenate the first and last name into a single string
and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
variable called ageInDays.
The ageInDays function should then return a callback function that logs a message to the console. The
message should include the person's full name and age in days, and should be in the format: "The person's full
name is [full name] and their age in days is [age in days]."
Note that the ageInDays function should not log the message to the console directly, but should instead return
a callback function that can be used to log the message at a later time.
*/

function ageInDays(person)
{
    // concatenate first name and last name.
    const fullName = person.firstName + ' ' + person.lastName;

    // calculate age in days (assuming 365 days in a year)
    const ageInDays = person.age * 365;

    // Define the callback function "logAge"

    function logAge()
    {
        console.log(`The Person's full name is ${fullName} and their age in days is ${ageInDays} `);
    }
    return logAge;
}

const personData =
{
    firstName : 'Mithun',
    lastName : 'S',
    age : 22,
};

const logAgeFunction = ageInDays(personData);
// When I call the "logAgeFunction," it will log the person's name and age in days
logAgeFunction();