// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest


// REMEMBER TO PSEUDO CODE GALADOE!!!!


// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

//Create a test with expect statements for each of the variables provided.
//create a describe method that explains the test
//create and it method explain what the test do
//next, create a function (divisbleByThree) with/without an argument and compare
describe("divisbleByThree", () => {
  it("evenly divisble by three", () => {
    expect(divisbleByThree(15)).toEqual("15 is divisible by three")
    expect(divisbleByThree(0)).toEqual("0 is divisible by three")
  })
  it("not evenly divisble by three", () => {
    expect(divisbleByThree(-7)).toEqual("-7 is not divisible by three")
  })
})

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

//Create a function that takes in a num
//the num is checked if it is divisible by divisible by three
// if it is divisible by three, return "num is divisible by three"
// if not, return "num is not divisible by three"
 const divisbleByThree = (num) =>{
   if(num % 3 === 0){
     return `${num} is divisible by three`
   }else{
     return `${num} is not divisible by three`
   }
 }


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

//Create a test with expect statements for each of the variables provided.
//create a describe method that explains the test
//create and it method explain what the test do
//next, create a function (wordCapital) with/without an argument and compare
describe("capitalized", () => {
  it("words capitalized", () => {
    expect(wordCapital(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(wordCapital(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})



var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// b) Create the function that makes the test pass.

//create function that takes in array
//iterate through the array and only capitalized the first letter
//after the first letter is capitalized, make sure the other words follow as well (make sure to return it so it doesn't return udefined)
const wordCapital = (array) => {
  return array.map(value => {
    return value[0].toUpperCase() + value.slice(1)
  })
}
console.log(wordCapital(randomNouns1));
console.log(wordCapital(randomNouns2));



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

//Create a test with expect statements for each of the variables provided.
//create a describe method that explains the test
//create and it method explain what the test do
//next, create a function with/without an argument and compare
describe("firstVowel", () => {
  it("takes string and returns first vowel", () =>{
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
  })
})
var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

//create function that takes in string
// string is going to be iterated (using a for loop might help) through until the first vowel is found
//when the first vowel is found, return the position
// b) Create the function that makes the test pass.
const firstVowel = (string) => {
  let array = string.split("")
  for(let i=0; i < array.length; i++){
    if(array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "o" || array[i] === "u"){
      return array.indexOf(array[i])
    }
  }
}
console.log(firstVowel(vowelTester1));
console.log(firstVowel(vowelTester2));
console.log(firstVowel(vowelTester3));
