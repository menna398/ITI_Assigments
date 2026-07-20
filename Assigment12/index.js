//Variables
let studentName = "Menna";
let age = 19;
let isStudent = true;
console.log(studentName);
console.log(age);
console.log(`Is Menna Student ? ${isStudent}`);

console.log("====================");

//If
let degree = 95;

if (degree >= 90) {
  console.log("Excellent");
} else if (degree >= 75) {
  console.log("Very Good");
} else if (degree >= 60) {
  console.log("Good");
} else {
  console.log("Fail");
}

console.log("====================");

// Switch
let day = 3;
switch (day) {
  case 1:
    console.log("Saturday");
    break;

  case 2:
    console.log("Sunday");
    break;

  case 3:
    console.log("Monday");
    break;

  default:
    console.log("Invalid Day");
}

console.log("====================");

//Loops
let i = 0;
for (; i <= 5; i++) {
  console.log(i);
}
while (i <= 10) {
  console.log(i);
  i++;
}
do {
  console.log(i);
  i++;
} while (i <= 15);

console.log("====================");

//Functions
function HelloMenna(name) {
  console.log("Hello " + name);
}
HelloMenna("Menna");

const multiply = (a, b) => a * b; //arrow func
console.log(multiply(4, 6));

(function () {
  console.log("It's Mnonaa");
})();

console.log("====================");

//Object
let student = {
  name: "Menna",
  age: 20,
  faculty: "Computer Science",
  graduated: false,
};

console.log(student);
console.log(student.name);
console.log(student.faculty);

console.log("========== Thanks For Watching ==========");
