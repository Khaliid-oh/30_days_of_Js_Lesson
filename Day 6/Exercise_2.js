// Excercise Level 2
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
/*
    Question 1: Develop a small script which generate any number of characters random id:

*/

// Answer
let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    const randomCharacter = characters.charAt(randomIndex);
    result += randomCharacter;}
    const randomId = generateRandomId(8);
    console.log(randomId);

/*
    Question 2: Write a script which generates a random hexadecimal number.
*/

// Answer
const randomHexa = Math.floor(Math.random()*16777215).toString(16);
console.log('#' + randomHexa);

/*
    Question 3: Write a script which generates a random rgb color number.

*/

// Answer

    const ranR = Math.floor(Math.random() * 255);
    const ranG = Math.floor(Math.random() * 255);
    const ranB = Math.floor(Math.random() * 255);
    console.log('rgb(' + ranR+ ',' + ranG + ',' + ranB + ')');
    
/*
    Question 4: Using the above countries array, create the following new array.


// Answer
const newCont = countries.map(name => name.toUpperCase());
console.log(newCont.sort());

/*
    Question 5: Using the above countries array, create an array for countries length'.
*/

// Answer
const newContt = countries.map(name => name.length);
console.log(newContt);

/*
    Question 6: Use the countries array to create the following array of arrays:
*/

// Answer
const newCountries = [];
let abbreviations =['ALB', 'BOL', 'CAN', 'DEN', 'ETH', 'FIN', 'GER', 'HUN', 'IRE', 'ICE', 'JAP', 'KEN'];
for (let i = 0; i < countries.length; i++) {
    newCountries.push(Array.of(countries[i], abbreviations[i], countries[i].length));
}
console.log(newCountries);


/*
    Question 7: In above countries array, check if there is a country or countries containing the word 'land'. 
    If there are countries containing 'land', print it as array. If there is no country containing the word 'land',
     print 'All these countries are without land'.

*/

// Answer
const landArr = [];
const noLandArr = [];
for(let i =  0; i < countries.length; i++){
  countries[i].includes('land') ? landArr.push(countries[i]) : noLandArr.push(countries[i]);
}
console.log(landArr);
console.log(noLandArr);

/*
    Question 8: In above countries array, check if there is  a country or countries end with a substring 'ia'. 
    If there are countries end with, print it as array. If there is no country containing the word 'ai', print 
    'These are countries ends without ia'.
*/

// Answer
const withIaArr = [];
const withoutIaArr = [];
for(let i =  0; i < countries.length; i++){
  countries[i].endsWith('ia') ? withIaArr.push(countries[i]) : withoutIaArr.push(countries[i]);
}
console.log(withIaArr);
console.log('These countries ends without ia ' + withoutIaArr);


/*
    Question 9: Using the above countries array, find the country containing the biggest number of characters.

*/

// Answer
let bigChar = [];
for (let i = 0; i < countries.length; i++) {
   if(countries[i].length > bigChar.length) {
    bigChar = countries[i];
   }
}
console.log(bigChar);

/*
    Question 10:  Using the above countries array, find the country containing only 5 characters.
*/

// Answer
const fiveCharCountries = [];
for(let i =  0; i < countries.length; i++){
  if(countries[i].length == 5){
    fiveCharCountries.push(countries[i]);
  }
}
console.log(fiveCharCountries);

/*
    Question 11:  Find the longest word in the webTechs array
*/

// Answer
let longestTech = [];
for (let i = 0; i < webTechs.length; i++) {
   if(webTechs[i].length > longestTech.length) {
    longestTech = webTechs[i];
   }
}
console.log(longestTech);

/*
    Question 12:  Use the webTechs array to create the following array of arrays:

*/

// Answer
let _webTechs = [];
for (let i = 0; i < webTechs.length; i++) {
    _webTechs.push(Array.of(webTechs[i], webTechs[i].length));
}
console.log(_webTechs);

/*
    Question 13:  An application created using MongoDB, Express, React and Node is called a MERN stack app.
     Create the acronym MERN by using the array mernStack
*/

// Answer

let acrony = '';
for(let i =  0; i < mernStack.length; i++){
acrony += mernStack[i].slice(0,1);

}
console.log(acrony);


/*
    Question 14:  Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
     using a for loop or for of loop and print out the items.
*/

// Answer
for (const tech of webTechs) {
  console.log(tech)
}

/*
    Question 15:  This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using 
    loop without using a reverse method.
*/

// Answer
const fruit = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruit = [];
for (let i = fruit.length -1; i >= 0; i--) {
  const reverse = fruit[i];
  reversedFruit.push(reverse);
}
console.log(reversedFruit);

/*
    Question 16:  Print all the elements of array as shown below.
*/

// Answer
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for(let i = 0; i < fullStack.length; i++){
  for( let j = 0; j < fullStack[i].length; j++){
    console.log(fullStack[i][j]);
  }
}