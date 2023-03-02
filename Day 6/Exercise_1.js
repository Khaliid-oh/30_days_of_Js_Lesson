const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

  //Question 1: Iterate 0 to 10 using for loop, do the same using while and do while loop

//Answer: 

for (let i = 0; i < 11; i++) {
    console.log(i)
}

//B 

let j = 0;
while(j < 11) {
    console.log(j)
    j++
}


//C

let k = 0 
do {
    console.log(k)
    k++
} while (k < 11)

//Question 2: Iterate 10 to 0 using for loop, do the same using while and do while loop

//Answer: 
for (let j = 10; j >= 0; j--){
    console.log(j)
}


//B
let i = 10;
while (i >= 0) {
    console.log(i)
    i--
}




//Question 3: Iterate 0 to n using for loop
let n = parseInt(prompt('Enter n value'));
for (i = 0; i <= n; i++) {
    console.log(i)
}

//Question 4: Write a loop that makes the following pattern using console.log():Write a loop that makes the following pattern using console.log():

//Answer:
let numSign = ''
for (let m = 0; m<8; m++) {
console.log(numSign += 'm')
}


//Question 5: Use loop to print the following pattern:

// Answer:
for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i ** 2}`);



//Question 6: Using loop print the following pattern

// Answer:
console.log('i \t i^2 \t i^3')
for (i = 0; i <= 10; i++) {
    console.log(`${i} \t  ${i ** 2} \t ${i ** 3}`)
  }

//Question 7: Use for loop to iterate from 0 to 100 and print only even number

//Answer:

/*for(let i = 0; i <= 100; i++){
    if(i % 2 == 0 && i > 1){
        console.log(i);
    }
    }*/
    
    for (let i = 0; i <= 100; i+=2) {
        console.log(i);
    }
    

//Question 8: Use for loop to iterate from 0 to 100 and print only odd numbers

// Answer:
for (let i = 0; i < 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

//Question 9: Use for loop to iterate from 0 to 100 and print only prime numbers

// Answer:
let isPrime = true; 
for(let i=2; i <= 100; i++){
  for(let j=2; j < i - 1; j++){
    if(i % j == 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    console.log(i);
  }
  isPrime = true;
}


//Question 10: Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// Answer:
let sum = 0;
for(let i = 0; i <= 100; i++){
   sum += i;
}
console.log('The sum of all numbers from 0 to 100 is ' + sum);


//Question 11: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// Answer:
let sumE = 0;
let sumO = 0;

for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? (sumE += i) : (sumO += i);
}

console.log('The sum of all evens from 0 to 100 is '+ sumE + '. And the sum of all odds from 0 to 100 is ' + sumO);

//Question 12: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. 
    //Print sum of evens and sum of odds as array

// Answer:
const arrSumE = [];
arrSumE.push(sumE, sumO);
console.log(arrSumE);

//Question 13: Develop a small script which generate array of 5 random numbers

// Answer
const ranArr = [];
for (let i = 0; i <= 4; i++){
let ranNum = Math.floor(Math.random() * 100);
    ranArr.push(ranNum);
}
console.log(ranArr);


//Question 14: Develop a small script which generate array of 5 random numbers and the numbers must be unique

// Answer
const ranUniqueArr = [];
for (let i = 0; i <= 4; i++){
let ranNum = Math.floor(Math.random() * 20);
    ranUniqueArr.push(ranNum);
}
console.log(ranUniqueArr);


//Question 15: Develop a small script which generate a six characters random id:


// Answer:

for (let i =  0; i < 1; i++) {
    let ranId = Math.random().toString(36).substring(2,8);
	    console.log(ranId)
    }}