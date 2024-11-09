const costOfTshirt = 10;
const costOfSocks = 8;
const costOfDinnerPlates = 20;

let totalCost;

function getTotalCost(tShirt, socks, dinnerPlates){
  return tShirt + socks + dinnerPlates;
}
totalCost = getTotalCost(costOfTshirt, costOfSocks, costOfDinnerPlates);

console.log('$' + totalCost);