// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.split(""))

// a) Your answer: "C", "h", "a", "r", "l", "i", "e", " ", "2", "0", "2", "1"
// b) Verify and explain: ['C', 'h', 'a', 'r',
//                        'l', 'i', 'e', ' ',
//                        '2', '0', '2', '1']


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student
// b) Verify and explain: undefined; That was a silly answer I wrote! I totally didn't pay attention to the fact that there was no return statement!


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: [8, 10, 12, 14, 16]. Instead of writing a for loop to iterate through the array, map helped us to iterate through it and multiple each index by 2


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: [12, 14]
// b) Verify and explain: [12, 14]; It was written correctly, but what we are returning is not odd numbers but even numbers


// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
console.log(learnStudent)

// a) Your answer: George Charlie 2021
// b) Verify and explain: {student: 'George', cohort: 'Charlie', year: 2021}
