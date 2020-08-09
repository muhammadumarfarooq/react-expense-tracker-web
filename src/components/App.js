import React from 'react';
import { ExpenseProvider } from "../context/expense/ExpenseState";
import Header from "./Header";
import Balance from "./Balance";

function App() {
  return (
    <ExpenseProvider>
      <Header />
      <div className="container">
        <Balance />
      </div>
    </ExpenseProvider>
  );
}

export default App;
