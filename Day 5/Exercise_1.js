/*
    Question 1: Declare an _empty_ array
*/

// Answer
const array = [];

/*
    Question 2: Declare an array with more than 5 number of elements
*/

// Answer
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
    Question 3: Find the length of your array
*/

// Answer
console.log(num.length);

/*
    Question 4: Get the first item, the middle item and the last item of the array
*/

// Answer
const  firstItem = num[0];
const middleItem = num[3];
const lastItem = num.length - 1;

console.log([firstItem, middleItem, lastItem]);

/*
    Question 5: Declare an array called _mixedDataTypes_, put different data types in the array and 
    find the length of the array. The array size should  be greater than 5
*/

// Answer
const mixedDataTypes = ['String', 10 , true, 'number', false, 10];
console.log(mixedDataTypes.length);


/*
    Question 6: Declare an array variable name itCompanies and assign initial values Facebook, Google, 
    Microsoft, Apple, IBM, Oracle and Amazon
*/

// Answer
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

/*
    Question 7: Print the array using _console.log()_
*/

// Answer
console.log(itCompanies);

/*
    Question 8: Print the number of companies in the array
*/
console.log(itCompanies.length);
// Answer

/*
    Question 9: Print the first company, middle and last company
*/

// Answer
const  firstCom = itCompanies[0];
const middleCom = itCompanies[3];
const lastCom = itCompanies.length - 1;

console.log([firstCom, middleCom, lastCom]);

/*
    Question 10: Print out each company
*/

// Answer
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(lastCom);

/*
    Question 11: Change each company name  to uppercase one by one and print them out
*/

// Answer
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(lastCom.toUpperCase());

/*
    Question 12: Print the array like as a sentence: Facebook, Google, Microsoft, Apple, 
    IBM,Oracle and Amazon are big IT companies.
*/

// Answer
console.log(itCompanies.join(', ') + ' are big IT companies');

/*
    Question 13: Check if a certain company exists in the itCompanies array. If it exist 
    return the company else return a company is not found
*/

// Answer
/*const checkCom = prompt('Enter the company name');
const checkCom2 = checkCom.toLowerCase();
const checkCo = checkCom.charAt(0).toUpperCase() + checkCom.slice(1).toLowerCase();
const itCompaniess = itCompanies.map(name => name.toLowerCase());
if(itCompaniess.includes(checkCom2)){
    console.log(checkCo);
}else{
    console.log('company is not found')
}*/

const checkCom = prompt('Enter company name')
const index = itCompanies.indexOf(checkCom)
if (index === -1) {
    console.log('Company not found')
} else {
    console.log(checkCom)
}

/*
    Question 14: Filter out companies which have more than one 'o' without the filter method
*/

// Answer

const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const filteredCompanies = [];

for (let i = 0; i < companies.length; i++) {
  let count = 0;
  for (let j = 0; j < companies[i].length; j++) {
    if (companies[i][j] === 'o') {
      count++;
    }
  }
  if (count <= 1) {
    filteredCompanies.push(companies[i]);
  }
}

console.log(filteredCompanies);

/*const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const filteredCom = companies.filter(str => str.match(/o/))
console.log(filteredCom)*/

/*
    Question 15: Sort the array using _sort()_ method
*/

// Answer

console.log(itCompanies.sort());

/*
    Question 16: Reverse the array using _reverse()_ method
*/

// Answer
console.log(itCompanies.reverse());

/*
    Question 17: Slice out the first 3 companies from the array
*/

// Answer
console.log(itCompanies.slice(0,3));


/*
    Question 18: Slice out the last 3 companies from the array
*/

// Answer
console.log(itCompanies.slice(4));

/*
    Question 19: Slice out the middle IT company or companies from the array
*/

// Answer
console.log(itCompanies.slice(3,4));

/*
    Question 20: Remove the first IT company from the array
*/

// Answer
itCompanies.shift();
console.log(itCompanies);

/*
    Question 21: Remove the middle IT company or companies from the array
*/

// Answer
const itCom = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCom.splice(3,1));

/*
    Question 22: Remove the last IT company from the array
*/

// Answer
itCom.pop();
console.log(itCom);

/*
    Question 23: Remove all IT companies
*/

// Answer
console.log(itCom.splice());
