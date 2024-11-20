// 11a
const nums = [10, 20, 30];

nums[2] = 99;


// 11b
function getLastValue(array) {
  const lastValue = array.length - 1;
  console.log(array[lastValue]);
}
getLastValue([1, 20, 22, 24, 5]);
getLastValue(['hi', 'hello', 'good']);


// 11c
function arraySwap(array) {
  const lastIndex = array.length - 1;
  const lastItem = array[lastIndex];
  const firstItem = array[0];

  array[0] = lastItem;
  array[lastIndex] = firstItem;

  console.log(array);
}
arraySwap([1, 20, 22, 24, 5]);
arraySwap(['hi', 'hello', 'good']);

// 11d
for(let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 11e
for(let i = 5; i >= 0; i--) {
  console.log(i);
}

// 11f
let whileIndex = 0;
while(whileIndex <= 10) {
  console.log(whileIndex);
  whileIndex++;
}

for(let forIndex = 5; forIndex >= 0; forIndex--){
  console.log(forIndex);
}

// 11g
const digits = [1,2,3];
console.log(digits);

let newDigits = [];

for(let i = 0; i < digits.length; i++) {
  const digit = digits[i];

  newDigits.push(digit + 1);

}

console.log(newDigits);

// 11h

function addOne(theArray){
  const newArray = [];
  for(let i = 0; i < theArray.length; i++) {
    newArray.push(theArray[i] + 1);
  }
  return newArray;
}
console.log(addOne([1,2,3]));
console.log(addOne([-2,-1,0,99]));

// 11i
function addNum(anArray, num){
  const anotherArray  = [];
  for(let i = 0; i < anArray.length; i++) {
    anotherArray.push(anArray[i] + num);
  }
  return anotherArray;
}
console.log(addNum([1,2,3],2));
console.log(addNum([1,2,3],3));
console.log(addNum([-2,-1,0,99],2));

// 11j
function addArrays(array1, array2) {
  const arrayResult = [];

  for(let i = 0; i < array1.length; i++) {
    arrayResult.push(array1[i] + array2[i]);
  }
  return arrayResult;
}
console.log(addArrays([1,1,2], [1,1,3]));
console.log(addArrays([1,2,3], [4,5,6]));

//11k
function countPositive(numx) {
  let numsGreaterThanZero = 0;
  for(let i = 0; i < numx.length; i++) {
    if(numx[i] > 0) {
      numsGreaterThanZero++;
    }
  }
  return numsGreaterThanZero;
}
console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));

// 11l
function minMax(numbs) {
  let object = {
    min: numbs[0],
    max: numbs[0]
  };
  for(let i = 0; i < numbs.length; i++) {
    const element = numbs[i];

    if(element < object.min) {
      object.min = element;
    }

    if(element > object.max) {
      object.max = element;
    }
  }
  return object;
}
console.log(minMax([1,-3,5]));
console.log(minMax([-2,3,-5,7,10]));
// 11m
console.log(minMax([]));
console.log(minMax([3]));

// 11n
function countWords(words){
  const object1 = {};

  for(let i = 0; i < words.length; i++) {
    const word = words[i];

    if(object1[word]){
      object1[word]++;
    } else {
      object1[word] = 1;
    }
  }
  return object1;
}
console.log(countWords(['apple', 'grape', 'apple', 'apple']));
