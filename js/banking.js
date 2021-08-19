
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = inputField.value;
    const amountValue = parseFloat(inputAmount);

    inputField.value = '';
    
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalField = document.getElementById(totalFieldId)
    const totalAmount = totalField.innerText;
    const currentAmount = parseFloat(totalAmount);

    totalField.innerText = currentAmount + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balanceTotal');
    const balanceAmount = balanceTotal.innerText;
    const currentBalance = parseFloat(balanceAmount)

    return currentBalance;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balanceTotal');
    // const balanceAmount = balanceTotal.innerText;
    // const currentBalance = parseFloat(balanceAmount)

    const currentBalance = getCurrentBalance();

    if(isAdd == true){
        const newBalance = currentBalance + amount;
        balanceTotal.innerText = newBalance;
    }else{
        const newBalance = currentBalance - amount;
        balanceTotal.innerText = newBalance;
    }
}


document.getElementById('depositBtn').addEventListener('click',function () {
    
    const depositAmount = getInputValue('depositAmount');
    if(depositAmount > 0){
        updateTotalField('depositTotal',depositAmount)
        updateBalance(depositAmount, true)
    }   
})

document.getElementById('withdrawBtn').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdrawAmount');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount <= currentBalance){
        updateTotalField('withdrawTotal', withdrawAmount)
        updateBalance(withdrawAmount, false)
    }else{
        alert('You can not withdraw more than what you have in your account!!')
    }
})