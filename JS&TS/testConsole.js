let form = "chien";
console.assert(1 > 2, "luise 123 a un " + form);
console.count(form);
console.time("first");
var people = [
  ["John", "Smith"],
  ["Jane", "Doe"],
  ["Emily", "Jones"],
];
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");
var me = new Person("John", "Smith");

// console.table([john, jane, emily], ["firstName"]);
console.table(people, [0]);

console.timeEnd("first");

console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");

for (var i = 0; i < 5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i + 1);
}
console.log(
  "This is %cMy stylish message",
  "color: yellow; font-style: italic; background-color: blue;padding: 2px"
);
