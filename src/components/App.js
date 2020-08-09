import React from 'react';
import { ExpenseProvider } from "../context/expense/ExpenseState";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList  from "./TransactionList";

function App() {
  return (
    <ExpenseProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </ExpenseProvider>
  );
}

export default App;
