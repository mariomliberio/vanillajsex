//Ex 1 Odd & Even

for (i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even");
  } else if (Math.abs(i % 2) == 1) {
    console.log(i + " is odd");
  }
}

//EX 2 Multiplication Tables
for (i = 0; i <= 10; i++) {
  console.log(i + " * 9 = " + i * 9);
}
// Ex 3 Grades

for (i = 0; i <= 100; i++) {
  switch (i <= 100) {
    case i > 90:
      grade = "A";
      break;
    case i > 80:
      grade = "B";
      break;
    case i > 70:
      grade = "C";
      break;
    case i > 65:
      grade = "D";
      break;
    case i < 65:
      grade = "F";
      break;
  }
  console.log("For score " + i + " grade " + grade);
}
// Ex 4 Pyramid
let pyramid = "";
for (i = 0; i <= 20; i++) {
  pyramid = pyramid + "*";
  console.log(pyramid);
}
