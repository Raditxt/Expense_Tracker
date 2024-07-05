// Get the form, transaction list, and balance elements
const form = document.getElementById('transaction-form');
const transactionList = document.getElementById('transactions');
const balanceElement = document.getElementById('balance-amount');

// Initialize the transaction list and balance
let transactions = [];
let balance = 0;

// Add event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the form data
    const type = document.getElementById('type').value;
    const date = document.getElementById('date').value;
    const amount = parseInt(document.getElementById('amount').value);

    // Create a new transaction object
    const transaction = {
        type,
        date,
        amount
    };

    // Add the transaction to the list
    transactions.push(transaction);

    // Update the transaction list
    updateTransactionList();

    // Update the balance
    updateBalance(transaction);

    // Reset the form
    form.reset();
});

// Update the transaction list
function updateTransactionList() {
    transactionList.innerHTML = '';

    transactions.forEach((transaction) => {
        const transactionCard = document.createElement('div');
        transactionCard.className = 'transaction-card';

        const dateElement = document.createElement('p');
        dateElement.className = 'date';
        dateElement.textContent = transaction.date;

        const typeElement = document.createElement('p');
        typeElement.className = 'type';
        typeElement.textContent = transaction.type;

        const amountElement = document.createElement('p');
        amountElement.className = 'amount';
        amountElement.textContent = `Rp ${transaction.amount.toLocaleString()}`;

        transactionCard.appendChild(dateElement);
        transactionCard.appendChild(typeElement);
        transactionCard.appendChild(amountElement);

        transactionList.appendChild(transactionCard);
    });
}

// Update the balance
function updateBalance(transaction) {
    if (transaction.type === 'pemasukan') {
        balance += transaction.amount;
    } else {
        balance -= transaction.amount;
    }

    balanceElement.textContent = `Rp ${balance.toLocaleString()}`;
}