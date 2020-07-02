/*
PLEASE DO NOT TOUCH THE TEST SECTION

ALL FUNCTION HAVE BEEN DECLARED FOR YOU BUT YOU WILL NEED TO
MANIPULATE THE DEFINITION ALONG WITH THE PARAMETERS

*/

/*
EXAMPLE

CREATE A FUNCTION THAT TAKES ONE ARGUMENT, AN ARRAY, AND ADDS OR MUTATES (MEANING CHANGE) THE ZEROTH ELEMENT TO ZERO AND RETURNS THAT ARRAY

e.g.

mutateZeroElem([]) ===> [0]
mutateZeroElem([1]) ===> [0]
mutateZeroElem([1,2,3]) ===> [0, 2, 3]

*/

function mutateZeroElem(anyArray) {
  // THIS CAN CHANGE THE ARRAY'S ELEMENT, WITHOUT REASSIGNING THE PARAMETER anyArray
  anyArray[0] = 0;
  return anyArray;
}

/*
QUESTION 1

CREATE A FUNCTION THAT TAKES ONE ARGUMENT, AN ARRAY, AND ADDS THE STRING 'last element' TO THE END AND RETURNS THAT ARRAY. DO NOT USE array.push(elem)!!!!!

e.g.

pushTrue([]) ===> ['last element']
pushTrue([1]) ===> [1, 'last element']
pushTrue([1,2,3]) ===> [1, 2, 3, 'last element']

*/

function pushString(arr) {
  if(arr[0] === undefined && arr.length === 0){
    arr[0] = "last element";
  } else if(arr.length > 1){
    arr[arr.length] = "last element";
  }
  
  return arr;
}
console.log('----Question 1:----');

pushString([])
pushString([1])
pushString([1,2,3])

console.log([].length)

/*
QUESTION 2

CREATE A FUNCTION THAT TAKES TWO ARGUMENTS, AN ARRAY AND A VALUE IT THEN PUSHES THE VALUE INTO THE END OF THE ARGUMENT AND RETURNS THE ARRAY
PLEASE DO NOT USE array.push()

e.g.

mutateZeroElem([]) ===> [true]
mutateZeroElem([1]) ===> [1, true]
mutateZeroElem([1,2,3]) ===> [1, 2, 3, true]

*/

function push(array, value) {
  array[array.length] = value;
  return array;
}
console.log('----Question 2:----');

console.log(push([], 'yo'))
console.log(push([1], 'yo'))
console.log(push([1,2,3], 9))

/*
QUESTION 3

CREATE A FUNCTION THAT TAKES ONE ARGUMENTS, AN ARRAY AND THEN ITERATES (LOOPS OVER) THE ARRAY AND LOGS TO THE CONSOLE EACH ELEMENT


e.g.

printElements([1, true, 'I am the third element', 'my index is 3 confusing right']) ===>
OUTPUT:

1
true
'I am the third element'
'my index is 3 confusing right'

*/

