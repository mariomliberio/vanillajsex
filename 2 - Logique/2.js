// Ex 1 Langues

let languages = ["fr", "es", "en"];
let messages = [
  "Bonjour tout le monde",
  "Hola todo el mundo",
  "Hello everybody"
];
var submitbtn = document.getElementById("submitbtn");

submitbtn.onclick = function() {
  var texti = document.getElementById("forminput").value;
  switch (texti) {
    case languages[2]:
      console.log(messages[2]);
      break;
    case languages[0]:
      console.log(messages[0]);
      break;
    case languages[1]:
      console.log(messages[1]);
      break;
  }
};

//Ex 2 Scores

function scores() {
  let score = 95;
  let result = "";
  if (score <= 50) {
    console.log((result = "C"));
  } else if (score > 50 && score <= 90) {
    console.log((result = "B"));
  } else {
    console.log((result = "A"));
  }
}

scores();

// EX 3 Mettre au Pluriel.

let mot = "poire";
let motnum = 4;
let motresult = "";

function pluralwords() {
  if (motnum > 1) {
    console.log((motresult = mot + "s"));
  } else if (motnum == 1) {
    console.log((mot = motresult));
  }
}
pluralwords();
