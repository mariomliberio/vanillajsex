// Minmax
let array1 = [7, 5, -12, 6, 32, 18, 14, -2];
let array2 = [-3, 9, 21, 36, 27, 54, 17, 35];

let minarray1 = Math.min(...array1);
let maxarray2 = Math.max(...array2);
let sumOfLastValues = minarray1 + maxarray2;
console.log(minarray1);
console.log(maxarray2);
console.log(sumOfLastValues);

// Random 1

let floatBateau = 10.4;
let couleBateau = Math.round(Math.floor(floatBateau));
let voleBateau = Math.round(Math.ceil(floatBateau));

console.log(couleBateau);
console.log(voleBateau);

// Random 2

let random = Math.floor(Math.random() * 51) + 50;
let random1 = Math.random();
let random2 = Math.floor(Math.random() * 11);

console.log(random);
console.log(random1);
console.log(random2);

// Random 3

let mkchar = [
  "Goro",
  "Johnny Cage",
  "Kano",
  "Liu Kang",
  "Raiden",
  "Reptil",
  "Scorpion",
  "Shang Tsun",
  "Sonya",
  "Sub-Zero"
];
let numba = Math.floor(Math.random() * 10);

console.log(mkchar[numba]);
