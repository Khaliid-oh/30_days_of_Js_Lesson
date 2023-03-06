
/*
    Question 1:  Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates 
    value of a linear equation, solveLinEquation.
*/

// Answer 

const solveLinEquation = (a, b, c, x, y) => { 
    const linearEquation =  (a*x) + (b*y) + c; 
    console.log(linearEquation);
    return linearEquation;
}
solveLinEquation(4, 4, 5, 3, 3);

/*
  Question 2:  Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates
   value or values of a quadratic equation, solveQuadEquation.*/

// Answer:

const solveQuadratic = (a, b, c) => {
  const discriminant = (b ** 2) - 4 * a * c; 
  let root1;
  let root2;
  if(discriminant > 0){   
       root1 = Math.round((-b + Math.sqrt(discriminant)) / (2 * a)); 
       root2 = Math.round((-b - Math.sqrt(discriminant)) / (2 * a)); 
      console.log('The roots of the Quadratic equation are ' + root1 + ' and ' + root2);
  }else if(discriminant == 0){
      root1 = root2 = Math.round(-b / (2 *a)); 
      console.log('The roots of the Quadratic equation are ' + root1 + ' and ' + root2);
  }else{
      let realPart = (-b / (2 *a)).toFixed(2);
      let imagPart = (Math.sqrt(-discriminant)) / (2 * a).toFixed(2);
      root1 = Math.round(realPart + imagPart);
      root2 = Math.round(realPart - imagPart);
      console.log('The roots of the Quadratic equation are ' + root1 + 'i and ' + root2 + 'i');
  }
  return root1, root2
}

solveQuadratic();
solveQuadratic(1, 4, 4); 
solveQuadratic(1, -1, -2); 
solveQuadratic(1, 7, 12); 
solveQuadratic(1, 0, -4);
solveQuadratic(1, -1, 0); 

/*
  Question 3:  Declare a function name printArray. It takes array as a parameter and it prints out each 
  value of the array.
*/

// Answer 
const printArray = () => {
  const array = [3, 4, 5, 6, 7];
  for(let i = 0; i < array.length; i++){  
  console.log(array[i]);
  }
  return array;
}
printArray();

/*
  Question 4:  Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the
   Date object.
*/

// Answer 

const showDateTime = () => {
  const now = new Date(); 
  const year = now.getFullYear(); 
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
}

showDateTime();


/*
  Question 5:  Declare a function name _swapValues_. This function swaps value of x to y.
*/

// Answer 
const swapValues = (x, y) => {
  x = x + y;
  y = x - y;
  x = x - y;
  console.log('x => ' + x + ', y => ' + y);
  return x, y;
}
swapValues(3, 4);
swapValues(4, 5);


/*
  Question 6:  Declare a function name _reverseArray_. It takes array as a parameter and it returns the reverse 
  of the array (don't use method).
*/

// Answer 

const reverseArray = (array) => {
  const newArray = [];
  for( let i = array.length - 1; i >= 0; i--){ 
      newArray.push(array[i]) 
  }
  console.log(newArray);
  return newArray;
}
reverseArray([1, 2, 3, 4, 5]);
reverseArray(['A', 'B', 'C']);

/*
  Question 7:  Declare a function name capitalizeArray. It takes array as a parameter and it returns 
  the - capitalizedarray.
*/

// Answer 
const capitalizedArray = (array) => {
  const capitalizedArr = array.map((name) => name[0].toUpperCase().concat(name.substring(1))); // convert the first index of each element in the array to upper case and concat the remaining strings
  console.log(capitalizedArr);
  return capitalizedArr;
}

capitalizedArray(['me', 'you', 'us', 'them']);


/*
  Question 8:  Declare a function name addItem. It takes an item parameter and it returns an array 
  after adding the item
*/

// Answer 
const addItem = (item) => {
  const food = [];
  food.push(item);    // pushing the item into the empty array named 'food'
  console.log(food);
  return food;
}
addItem('Eba');


/*
  Question 9:  Declare a function name removeItem. It takes an index parameter and it returns an array 
  after removing an item
*/

// Answer:
const removeItem = (item) => {
  const names = ['Habib', 'Hameez', 'Hafeez', 'Hakeem'];
  names.filter((name) => name !== item) 
  console.log(names);
  return names;
}
removeItem('Habib');


