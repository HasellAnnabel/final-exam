console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/* My name is Hasell Jaramillo-
 My student number is 200511451
 */


// Step 2: Create a block scoped, immutable variable that stores an empty array
let users = [];

// Step 3: Add the 3 people's names to the array
users[1] = "Jason";
users[2] = "Kim";
users[3] = "Anna";

// Step 4: Remove the second array item from the array
delete users[2];

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable
usersUpper = users.map(function(name){
  return name.toUpperCase();
});

// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";
let h2 = document.getElementById("main-header").querySelector("h2");
let h1 = document.getElementById("main-header").querySelector("h1");

h2.addEventListener("click",function() {
  alert("Hello from Boo the World's Cutest Dog!");
});

h1.addEventListener("click",function() {
  alert("Sorry for late submission :(");
});