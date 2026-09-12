// Import JSON file
const student = require("./student.json");

// JavaScript object → JSON string
const jsonData = JSON.stringify(student);

console.log("JSON String:");
console.log(jsonData);

// JSON string → JavaScript object
const objectData = JSON.parse(jsonData);

console.log("JavaScript Object:");
console.log(objectData);

// Access student's name
console.log("Student Name:", objectData.name);
