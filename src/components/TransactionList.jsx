import React, {useContext} from 'react';
import {Transaction} from './Transaction';

import {ExpenseContext} from '../context/expense/ExpenseState';

const TransactionList = () => {
    const {transactions} = useContext(ExpenseContext);

    return (
        <>
            <h3>History</h3>

            {transactions.length === 0 && <p style={{margin: '40px 0 0 0', textAlign: 'center'}}>No history found</p>}

            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </>
    );
};

export default TransactionList;
