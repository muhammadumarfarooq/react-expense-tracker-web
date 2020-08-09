import React from 'react';
import { ExpenseProvider } from "../context/expense/ExpenseState";

function App() {
  return (
    <ExpenseProvider>
      <div className="App">
        <h1>Expense Tracker application...</h1>
      </div>
    </ExpenseProvider>
  );
}

export default App;
