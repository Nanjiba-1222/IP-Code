
// if...else

let marks = 68;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("A");
} else if (marks >= 60) {
  console.log("B");
} else {
  console.log("Fail");
}

// switch

let day = 2;

switch (day) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid day");
}

// for loop

for (let count = 1; count <= 5; count++) {
  console.log(count);
}

// while loop

let number = 1;

while (number <= 5) {
  console.log(number);
  number++;
}

// do...while loop

let value = 1;

do {
  console.log(value);
  value++;
} while (value <= 5);

// for...of loop

const students = ["Marufa", "Nanjiba", "Tashfiah"];

for (const student of students) {
  console.log(student);
}
