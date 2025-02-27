const billAmount = document.getElementById("bill");
const numberOfPeople = document.getElementById("people");
const customTipPercentage = document.getElementById("custom");
const billTipAmount = document.getElementById("tipAmount");
const billTotalPerPerson = document.getElementById("total");
const resetButton = document.getElementById("resetBtn");
const buttons = document.querySelectorAll(".tip-btns button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {

    buttons.forEach(btn => btn.classList.remove('selected'));
    e.target.classList.add('selected');


    let tipvalue = e.target.innerText;
    tipvalue = tipvalue.substr(0, tipvalue.length - 1);

    if (billAmount.value === "") return;
    if (numberOfPeople.value === "" || parseInt(numberOfPeople.value)===0) numberOfPeople.value = "";
   

    calculateTip(
      parseFloat(billAmount.value),
      parseInt(tipvalue),
      parseInt(numberOfPeople.value)
    );
  });
});

customTipPercentage.addEventListener("blur", (e) => {

  buttons.forEach(btn=>btn.classList.remove('selected'));
  if (billAmount.value === "") {
    resetEverything();
    return;
  }
  if (numberOfPeople.value === "") numberOfPeople.value = 0;

  calculateTip(
    parseFloat(billAmount.value),
    parseFloat(e.target.value),
    parseInt(numberOfPeople.value)
  );
});

function calculateTip(billAmount, tipPercentage, numberOfPeople) {
  let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);

  let totalAmount = (tipAmount * numberOfPeople + billAmount) / numberOfPeople;
  totalAmount = totalAmount.toFixed(2);

  billTipAmount.innerHTML = `$${tip}`;
  billTotalPerPerson.innerHTML = `$${totalAmount}`;
}

resetButton.addEventListener("click", resetEverything);
function resetEverything() {
  billTipAmount.innerHTML = "$0.00";
  billTotalPerPerson.innerHTML = "$0.00";
  billAmount.value = "";
  numberOfPeople.value = "";
  customTipPercentage.value = "";
}
