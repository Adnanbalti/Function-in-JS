/*                    Question-01. 
Write a function that displays current date & time in your 
browser.*/

function date_and_Time(){
    var today = new Date();
    var date_and_Time = today.toLocaleString();
    document.write(`The current date and time is ${date_and_Time}` + "<br>");
}
date_and_Time();



/*                  Question-02. 
Write a function that takes first & last name and then it 
greets the user using his full name.*/

function my_Intro() {
    var first_name = prompt("Enter your first name");
    var last_name = prompt("Enter your last name");

    document.write(`Hello ${first_name}  ${last_name}` + "<br>" + "<br>");
}
my_Intro();
my_Intro();


/*                  Question-03. 
Write a function that adds two numbers(input by user) 
and returns the sum of two numbers.*/

function addition() {
    var num1 = prompt("Enter first number");
    var num2 = prompt("Enter second number");

    document.write(`The sum of given number is: ${+num1 + +num2}` + "<br>");
}
addition();
addition();


/*                  Question-04. 
Calculator:
Write a function that takes three arguments num1, num2 
& operator & compute the desired operation. Return and 
show the desired result in your browser.*/








/*                  Question-05. 
Write a function that squares its argument.*/

function square(num){
    document.write(`Square of given number is: ${num*num}`);
}
square(4);


/*                  Question-06. 
Write a function that computes factorial of a number.*/

function factorialize(num) {
  if (num === 0 || num === 1)
    document.write("1");
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  document.write(`The factorial of given number is: ${num}` + "<br>");
}
factorialize(7);


/*                  Question-07. 
Write a function that take start and end number as inputs 
& display counting in your browser.*/

function counter(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}

counter(7, 49);


/*8. Write a nested function that computes hypotenuse of a 
right angle triangle. 
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()*/

function hypotenus(base, perp) {
    function square(number) {
        return number ** 2
    }
    var hypo = Math.sqrt(square(base) + square(perp));
    return hypo;
}

var a = +prompt("Enter base number");
var b = +prompt("Enter perpendicular number");
var c = hypotenus(a, b);
document.write(c)


/*                  Question-09. 
Write a function that calculates the area of a rectangle.
 A = width * height
 Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables*/

function area_of_rectangle(width, height) {
    var area_of_rec = width * +height;
    document.write(`The area of rectangle is: ${area_of_rec}` + "<br>");
}
area_of_rectangle(5, "10");



/*                  Question-10. 
Write a JavaScript function that checks whether a passed 
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as 
forward, e.g., madam.*/

function palindrome(str) {
    var splitString = str.split("");
    var reverseString = splitString.reverse();
    var joinString = reverseString.join("");

    document.write(joinString + "<br>");

    if (str == joinString) {
        document.write("The given word is palindrome");
    }
    else {
        document.write("The given word is not palindrome");
    }
}
palindrome("civic");


/*                  Question-11. 
Write a JavaScript function that accepts a string as a 
parameter and converts the first letter of each word of the 
string in upper case. 
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox'*/

function capitalizeWords(stri) {
  return stri
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

document.write(capitalizeWords('the quick brown fox'));


/*                  Question-12. 
Write a JavaScript function that accepts a string as a 
parameter and find the longest word within the string. 
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development'*/

function findLongestWord(str) {
  var strSplit = str.split(' ');

  var longestWord = strSplit.sort(function(a, b) { 
    return b.length - a.length;
  });
  
  document.write(longestWord[0].length);
}

findLongestWord("Web Development Tutorial");


/*                  Question-13. 
The Geometrizer
Create 2 functions that calculate properties of a circle, using 
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output 
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area 
is NN".
Circumference of circle = 2πr
Area of circle = πr2
*/

function calcCircumference(r) {
    var π = 3.14159;
    var circumference = 2 * π * r;
    document.write(`The circumference of circle is: ${circumference}` + "<br>");
}
calcCircumference(6);


function calcArea(r) {
    var π = 3.14159;
    var area = π * (r ** 2);
    document.write(`The area of circle is: ${area}`);
}

calcArea(3)