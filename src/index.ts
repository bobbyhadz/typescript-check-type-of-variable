export {};

// EXAMPLE 1 - Check the Type of a Variable in TypeScript

const myVar: string | number = 'bobbyhadz.com';

console.log(typeof myVar); // 👉️ "string"

if (typeof myVar === 'string') {
  console.log(myVar.toUpperCase()); // 👉️ "BOBBYHADZ.COM"
}

// ---------------------------------------------------

// // EXAMPLE 2 - Check the Type of a Variable using `instanceof`

// class Person {}

// const person = new Person();

// if (person instanceof Person) {
//   // 👇️ this runs
//   console.log('value is an instance of Person');
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Using a type predicate to check the type of a variable

// const person = {
//   name: 'Bobby Hadz',
//   country: 'Chile',
// };

// type Person = {
//   name: string;
//   country: string;
// };

// // 👇️ checks if obj has properties of Person
// function isPerson(obj: Person): obj is Person {
//   return 'name' in obj && 'country' in obj;
// }

// let bobby;

// if (isPerson(person)) {
//   // 👉️ person has type of Person here
//   bobby = person;
// } else {
//   bobby = { name: '', country: '' };
// }

// console.log(bobby); // 👉️ {name: 'Bobby Hadz', country: 'Chile'}

// ---------------------------------------------------

// // EXAMPLE 4 - Checking if a variable stores an array

// const arr: string[] = ['bobby', 'hadz', 'com'];

// console.log(Array.isArray(arr)); // 👉️ true

// ---------------------------------------------------

// // EXAMPLE 5 - Checking if a variable stores a NaN value

// const example = Number('bobbyhadz.com');
// console.log(example); // 👉️ NaN

// if (Number.isNaN(example)) {
//   console.log('Passed in value is NaN');
// }
