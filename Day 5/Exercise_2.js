/*
    Question 1: Create a separate countries.js file and store the countries array in to this file, create a separate 
    file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
*/

// Answer:

// See the main.js file

/*
    Question 2: First remove all the punctuations and change the string to array and count the number of words in
     the array
  
*/

// Answer:

let sentence = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let split = sentence.split(' ');
console.log(split);

/*
    Question 3: In the following shopping cart add, remove, edit items
    ```js
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    ```
   - add 'Meat' in the beginning of your shopping cart if it has not been already added
   - add Sugar at the end of you shopping cart if it has not been already added
   - remove 'Honey' if you are allergic to honey
   - modify Tea to 'Green Tea'
*/

// Answer:

//#
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat')
console.log(shoppingCart);
//#
shoppingCart.push('Sugar');
console.log(shoppingCart);
//#
shoppingCart.splice(4,1);
console.log(shoppingCart);
//#
shoppingCart.splice(3, 1, 'Green Tea');
console.log(shoppingCart);


/*
    Question 4: In countries array check if 'Ethiopia' exists in the array if it exists print 
    'ETHIOPIA'. If it does not exist add to the countries list.
*/

// Answer 
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

countries.includes('Ethiopia')? console.log('ETHIOPIA'): console.log(countries.unshift('Ethiopia') + ' Ethiopia has been added');
console.log(countries);

/*
    Question 5: In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS
     preprocess'. If it does not exist add Sass to the array and print the array.
*/

// Answer 
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];


  webTechs.includes('Sass')? console.log('Sass is a CSS preprocess'): console.log(webTechs.unshift('Sass') + ' Sass has been added');
console.log(webTechs);

/*
    Question 6: Concatenate the following two variables and store it in a fullStack variable.
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
  
    console.log(fullStack)

    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

*/

// Answer

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);