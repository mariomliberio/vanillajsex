// HANGMAN

let word = ["B", "A", "S", "I", "C"];
let guesses = ["_", "_", "_", "_", "_"];
let wrong = 0;
let usedLetters = [];

let guessLetter = function () {
  while (word.toString() != guesses.toString()) { // En esta linea comprobamos que los arrays word y guesses no son iguales. Mientras sea el caso, la funcion se ejecuta.
    let inputs = prompt("Enter a letter:").toUpperCase(); // abrimos un prompt para que el usuario introduzca su letra y lo convertimos a mayuscula.
    if (usedLetters.includes(inputs) === false) { // Si la letra escrita no esta presente en letras utilizadas hasta ahora
      usedLetters.push(inputs); // Escribimos la letra escrita a letras utilizadas, da igual que sea una respuesta correcta o no. 
      for (i = 0; i < word.length; i++) { // Creamos un for loop que con el array word.
        if (inputs === word[i]) { // si la letra escrita por el usuario esta presente en alguna iteracion del array word
          guesses[i] = inputs; // introducimos la letra escrita en el array guesses en la misma iteracion que en el array word gracias a nuestro contador i.
        };
      };
      if (guesses.includes(inputs) === false) { // Si el array guesses no incluye nuestro input, 
        wrong++; // Sumamos 1 a wrong
        console.log(wrong + " failed attempts"); // Mostramos cuantas veces nos hemos equivocado
      }
      console.log(guesses);
    }
  }
};
console.log(guesses); // Ejecutamos el array guesses para ver las letras que ya hemos acertado.
guessLetter(); // Ejecutamos la funcion hangman.