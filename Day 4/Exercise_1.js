/*Question 1: Get user input using prompt(“Enter your age:”). 
If user is 18 or older , give feedback:
'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.*/

//Answer:

let age = prompt('Enter your age');

if (age >= 18 ) {
    console.log('You are old enough to drive') 
} else {
    let remainAge = 18 - age
    console.log(`You are left with ${remainAge} years to drive`)
}

/* Question 2: Compare the values of myAge and yourAge using if … else. 
Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

 */

//Answer:

let myAge = parseInt(prompt('My age'));
let yourAge = parseInt(prompt('Enter your age'));

if (myAge > yourAge) {
    console.log('I am older than you ')
} else if (myAge === yourAge) {
    console.log('We are age mate')
} else {
    let ageDiff = yourAge - myAge
    console.log(`You are ${ageDiff} years older than me`)
}

/*Question 3:  If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways */

//Answer: 

let a = 4
let b = 3

if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else if (a===b) {
    console.log(`${a} is equal to ${b}`)
} else{
    console.log(`${a} is less than ${b}`)
}
let x = 5
let y = 6
? console.log(`${x} is greater than ${y}`)
: console.log(`${x} is less than ${y}`)


/* 
 Question 4: Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
    Enter a number: 2
    2 is an even number
    Enter a number: 9
    9 is is an odd number.
*/

// Answer:
let num = parseInt(prompt('Enter a number'));
if (num % 2 === 0){
    console.log(num + ' is even');
}else{
    console.log(num + ' is odd');

}