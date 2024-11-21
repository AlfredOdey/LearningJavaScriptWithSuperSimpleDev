// 11o
const strings1 = ['hello', 'world', 'search', 'good'];
const strings2 = ['not', 'found'];

function findSearch(array){
  let position = -1;
  for(let i = 0; i < array.length; i++){
    if(array[i] === 'search'){
      position = i;
    }
  }
  console.log(position);
}
findSearch(strings1);
findSearch(strings2);

// 11p
const strings3 = ['hello', 'world', 'search', 'good', 'search'];

let wordPosition = -1;

for(let i = 0; i < strings3.length; i++){
  if(strings3[i] === 'search'){
    wordPosition = i;
    break;
  }
}

console.log(wordPosition);

// 11q
function findIndex(array, word){
  for(let i = 0; i < array.length; i++){
    if(array[i] === word){
      return i;
    }
  } return -1;
}
console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

// 11r
function removeEgg(foods){
  const remFoods = [];
  for(let i = 0; i < foods.length; i++){
    if(foods[i] === 'egg'){
      continue;
    }
    remFoods.push(foods[i]);
  }
  return remFoods;
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


