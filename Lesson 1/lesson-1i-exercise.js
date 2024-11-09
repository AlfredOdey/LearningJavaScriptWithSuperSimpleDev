const bankBalance = 100;
const lunchCost = 20;
const dinnerCost = 50;
const earnings = 200;

let newBankBalance;

function getNewBankBalance(a, b, c, d){
  return (a - (b + c)) + d;
}
newBankBalance = getNewBankBalance(bankBalance, lunchCost, dinnerCost, earnings);

console.log(newBankBalance);