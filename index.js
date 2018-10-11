/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
let newID = oldID + 1000000000;
if (Number.isInteger(currentAge)) {
  ageIsValid = true;
} else {
  ageIsValid = false;
}

let randomNumber = Math.floor(Math.random() * 21);
let randomInteger = Math.round(randomNumber); 
let randomUserID = randomInteger + 1000000000;