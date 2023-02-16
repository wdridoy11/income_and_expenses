// get input this value and convert parseFloat number
function getInputFieldAmount(inputId) {
   const element = document.getElementById(inputId);
   const elementSting = element.value;
   const elementAmount = parseFloat(elementSting);
   return elementAmount;
}
// set the value 
function outputValueSet(elementId, elementValue) {
   const element = document.getElementById(elementId);
   element.innerText = elementValue;
}
// total Expenses Amount adding 
function totalExpensesAmount() {
   const foodExpensesAmount = getInputFieldAmount("food-expenses");
   const rentExpensesAmount = getInputFieldAmount("rent-expenses");
   const clothesExpensesAmount = getInputFieldAmount("clothes-expenses");
   if (isNaN(foodExpensesAmount) || isNaN(rentExpensesAmount) || isNaN(clothesExpensesAmount)) {
      alert("Please enter a valid amount");
      return;
   }
   const expensesAmount = foodExpensesAmount + rentExpensesAmount + clothesExpensesAmount;
   return expensesAmount;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
   // all income amount and expenses amount functions call
   const incomeAmount = getInputFieldAmount("income-field");
   // all expenses amount adding
   const expensesTotalAmount = totalExpensesAmount();
   if (isNaN(expensesTotalAmount)) {
      return;
   }
   const balanceAmount = incomeAmount - expensesTotalAmount;
   // set total amount and Expenses amount
   outputValueSet("total-expenses", expensesTotalAmount);
   outputValueSet("balance", balanceAmount);
});

document.getElementById("save-btn").addEventListener("click", function () {
   const incomeAmount = getInputFieldAmount("income-field");
   const inputValuePercent = getInputFieldAmount("save-amount-percent");
   // save 30% amount
   const saveAmount = incomeAmount / 100;
   const saveAmountValue = saveAmount * inputValuePercent;
   outputValueSet("saving-amount", saveAmountValue)
   // total amount and Expenses amount
   const expensesTotalAmount = totalExpensesAmount();
   const balanceAmount = incomeAmount - expensesTotalAmount;
   const balanceToSave = balanceAmount - saveAmountValue;
   outputValueSet("remaining-balance", balanceToSave)
})
