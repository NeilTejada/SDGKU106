const x = "Neil"; //this is global

//in the sayHello function, pass a name, lastName and execute in init function.
function sayHello(name, lastName) {
  console.log("hello " + name + " " + lastName);
}

//practice print numbers 1 - 20, except 7 and 13
function printNumbers() {
  let numbers = [
    12, 4, 123, 4567, 234, 56, 12, 87, 124, 865, 233, 788, 43, 91, 544, 782,
    653, 845,
  ];

  for (let i = 1; i < 21; i++) {
    if (i != 7 && i != 13) {
      console.log(i);
    }
  }
  //print any number in the array
  //pring the sum of the numbers in the array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log(number);
    sum += number;
  }
  console.log("the total: " + sum);
}

function init() {
  console.log("hello there, from the init");

  sayHello(x, "Tejada");

  printNumbers();
}

window.onload = init;

//using the (), means that it will be called at that exact moment.
//avoiding the (), means that wait until everything else is rendered.
