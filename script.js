
// String methods
let string = "my name is khan";
document.getElementById("string").innerHTML = "Original string is:" + string +
    "<br>Uppercase: " + string.toUpperCase() +
    "<br>Slicing: " + string.slice(7,13) +
    "<br>Length of string:" + string.length +
    "<br>Replace: " + string.replace("my", "who's") +
    "br>Substr:" + string.substr(3,12)
    ;
// Number methods
let number1 = 676895.87866;
let number = 658657;
let z = number1/number;
let y = number*number1;
let x = number - number1;
document.getElementById("number").innerHTML = "Original: " + number+
    "<br>Addition: " + number1 + number +
    "<br>Exponential: " + number.toExponential(3) +
    "<br>Division : " + z  +
    "<br> Simple Multiplication:" + y +
    "<br> Subtraction:" + x;
   

// Array methods
let array = ["Australia", "Canada", "USA"];
let array1= ["hello","hallo","bonjour"];
document.getElementById("array").innerHTML = "Original: " + array +
    "<br>Length " + array.length +
    "<br>Pop: " + array.pop() +
    "<br>Push: " + array.push("South Africa") +
    "<br>Add new array elements " + array.concat(array1) ;

// Date methods
let d= new Date();
document.getElementById("date").innerHTML = "Original: " + d +
    "<br>Year: " + d.getFullYear()  +
    "<br>Day: " + d.getDay() +
    "<br>Seconds: " + d.getSeconds() +
    "<br>Months:" + d.getMonth(); 


// Function methods
let text = " Total Seconds is " + seconds(1) + " Seconds.";
document.getElementById("function").innerHTML = text;

function seconds(Minutes) {
  return 60 * Minutes;
}
let div = "The result of division is:" + myFunction(9, 3);
document.getElementById("function2").innerHTML = div;

function myFunction(a, b) {
  return a / b;
}