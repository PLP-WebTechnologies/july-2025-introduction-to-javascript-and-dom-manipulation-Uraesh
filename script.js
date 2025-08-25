// Part 1: Variables, Conditionals
let age = 20;
let message = "";

if (age >= 18) {
  message = "You are an adult";
} else {
  message = "You are a minor";
}
document.getElementById("part1-output").textContent = message;


// Part 2: Functions
function greetUser(name) {
  document.getElementById("greet-output").textContent = "Hello, " + name;
}

function calculateTotal(a, b) {
  let total = a + b;
  document.getElementById("total-output").textContent = "Total = " + total;
  return total;
}


// Part 3: Loops
function showCountdown() {
  let countdownText = "";
  for (let i = 5; i >= 1; i--) {
    countdownText += i + " ";
  }
  document.getElementById("countdown-output").textContent = countdownText;
}

function listFruits() {
  let fruits = ["Apple", "Banana", "Orange"];
  let fruitList = document.getElementById("fruit-list");
  fruitList.innerHTML = ""; // reset before adding
  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
  });
}


// Part 4: DOM Manipulation

// Toggle text visibility
document.getElementById("toggle-btn").addEventListener("click", () => {
  let text = document.getElementById("toggle-text");
  text.style.display = (text.style.display === "none") ? "block" : "none";
});

// Add new list item dynamically
function addItem() {
  let input = document.getElementById("new-item");
  let value = input.value.trim();

  if (value !== "") {
    let li = document.createElement("li");
    li.textContent = value;
    document.getElementById("dynamic-list").appendChild(li);
    input.value = "";
  }
}

// Change background color randomly
function changeColor() {
  let colors = ["lightblue", "lightgreen", "lightpink", "lightyellow"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