/*
  Question 10:  Declare a function name sumOfNumbers. It takes a number parameter and it adds all 
  the numbers in that range.
*/

// Answer
const sumOfNumbers = (number) => {
  let sum = 0;
  for(let i = 0; i <= number; i++){
      sum += i;  
  }
  console.log(sum);
  return sum;
}

sumOfNumbers(5);

/*
  Question 11:  Declare a function name sumOfOdds. It takes a number parameter and it adds all 
  the odd numbers in that - range.
*/

// Answer

const sumOfOdds = (number) => {
  let sum = 0;
  for(let i = 0; i <= number; i++){  
      if(i % 2 !== 0){      
          sum += i;      
      }
  }
  console.log(sum);
  return sum;
}

sumOfOdds(10);

/*
  Question 12:  Declare a function name sumOfEven. It takes a number parameter and 
  it adds all the even numbers in that range.

// Answer
const sumOfEven = (number) => {
  let sum = 0;   
  for(let i = 0; i <= number; i++){
      if(i % 2 == 0){ 
          sum += i;  
      }
  }
  console.log(sum);
  return sum;
}

sumOfEven(10);


/*
  Question 13:  Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts 
  number of evens and odds in the number.
*/

// Answer
const evensAndOdds = (number) => {
  let even = 0;
  let odds = 0;
  for(let i = 0; i <= number; i++){
      if(i % 2 === 0){
          even++
      }else{
          odds++
      }
  }
  console.log('The number of odds is ' + odds);
  console.log('The number of evens is ' + even)
  return even, odds;
}

evensAndOdds(100);


/*
  Question 14:  Write a function which takes any number of arguments and return the sum of the arguments
*/

// Answer
const sum = (...args) => {
  let sumA = 0;
  for(const element of args){
      sumA += element;
  }
  console.log(sumA);
  return sumA;
}
sum(1, 2, 3);
sum(1, 2, 3, 4);

/*
  Question 14:  Write a function which generates a randomUserIp.
*/

// Answer

const randomUserIp = () => {
  let ip = Math.floor((Math.random() * 255) + 1) + '.' + Math.floor(Math.random() * 255)+ '.' + Math.floor(Math.random() * 255)+ '.' + Math.floor(Math.random() * 255);
  console.log(ip);
}
randomUserIp();

/*
  Question 15:  Write a function which generates a randomMacAddress
*/

// Answer

const randomMacAddress = () => {
  let macAddress = '';
  const code = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'E', 'F');
  let partA = new Array(1);
  let partB = new Array(1);
  let partC = new Array(1);
  let partD = new Array(1);
  let partE = new Array(1);
  let partF = new Array(1);
  for (let i = 0; i < 2; i++){
      partA[i] = code[Math.floor(Math.random() * 14)];
      partB[i] = code[Math.floor(Math.random() * 14)];
      partC[i] = code[Math.floor(Math.random() * 14)];
      partD[i] = code[Math.floor(Math.random() * 14)];
      partE[i] = code[Math.floor(Math.random() * 14)];
      partF[i] = code[Math.floor(Math.random() * 14)];
      macAddress = partA[0] + partA[i] + ':' + partB[0] + partB[i] + ':' + partC[0] + partC[i] + ':' + partD[0] + partD[i] + ':' + partE[0] + partE[i] + ':' + partF[0] + partF[i]
  }
  console.log(macAddress);
  return macAddress;
}

randomMacAddress();

/*
  Question 16:  Declare a function name _randomHexaNumberGenerator_. When this function is called it generates 
  a random hexadecimal number. The function return the hexadecimal number.

  ```sh
  console.log(randomHexaNumberGenerator());
  '#ee33df'
  ```
*/

// Answer

const randomHexaNumberGenerator = () => {
  const hexaNumber = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return hexaNumber;
}

console.log(randomHexaNumberGenerator());


/*
  Question 17:  Declare a function name _userIdGenerator_. When this function is called it generates seven
   character id. The function return the id.
*/

// Answer
const userIdGenerator = () => {
  for(let i =  0; i < 1; i++){
      let ranId = Math.random().toString(36).substring(2,9).toUpperCase();
          return ranId;
}
}

console.log(userIdGenerator());