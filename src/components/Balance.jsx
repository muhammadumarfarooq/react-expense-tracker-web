import React, {useContext} from 'react';
import {ExpenseContext} from '../context/expense/ExpenseState';

const Balance = () => {
    const {transactions} = useContext(ExpenseContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div style={{display: "flex", alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem'}}>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </div>
    );
};

export default Balance;

