// import transactions from './data/transactions.js';
import transactionHistory from './data/transactions.js';


{/* <tr>
    <td>транзакція</td>
    <td>сума</td>
    <td>дата</td>
    <td>хто</td>
    <td>тип</td>
</tr> */}

const makeTransactionTableRowMarkup = ({id, amount, date, type}) => {
    return `
    <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${type}</td>
    </tr>
    `;
};

// console.log(makeTransactionTableRowMarkup(transactionHistory[1]));


const tableEl = document.querySelector('.js-transaction-table');

const makeTransactionTableRows = transactionHistory
    .map(makeTransactionTableRowMarkup,)
    .join(''); 

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);

console.log(makeTransactionTableRows)