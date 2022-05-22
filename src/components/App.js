import React from 'react';
import { ExpenseProvider } from "../context/expense/ExpenseState";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

function App() {
  return (
    <ExpenseProvider>
      <Header/>

      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </ExpenseProvider>
  );
}

export default App;
