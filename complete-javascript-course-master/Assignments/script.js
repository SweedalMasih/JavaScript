const country = "India";
const continent = "Asia";
let population = 1406;

const isIsland = false;
const language = "Hindi";

const halfPopulation = population / 2;
population++;
console.log(population > 6);
console.log(population < 33);

const description =
  country +
  " is in " +
  continent +
  ", and it's " +
  population +
  " million people speak " +
  language;

const newDescription = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average'`
  );
}

// Type Conversion and Coercion
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1149 - 4 - 2 = 1143

// Equality Operators: == vs. ===
const numNeighbours = parseInt(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

// Logical Operators
if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// The switch Statement
switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log(`MOST number of native speakers!`);
    break;
  case "Spanish":
    console.log(`2nd place in number of native speakers`);
    break;
  case "English":
    console.log(`3rd place`);
    break;
  case "Hindi":
    console.log(`Number 4`);
    break;
  case "Arabic":
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too :D`);
}

// The Conditional (Ternary) Operator
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);

// Section 1: Coding Challenges

// Coding Challenge #1
// Test Data 1
const heightOfMark = 1.69;
const weightOfMark = 78;
const heightOfJohn = 1.95;
const weightOfJohn = 92;

// Test Data 2
// const heightOfMark = 1.88;
// const weightOfMark = 95;
// const heightOfJohn = 1.76;
// const weightOfJohn = 85;

const markBMI = weightOfMark / heightOfMark ** 2;
const johnBMI = weightOfJohn / heightOfJohn ** 2;

const markHigherBMI = markBMI > johnBMI;

// Coding Challenge #2

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

// Coding Challenge #3

// Test Data 1
const avgDolpins = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;

// Test Data 2
// const avgDolpins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 123) / 3;

// Test Data 3
// const avgDolpins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 106) / 3;

console.log(avgDolpins, avgKoalas);

if (avgDolpins > avgKoalas && avgDolpins >= 100) {
  console.log("Dolphins win the trophy!");
} else if (avgDolpins < avgKoalas && avgKoalas >= 100) {
  console.log("Koalas win the trophy!");
} else if (avgDolpins === avgKoalas && avgDolpins >= 100 && avgKoalas >= 100) {
  console.log("It's a draw!");
} else {
  console.log("No team wins the trophy");
}

// Coding Challenge #4

// Test data 1
const bill = 275;

// Test data 2
// const bill = 40;

// Test data 3
// const bill = 430;

const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

// Functions

const describeCountry = (country, population, capitalCity) => {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};

const descIndia = describeCountry("India", 1406, "Delhi");
const descJapan = describeCountry("Japan", 127, "Tokyo");
const descFinland = describeCountry("Finland", 6, "Helsinki");

console.log(descIndia, descFinland, descJapan);

// Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percIndia = percentageOfWorld1(1406);
const percChina = percentageOfWorld1(1441);
const percUSA = percentageOfWorld1(332);
console.log(percIndia, percChina, percUSA);

const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};

const percIndia3 = percentageOfWorld3(1406);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);
console.log(percIndia3, percChina3, percUSA3);

// Functions Calling Other Functions

const describePopulation = (country, population) => {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world`;
};

console.log(describePopulation("India", 1406));

// Introduction to Arrays

const populations = [1406, 1441, 332, 127];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// Basic Array Operations (Methods)

const neighbours = ["Nepal", "Bhutan", "Srilanka"];
neighbours.push("Utopia");
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log(`Probably not a central European country :D'`);
}

neighbours[neighbours.indexOf("Srilanka")] = "China";
console.log(neighbours);

// Introduction to Objects

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1406,
  neighbours: ["Nepal", "Bhutan", "Srilanka"],
};

// Dot vs. Bracket Notation

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);
