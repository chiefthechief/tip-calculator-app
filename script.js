let bill = document.querySelector('#body #content #inputs input:nth-child(2)');
let tips = document.querySelectorAll('#body #content #inputs #tips button');
let customTip = document.querySelector('#body #content #inputs #tips input:first-child');
let peopleNumber = document.querySelector('#body #content #inputs input:nth-child(7)');
let tipPerPerson = document.querySelector('#body #content #final .per-person:first-child p:last-child');
let totalPerPerson = document.querySelector('#body #content #final .per-person:nth-child(2) p:last-child');
let resetButton = document.querySelector('#body #content #final button');
let errorMessage = document.querySelector('#body #content #inputs p:nth-child(6)')
let tipValue = [];
let tipToBeUsed = 0;
for(let i = 0; i < tips.length; i++){
    tips[i].addEventListener('click', () => {
        if(tipValue.length === 1){
            tipValue = [];
            tipValue.push(tips[i].getAttribute('value'));
        }else{
            tipValue.push(tips[i].getAttribute('value'));
        }
    })
}
function calculate(){
    if(customTip.value === ""){
        tipToBeUsed = tipValue[0];
    }else{
        tipToBeUsed = customTip.value;
    }
    let totalAmountPaid = (bill.value * (1 + (tipToBeUsed/ 100)));
    let totalPerPersonValue = (totalAmountPaid / peopleNumber.value);
    let tipPerPersonValue = ((tipToBeUsed / 100) * totalPerPersonValue);
    tipPerPerson.innerText = `$${tipPerPersonValue.toFixed(2)}`;
    totalPerPerson.innerText = `$${totalPerPersonValue.toFixed(2)}`;
    resetButton.classList.add('show');
    resetButton.addEventListener('click', () => {
        tipPerPerson.innerText = `$${0.00}`;
        totalPerPerson.innerText = `$${0.00}`;
    })
}
window.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        if(!((isNaN(bill.value))) && (!(isNaN(peopleNumber.value)))){
            calculate();
        }else{
            errorMessage.classList.add('show');
        }
    }
})