// Sumofnumbers
let oneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for (i = 0; i < oneToNine.length; i++) {
  sum += oneToNine[i];
}
console.log(sum);

// Actors

let actors = ["Stallone", "Bardem", "Reno"];
for (i = 0; i < actors.length; i++) {
  console.log("Le numero " + (i + 1) + " est " + actors[i]);
}

// Mario

let characters = ["Mario", "Luigi", "Peach"];
characters.push("Bowser");
console.log(characters);
