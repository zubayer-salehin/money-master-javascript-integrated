// totalExpenses function
function totalExpenses() {
    // Get IncomeInput Value
    let incomeText = document.querySelector("#income");
    let incomeNumber = parseFloat(incomeText.value);
    // Get FoodInput Value
    let foodInputText = document.querySelector("#foodInput");
    let foodInputNumber = parseFloat(foodInputText.value);
    // Get RentInput Value
    let rentInputText = document.querySelector("#rentInput");
    let rentInputNumber = parseFloat(rentInputText.value);
    // Get ClothesInput Value
    let clothesInputText = document.querySelector("#clothesInput");
    let clothesInputNumber = parseFloat(clothesInputText.value);
    // Sum foodInputNumber,rentInputNumber,clothesInputNumber
    let totalExpenses = foodInputNumber + rentInputNumber + clothesInputNumber;
    // Get total-expenses
    let totalExpensesText = document.querySelector("#total-expenses");
    // Get saving-amount
    let savingAmountText = document.querySelector("#saving-amount");
    // Get remaining-balance
    let remainingBalance = document.querySelector("#remaining-balance");
    //Negative Number Error Handling
    if (foodInputNumber < 0 || rentInputNumber < 0 || clothesInputNumber < 0 || incomeNumber < 0) {
        document.querySelector("#numberMessage").style.display = "none";
        document.querySelector("#totalExpensesMessage").style.display = "none";
        document.querySelector("#remianingMessage").style.display = "none";
        document.querySelector("#positiveNumberMessage").style.display = "block";
        totalExpensesText.innerText = 0;
        savingAmountText.innerText = 0;
        remainingBalance.innerText = 0;
    }
    // totalExpenses is greater than incomeNumber Error Handling
    else if (totalExpenses > incomeNumber) {
        document.querySelector("#numberMessage").style.display = "none";
        document.querySelector("#positiveNumberMessage").style.display = "none";
        document.querySelector("#remianingMessage").style.display = "none";
        document.querySelector("#totalExpensesMessage").style.display = "block";
        totalExpensesText.innerText = 0;
        savingAmountText.innerText = 0;
        remainingBalance.innerText = 0;
    }
    // Input Number Value Check and Calculation
    else if (Number.isFinite(foodInputNumber) && Number.isFinite(rentInputNumber) && Number.isFinite(clothesInputNumber) && Number.isFinite(incomeNumber)) {
        document.querySelector("#positiveNumberMessage").style.display = "none";
        document.querySelector("#numberMessage").style.display = "none";
        document.querySelector("#remianingMessage").style.display = "none";
        document.querySelector("#totalExpensesMessage").style.display = "none";
        // totalExpensesText Update
        totalExpensesText.innerText = totalExpenses;
    }
    // String Value Error Handling
    else {
        document.querySelector("#positiveNumberMessage").style.display = "none";
        document.querySelector("#totalExpensesMessage").style.display = "none";
        document.querySelector("#remianingMessage").style.display = "none";
        document.querySelector("#numberMessage").style.display = "block";
        totalExpensesText.innerText = 0;
        savingAmountText.innerText = 0;
        remainingBalance.innerText = 0;
    }

    let totalExpensesNumber = parseFloat(totalExpensesText.innerText);
    return totalExpensesNumber;   // Return totalExpensesNumber
}

// balance function
function balance(totalExpenses) {
    // Get IncomeInput Value
    let incomeText = document.querySelector("#income");
    let incomeNumber = parseFloat(incomeText.value);
    // Get balance
    let balanceText = document.querySelector("#balance");
    if (incomeNumber > 0) {
        // balanceText Update
        balanceText.innerText = incomeNumber - totalExpenses;
    } else {
        // balanceText Update
        balanceText.innerText = 0;
    }
}

// Calculate Click Event
document.querySelector("#calculate").addEventListener("click", function () {
    let totalExpensesNumber = totalExpenses();  // totalExpenses function call
    balance(totalExpensesNumber);  // balance function call
})

// savingAmount function
function savingAmount() {
    // Get IncomeInput Value
    let incomeText = document.querySelector("#income");
    let incomeNumber = parseFloat(incomeText.value);
    // Get saveInput Value
    let saveInputText = document.querySelector("#saveInput");
    let saveInputNumber = parseFloat(saveInputText.value);
    // Get savingAmount
    let savingAmountText = document.querySelector("#saving-amount");
    // Negative Number Error Handling
    if (saveInputNumber < 0) {
        document.querySelector("#percentageNumberMessage").style.display = "none";
        document.querySelector("#percentagePositiveNumberMessage").style.display = "block";
        savingAmountText.innerText = 0;
    }
    // saveInputNumber Check and Calculation
    else if (Number.isFinite(saveInputNumber)) {
        document.querySelector("#percentageNumberMessage").style.display = "none";
        document.querySelector("#percentagePositiveNumberMessage").style.display = "none";
        // savingAmountText Update
        savingAmountText.innerText = (incomeNumber / 100) * saveInputNumber;
    } else {
        document.querySelector("#percentageNumberMessage").style.display = "block";
        document.querySelector("#percentagePositiveNumberMessage").style.display = "none";
        // savingAmountText Update
        savingAmountText.innerText = 0;
    }
    let savingAmountNumber = parseFloat(savingAmountText.innerText);
    return savingAmountNumber;   // Return savingAmountNumber
}

// remainingBalance function
function remainingBalance(savingAmount) {
    // Get balance Value
    let balanceText = document.querySelector("#balance");
    let balanceNumber = parseFloat(balanceText.innerText);
    // Get remainingBalance
    let remainingBalance = document.querySelector("#remaining-balance");
    if (balanceNumber > savingAmount) {
        document.querySelector("#remianingMessage").style.display = "none";
        // remainingBalance Update
        remainingBalance.innerText = balanceNumber - savingAmount;
    } else {
        document.querySelector("#remianingMessage").style.display = "block";
        // remainingBalance Update
        remainingBalance.innerText = 0;
    }
}

// Save Events
document.querySelector("#save").addEventListener("click", function () {
    let savingAmountNumber = savingAmount();  // savingAmount function call
    remainingBalance(savingAmountNumber);  // remainingBalance function call
})