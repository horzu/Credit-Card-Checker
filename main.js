// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

const validateCred = array =>{
  
  let lastIndex = array.length - 1;
  let copiedCreditCard = array.slice();
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sum = 0;
  for(i= lastIndex -1 ; i>=0; i -= 2){
    copiedCreditCard[i] = copiedCreditCard[i] *2;
    if(copiedCreditCard[i] >9){
      copiedCreditCard[i] = copiedCreditCard[i] -9;
    }
    
  }
  //console.log(array);
  //console.log(copiedCreditCard);
  sum = copiedCreditCard.reduce(reducer);
  //console.log(sum);
  if(sum % 10 === 0){
    return true;
  } else {
    return false;
  }
} ;

const findInvalidCards = nestedArray => {
  let invalidCards = [];
  for(let i=0; i<nestedArray.length; i++){
    let isValid = validateCred(nestedArray[i])
    //console.log(isValid)
    if(isValid === false){
      invalidCards.push(nestedArray[i])
    }
  }
  return invalidCards;
};

const idInvalidCardCompanies = nestedArray =>{
  let invalidAmex = 0;
  let invalidVisa = 0;
  let invalidMastercard = 0;
  let invalidDiscover = 0;
  let invalidCompanies = []
  for(let i in nestedArray){
    if(nestedArray[i][0] === 3){
      invalidAmex += 1;
    }
    if(nestedArray[i][0] === 4){
      invalidVisa += 1;
    } 
     if(nestedArray[i][0] === 5){
      invalidMastercard += 1;
    } 
     if(nestedArray[i][0] === 6){
      invalidDiscover += 1;
    } 
  }
  if(invalidAmex > 0){
    invalidCompanies.push("Amex");
  }
   if(invalidVisa > 0){
    invalidCompanies.push("Visa");
  }
   if(invalidMastercard > 0){
    invalidCompanies.push("Mastercard");
  }
   if(invalidDiscover > 0){
    invalidCompanies.push("Discover");
  }
  return invalidCompanies;
};

//console.log(validateCred(invalid1));
console.log(findInvalidCards(batch));
console.log(idInvalidCardCompanies(batch));

//challanges are below

//To make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays. (Check the hint for a helpful function)

let differentCard = "6371513352294946";

const cardNumberSingler = array => {
  let newArray = [];
  let newArray2 = [];
  //newArray = parseInt(array);
  for(let i in array){
    newArray.push(array[i])
    newArray2.push(parseInt(newArray[i]))
  }
    
  return newArray2;
  };
  
//console.log(cardNumberSingler(differentCard));
//console.log(validateCred(cardNumberSingler(differentCard)));
//console.log(idInvalidCardCompanies(cardNumberSingler(differentCard)));

//Create a function that will convert invalid numbers into valid numbers.
const invalidToValid = array =>{
  if(validateCred(array) === false){
  let lastIndex = array.length - 1;
  let copiedCreditCard = array.slice();
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sum = 0;
  for(i= lastIndex -1 ; i>=0; i -= 2){
    copiedCreditCard[i] = copiedCreditCard[i] *2;
    if(copiedCreditCard[i] >9){
      copiedCreditCard[i] = copiedCreditCard[i] -9;
    }
    
  }
  console.log(array);
  //console.log(copiedCreditCard);
  sum = copiedCreditCard.reduce(reducer);
  console.log(sum);
  let distance = sum % 10;
  console.log("1st distance: " +distance)
  let distance2 = 10 - distance  
  console.log("2nd distance: " +distance2)
  
  //console.log(copiedCreditCard);
  if(distance > 5){
    array[lastIndex] += distance2;
    if(array[lastIndex] === 10){
      array[lastIndex] = 0
    }
  } else if(array[lastIndex] < distance){
    array[lastIndex] += distance2;
  } else if(array[lastIndex] > distance) {
    array[lastIndex] -= distance;
    } else {
    array[lastIndex] += distance2;
  }
  //console.log(array)
  return array;

  }
  else {
    console.log("Credit Card Number is already valid")
    return array;
  }
};

console.log(invalidToValid(cardNumberSingler(differentCard)));
