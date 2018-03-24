// EX 1 concatenate strings
let childnum = 2;
let wifename = "miss something";
let country = "North Korea";
let job = "dev";
console.log(
  "You will be " +
    job +
    " live in " +
    country +
    " married to " +
    wifename +
    " with " +
    childnum +
    " children."
);
// Ex 2 calculate age
let currentyear = 2018;
let birthage = 1995;
console.log(currentyear - birthage);

// Ex 3 getting old
let age = 22;
let maxage = 88;
let food = "apples";
let dailyfood = 3;

let lifeapples = (maxage - age) * 365 * dailyfood;

console.log(
  "il vous reste " +
    lifeapples +
    " de " +
    food +
    " avant d'atteindre l'age de " +
    maxage
);

//Ex 4 Priorities
let result = (1 + 2) * 3 + 4 / 2;
console.log(result);
// Step 1: 3*3+4/2
// Step 2: 9 + 2
// Step 3: 11
