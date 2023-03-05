// Question 1: Declare a function fullName and it print out your full name.

// Answer:
function fullName(){
    console.log('Khalid Sulyman');
}

fullName();

/*
    Question 2: Declare a function fullName and now it takes firstName, lastName as a parameter and
     it returns your full name
*/

// Answer:

function fullName(firstName, lastName){
    const fullName = firstName + ' ' + lastName;     
    console.log(fullName);
}

    fullName('Khalid', 'Sulyman');

/*
    Question 3: Declare a function addNumbers and it takes two two parameters and it returns sum.
*/

// Answer:

function addNumber (number1, number2){
    const sum = number1 + number2;     
    console.log(sum);
    return sum;
}
addNumber(10, 10);

/*
    Question 4: An area of a rectangle is calculated as follows: area = length x width 
    Write a function which calculates areaOfRectangle
*/

// Answer:

function areaOfRectangle (length, width){
    const area =  length * width;  
    console.log(area);
    return area;
}
 areaOfRectangle(10, 10);

 /*
    Question 5: A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
     Write a function which calculates perimeterOfRectangle.
*/

// Answer:

function perimeter (length, width){
    const perimeter = 2 * (length + width);  
    console.log(perimeter);
    return perimeter;
}

perimeter(10, 10);

/*
    Question 6: A volume of a rectangular prism is calculated as follows: volume = length x width x height. 
    Write a function which calculates volumeOfRectPrism
*/

// Answer:

let volume = (length, width, height) => {
    volume = length * width * height;       
    console.log(volume);
    return volume;
}

volume(5, 10, 10);

/*
    Question 7: Area of a circle is calculated as follows: area = π x r x r Write a function which calculates
     areaOfCircle
*/

// Answer:

let areaOfCircle = (radius) => {
    const π = 3.14;
    areaOfCircle = π * radius * radius;
    console.log(areaOfCircle);
    return areaOfCircle;
}

areaOfCircle(10);


/*
    Question 8: Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which 
    calculates circumOfCircle
*/

// Answer:

 let circumOfCircle = (radius) => {
    const π = 3.14;
    circumOfCircle = 2 * π * radius; 
    console.log(circumOfCircle);
    return circumOfCircle;
 }
 circumOfCircle(10);

 /*
    Question 9: Density of a substance is calculated as follows: density= mass/volume. Write a function which 
    calculates density.

*/

// Answer:

let density = (mass, volum) => {
    density = mass / volum;   
    console.log(density);
    return density;
}

density(8, 4);

 /*
    Question 10: Speed is calculated by dividing the total distance covered by a moving object divided by the total
     amount of time taken. Write a function which calculates a speed of a moving object, speed.

*/

// Answer:

let speed = (distance, time) => {
    speed = distance / time;        
    console.log(speed);
    return speed;
}

speed(400, 20);


/*
    Question 11: Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which
     calculates weight.

*/

// Answer:

let weight = (mass) => {
    const gravity = 9.81;
    weight = mass * gravity;       
    console.log(weight);
    return weight;
}
weight(800);

/*
    Question 12: Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a 
    function which convert oC to oF convertCelsiusToFahrenheit.

*/

// Answer:

const convertCelsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9 / 5) + 32;     
    console.log(fahrenheit);
    return fahrenheit;
}
convertCelsiusToFahrenheit(36);


/*
    Question 13: Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
    Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 
    20 years old or older.Check if a person is underweight, normal, overweight or obese based the information
    given below.

*/

// Answer:

const bodyMassIndex = (weightKG, height) => {
    const bmi = weightKG / (height * height);
    if(bmi < 18.5){
        console.log('Underweight: Your BMI (' + bmi + ') is less than 18.5');
    }else if(bmi >= 18.5 && bmi <= 24.9){
        console.log('Normal weight: Your BMI (' + bmi + ') is between 18.5 and 24.9');
    }else if( bmi >= 25 && bmi <= 29.9){
        console.log('Overweight: Your BMI (' + bmi + ') is between 25 and 29.9');
    } else{
        console.log('Obese: Your BMI (' + bmi + ') is 30 or above');
    }
    return bmi;
}

bodyMassIndex(65, 1.75);


/*
    Question 14: Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, 
    Winter, Spring or Summer.

*/

// Answer:

const checkSeason = (month) => {
    if(month === 'December' || month === 'January' || month === 'February'){
        console.log('The season is Winter');
    } else if(month === 'March' || month === 'April' || month === 'May'){
        console.log('The season is Spring');
    } else if(month === 'June' || month === 'July' || month === 'August'){
        console.log('The season is Summer');
    } else if(month === 'September' || month === 'October' || month === 'November'){
        console.log('The season is Autumn');
    } else{
        console.log('Month is invalid');
    }
    return month;
}

checkSeason('May');