const country = "India";
const continent = "Asia";
let population = 1406;

const isIsland = false;
const language = "Hindi";

const halfPopulation = population / 2;
population++;
console.log(population > 6);
console.log(population < 33);

const description = country + " is in " + continent + ", and it's " + population + " million people speak " + language;

const newDescription = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${33 - population} million below average'`);
}

// Type Conversion and Coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1149 - 4 - 2 = 1143

// Equality Operators: == vs. ===
const numNeighbours = parseInt(prompt("How many neighbour countries does your country have?"));
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
    console.log(`Great language too :D`)
}