
//(question)?(result if true):(result is false)

const isOldEnoughToDrink = (age) => (age >= 21) ? true:false;
/*const isOldEnoughToDrink = (age) => {
  if(age >= 21) {
    return true;
  } else {
    return false;
  }
};*/

//var output = isOldEnoughToDrink(20);

//console.log(output);

const isGreaterThan = (number1, number2) => (number1 < number2 ) ? true: false;

//var output = isGreaterThan(11, 9);
//console.log(output); // --> false
const checkAge = (name, age) => (age > 21 ) ?`Welcome, ${name}!`: `Go home, ${name}!`;

var output = checkAge('Adrian', 21);
console.log(output);