function printElements(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

console.log('----Question 3:----');
printElements([1, true, 'I am the third element', 'my index is 3 confusing right'])

/*
QUESTION 4

CREATE A FUNCTION THAT TAKES ONE ARGUMENT, AN ARRAY, AND RETURNS A NEW ARRAY THAT HAS ONLY UNIQUE VALUES IN THE SAME ORDER THEY FIRST APPEAR IN THE ORIGINAL ARRAY

DON'T USE indexOF!!!!!!

YOU MAY WANT TO USE AN INNER FOR-LOOP:

for(var i = 0; i < array.length; i++) {

  for(var j = 0; j < array2.length; j++) {

    DO SOMETHING HERE

  }
}

e.g.

unique([1,1,1,1,1,1]) ===> [1];

unique([1,2,3,2,3,2]) ===> [1, 2, 3];
*/

function unique(array) {
  const obj = {};

  const newarr = [];
  array.forEach((ele) => {
    if(!newarr.includes(ele)){
      newarr.push(ele);
    }
  })


  return newarr;
}

// unique([1,1,1,1,1,1])

console.log('----Question 4:----');
console.log(unique([1,2,3,2,3,2]))

/*
QUESTION 5

CREATE A FUNCTION THAT TAKES TWO ARGUMEMNTS, ARRAYS, AND RETURN true IF THEY CONTAIN TWO OF THE SAME ELEMENTS OTHERWISE RETURN FALSE
DO NOT USE indexOf

HINT USE AN INNER FOR-LOOP



*/

function compare(array1, array2) {

  const newArr = array1.filter((ele) => {
    if(array2.includes(ele)){
      return true;
    } else {
      return false;
    }
  })

  if (newArr.length > 0) return true;
  else return false;

}

console.log('----Question 5:----');
console.log(compare([1,2,3,2,3,2,1], [1,1,1,1,1,1,1]))

/*
QUESTION 6

CREATE A FUNCTION THAT TAKES TWO ARGUMENTS, ARRAYS,  AND RETURNS A NEW ARRAY THAT HAS ELEMENTS THAT BOTH ARGUMENTS CONTAIN, THERE WILL BE NO DUPLICATES


compareArrays([1, 2, 3, 4], [5, 6, 7, 8]) ===> []
compareArrays([1, 2, 3, 4], [1, 2]) ====> [1, 2]


*/

function compareArrays(array1, array2) {

  const newArr = [];
  
  array1.forEach((ele) => {
    if(array2.includes(ele) && !(newArr.includes(ele))){
      newArr.push(ele);
    }
  })



  return newArr;

}

console.log('----Question 6:----');
console.log(compareArrays([1, 2, 3, 4], [1, 5, 6, 7, 8]))
console.log(compareArrays([1, 2, 3, 4, 2, 2], [1, 2, 2, 2, 2, 2, 2]))

/*
QUESTION 7

TAKES TWO ARRAYS AND RETURNS AN ARRAY THAT HAS ELEMENTS THAT ARE UNIQUE TO THE FIRST ARRAY!

e.g.

compareArraysOpposite([1,2,3,4], [1,3]) ===> [2, 4]

*/

function compareArraysOpposite(array1, array2) {
  const newArr = array1.filter((ele) => {
    if(!array2.includes(ele)){
      return true;
    } else return false;
  })
  return newArr;
}

console.log('----Question 7:----');
console.log(compareArraysOpposite([1,2,3,4], [1,3]))

/*
QUESTION 8


CREATE A FUNCTION THAT TAKES THREE ARGUMENTS, A 2D ARRAY AND TWO INTEGERS TO REPRESENT COLUMNS AND ROWS. THE FUNCTION RETURNS THE VALUE OF THAT COLUMN AND ROW


2-D ARRAY EXAMPLE


var twoDimentionArray = [
                          [0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 1, 0, 0],
                        ]

retrieveValue(twoDimentionArray, 3, 1) ===> 1

*/

function retrieveValue(arr, row, col) {
  return arr[row][col];
}

console.log('----Question 8:----');
var twoDimentionArray = [
                          [0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 1, 0, 0],
                        ]
                        
console.log(retrieveValue(twoDimentionArray, 3, 1))

/*
QUESTION 9


CREATE A FUNCTION THAT TAKES TWO ARGUMENTS, INTEGERS, AND RETURNS A TWO DIMENTIAL ARRAY THAT HAS ZEROS AS THE VALUES. USE LOOPS



2-D ARRAY EXAMPLE


var twoDimentionArray = [
                          [0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 1, 0, 0],
                        ]

createTwoDArray(3, 5) ===> [
                              [0, 0, 0, 0, 0],
                              [0, 0, 0, 0, 0],
                              [0, 0, 0, 0, 0],
                            ]

*/

function createTwoDArray(row, col) {
  const newArr = [];
  for(let i = 0; i < row; i++){
    let innerArr = [];
    for(let j = 0; j < col; j++){
      innerArr.push(0);
    }
    newArr.push(innerArr);
  }
  return newArr;
}

console.log('----Question 9:----');
console.log(createTwoDArray(3, 5))

/*
TEST SECTION, PLEASE DO NOT TOUCH




*/

const Mocha = require('mocha');

const runner = new Mocha({});

runner.addFile('./test.js');

runner.run();

module.exports = {
  mutateZeroElem,
  pushString,
  push,
  printElements,
  unique,
  compare,
  compareArrays,
  compareArraysOpposite,
  retrieveValue,
  createTwoDArray,
};

console.log('');
