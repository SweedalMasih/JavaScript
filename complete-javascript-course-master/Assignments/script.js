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

console.log(newDescription);