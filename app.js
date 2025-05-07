// ASSIGNMENT 1
function calculateArithmeticOperations(number1, number2) {
    console.log(
      `The addition of ${number1} and ${number2} is ${
        number1 + number2
      }, the multiplication of ${number1} and ${number2} is ${
        number1 * number2
      }, the division of ${number1} and ${number2} is ${
        number1 / number2
      } and the subtraction of ${number1} and ${number2} is ${number1 - number2}`
    );
  }
  
  // ASSIGNMENT 2
  function calculateAverageAge() {
    let ages = [];
    let numberOfStudents = 10;
  
    for (let i = 0; i < numberOfStudents; i++) {
      let ageInput = parseInt(prompt(`Enter the age of student ${i + 1}:`));
      ages.push(ageInput);
    }
    let sum = 0;
    for (let i = 0; i < ages.length; i++) {
      sum = sum + ages[i];
    }
    let averageAge = sum / ages.length;
    console.log(`The average age of a class is ${averageAge}.`);
  }
  
  // ASSIGNMENT 3
  function displayDigitsSeparately() {
    let numberInput = prompt("Please enter a four-digit integer:");
  
    if (numberInput.length !== 4) {
      console.log("Invalid input. Please enter a valid four-digit integer.");
    } else {
      let digits = numberInput.split("").reverse().join(", ");
      console.log("Reversed digits: " + digits);
    }
  }
  
  // ASSIGNMENT 4
  function calculateCircle() {
    let radius = parseInt(prompt("Please enter the radius of the circle:"));
    let diameter = 2 * radius;
    Math.round(diameter);
    let circumference = 2 * Math.PI * radius;
    Math.round(circumference);
    let area = Math.PI * radius * radius;
  
    console.log(`Diameter: ${diameter}`);
    console.log(`Circumference: ${circumference}`);
    console.log(`Area: ${area}`);
  }
  
  // ASSIGNMENT 5
  function displayCartItemAndPrice() {
    console.log("Welcome to our Cosmetics Shop!");
    let nameItem = prompt("Please enter the name of the item you want to buy:");
    nameItem = nameItem.toLowerCase();
    let priceItem = prompt("Please enter the price of the item you want to buy:");
    let quantityItem = prompt(
      "Please enter the quantity of the item you want to buy:"
    );
  
    console.log(`Your sub total for ${nameItem} is $${quantityItem * priceItem}.`);
  }
  
  // ASSIGNMENT 6
  function calculateBMI() {
    let weightKg = parseFloat(prompt("Please enter your weight in kilograms:"));
    let heightM = parseFloat(prompt("Please enter your height in meters:"));
    let totalBmi = weightKg / (heightM * heightM);
    console.log(`Your BMI is: ${totalBmi}.`);
  }
  
  // ASSIGNMENT 7
  function checkTweetLength() {
    let tweet = prompt("Enter your tweet (kindly keep it under 140 chars):");
    let maxLength = 140;
    if (tweet.length <= maxLength) {
      console.log(`That ${tweet.length} character tweet will work!`);
    } else {
      let difference = tweet.length - maxLength;
      console.log(
        `Your ${tweet.length} character tweet is ${difference} characters too long.`
      );
    }
  }
  
  // ASSIGNMENT 8
  function calculateWeeksLeft() {
    let currentAge = parseInt(prompt("Enter your current age:"));
    let yearsLeft = 90 - currentAge;
    weeksInOneYear = 52;
    let weeksLeft = yearsLeft * weeksInOneYear;
  
    console.log(`You have ${weeksLeft} weeks left.`);
  }
  
  // ASSIGNMENT 9
  function calculatePizzaBill() {
    let pizzaSize = prompt(
      "Welcome to Python Pizza Deliveries! What size pizza do you want? (S, M, or L)"
    ).toUpperCase();
    let addPepperoni = prompt("Do you want pepperoni? (Y or N)").toUpperCase();
    let addCheese = prompt("Do you want extra cheese? (Y or N)").toUpperCase();
    let bill = 0;
    if (pizzaSize === "S") {
      bill = bill + 15;
    } else if (pizzaSize === "M") {
      bill = bill + 20;
    } else {
      bill = bill + 25;
    }
  
    if (pizzaSize === "S" && addPepperoni === "Y") {
      bill = bill + 2;
    } else if ((pizzaSize === "M" || pizzaSize === "L") && addPepperoni === "Y") {
      bill = bill + 3;
    }
  
    if (addCheese === "Y") {
      bill = bill + 1;
    }
  
    console.log("Thank you for choosing Python Pizza Deliveries!");
    console.log(`Your final bill is: $${bill}.`);
  }
  
  // ASSIGNMENT 10
  function calculateBMIWithCategory() {
    let height = parseFloat(prompt("Please enter your height in inches:"));
    let weight = parseFloat(prompt("Please enter your weight in lbs:"));
    let bmi = (weight * 703) / (height * height);
  
    let category = "";
    if (bmi < 16) {
      category = "Severly Underweight";
    } else if (bmi >= 16 && bmi < 18.4) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal";
    } else if (bmi >= 25.0 && bmi < 29.9) {
      category = "Overweight";
    } else if (bmi >= 30.0 && bmi < 34.9) {
      category = "Moderately Obese";
    } else if (bmi >= 35.0 && bmi < 39.9) {
      category = "Severely Obese";
    } else {
      category = "Morbidly Obese";
    }
    console.log(`Your BMI of ${bmi} makes you ${category}`);
  }
  
  // ASSIGNMENT 11
  function keylessCar() {
    let age = parseInt(prompt("Please enter your age:"));
  
    if (age < 18) {
      alert("Sorry, you are too young to drive this car. Powering off");
    } else if (age === 18) {
      alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
      alert("Powering On. Enjoy the ride!");
    }
  }
  
  // ASSIGNMENT 12
  function colorMessage(favoriteColor, shirtColor) {
    if (favoriteColor === shirtColor) {
      return "The shirt is your favorite color!";
    } else {
      return "That is a nice color.";
    }
  }
  
  function colorMessagePrompt() {
    let favorite = prompt("Enter your favorite color:");
    let shirt = prompt("Enter the color of your shirt:");
    console.log(colorMessage(favorite, shirt));
  }
  
  // ASSIGNMENT 13
  function isEven(number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  function isEvenCheck() {
    let num = parseInt(prompt("Please enter a number:"));
    console.log(`${num} is even: ${isEven(num)}`);
  }
  
  // ASSIGNMENT 14
  function lifePhase(age) {
    if (age < 0 || age > 140) {
      return "This is not a valid age";
    } else if (age <= 3) {
      return "baby";
    } else if (age <= 12) {
      return "child";
    } else if (age <= 19) {
      return "teen";
    } else if (age <= 64) {
      return "adult";
    } else {
      return "senior citizen";
    }
  }
  
  function lifePhaseCheck() {
    let personAge = parseInt(prompt("Enter the person's age:"));
    let phase = lifePhase(personAge);
    console.log(`The person is ${phase}.`);
  }
  
  // ASSIGNMENT 15
  function finalGrade(grade1, grade2, grade3) {
    if (
      grade1 < 0 ||
      grade1 > 100 ||
      grade2 < 0 ||
      grade2 > 100 ||
      grade3 < 0 ||
      grade3 > 100
    ) {
      return "You have entered an invalid grade.";
    }
  
    let average = (grade1 + grade2 + grade3) / 3;
  
    if (average >= 0 && average <= 59) {
      return "F";
    } else if (average >= 60 && average <= 69) {
      return "D";
    } else if (average >= 70 && average <= 79) {
      return "C";
    } else if (average >= 80 && average <= 89) {
      return "B";
    } else {
      return "A";
    }
  }
  
  function finalGradeCalc() {
    let grade1 = parseInt(prompt("Enter the grade 1:"));
    let grade2 = parseInt(prompt("Enter the grade 2:"));
    let grade3 = parseInt(prompt("Enter the grade 3:"));
    console.log(`The final grade is: ${finalGrade(grade1, grade2, grade3)}`);
  }
  
  // ASSIGNMENT 16
  function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }
  
  function reverseArrayDisplay() {
    let sentence = ["sense.", "make", "all", "will", "This"];
    console.log(reverseArray(sentence));
  }
  
  // ASSIGNMENT 17
  function QuarterMonths(quarter) {
    switch (quarter) {
      case 1:
        console.log("Months in Quarter 1: January, February, March");
        break;
      case 2:
        console.log("Months in Quarter 2: April, May, June");
        break;
      case 3:
        console.log("Months in Quarter 3: July, August, September");
        break;
      case 4:
        console.log("Months in Quarter 4: October, November, December");
        break;
      default:
        console.log("Invalid quarter. Please enter a number between 1 and 4.");
    }
  }
  
  function printQuarterMonthsDisplay() {
      let quarter = parseInt(prompt("Enter the quarter (1-4):"));
      QuarterMonths(quarter);
  }
  
  
  function runSelectedFunction() {
    let choice = parseInt(
      prompt(`Enter the number of the function you want to run (1-17):
        1: Calculate Arithmetic Operations
        2: Calculate Average Age
        3: Display Digits Separately in Reverse
        4: Calculate Circle Area & Circumference
        5: Display Cart Item & Price
        6: Calculate BMI (kg/m)
        7: Check Tweet Length
        8: Calculate Weeks Left
        9: Calculate Pizza Bill
        10: Calculate BMI with Category
        11: Keyless Car
        12: Favourite Shirt Color
        13: Is Even Check
        14: Life Phase Check
        15: Final Grade Calc
        16: Reverse Array Display
        17: Print Quarter Months Display`)
    );
  
    switch (choice) {
      case 1:
        let number1 = parseInt(prompt("Enter the first number:"));
        let number2 = parseInt(prompt("Enter the second number:"));
        calculateArithmeticOperations(number1, number2);
        break;
      case 2:
        calculateAverageAge();
        break;
      case 3:
        displayDigitsSeparately();
        break;
      case 4:
        calculateCircle();
        break;
      case 5:
        displayCartItemAndPrice();
        break;
      case 6:
        calculateBMI();
        break;
      case 7:
        checkTweetLength();
        break;
      case 8:
        calculateWeeksLeft();
        break;
      case 9:
        calculatePizzaBill();
        break;
      case 10:
        calculateBMIWithCategory();
        break;
      case 11:
        keylessCar();
        break;
      case 12:
        colorMessagePrompt();
        break;
      case 13:
        isEvenCheck();
        break;
      case 14:
        lifePhaseCheck();
        break;
      case 15:
        finalGradeCalc();
        break;
      case 16:
        reverseArrayDisplay();
        break;
      case 17:
        printQuarterMonthsDisplay();
        break;
      default:
        alert("Invalid choice. Please enter a number between 1 and 17.");
    }
  }
  
  runSelectedFunction();
  