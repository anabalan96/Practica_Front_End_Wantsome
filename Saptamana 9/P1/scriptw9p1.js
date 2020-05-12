// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = () => {
  setTimeout(function () { console.log('1') }, 300);
}

const func2 = () => {
  setTimeout(function () { console.log('2') }, 200);
}

const func3 = () => {
  console.log('3');
}

const func4 = () => {
  setTimeout(function () { console.log('4') }, 400);
}

const func5 = () => {
  setTimeout(function () { console.log('5') }, 100);
}

func1();
func2();
func3();
func4();
func5();

//1.

function customMap(array, callback) {
  var arr = [];
  for (var index in array) {
    arr.push(callback(array[index]));
  }
  return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const increment = (value) => {
  return value + 1;
}

const double = (value) => {
  return value * 2;
}

const square = (value) => {
  return value * value;
}

console.log(customMap(randomArray, increment));
console.log(customMap(randomArray, double));
console.log(customMap(randomArray, square));


// 2

/*
// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
var filter = function(____, ____) {
  var filteredArray = [];
  for (var ____ = ____; ____ < ____.____; ____++) {
    var ____ = ____[____];
    if (____(____)) {
      filteredArray.push(____);
    }
  }
  return filteredArray;
};

Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )
*/

let filter = function (array, callback) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    let result = array[i];
    if (callback(array[i])) {
      filteredArray.push(result);
    }
  }
  return filteredArray;
};

let myArray = [11, 25, 31, 42, 56, 63, 79, 88, 90, 109];

let graterThan = (value) => {
  return value > 60;
};

let oddNum = (value) => {
  return value % 2 === 1;
};

let evenNum = (value) => {
  return value % 2 === 0;
};

let divideFive = (value) => {
  return value % 5 === 0;
};

let divideTen = (value) => {
  return value % 10 === 0;
};


console.log(filter(myArray, graterThan));
console.log(filter(myArray, oddNum));
console.log(filter(myArray, evenNum));
console.log(filter(myArray, divideFive));
console.log(filter(myArray, divideTen));


// 3 

/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/


const multipleCallbacks = (objectValue, succesFn, errorFn) => {

  if (objectValue.status === "succes") {
    return succesFn();
  }
  else if (objectValue.status === "error") {
    return errorFn();
  }
};
const succesFn = () => console.log("Succes!");
const errorFn = () => console.log("Error!");

console.log(multipleCallbacks({ status: "error" }, succesFn, errorFn));


