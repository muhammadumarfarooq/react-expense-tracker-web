import React from 'react';
import expenseImg from '../assets/expenses.png';

const Header = () => {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '1rem 1rem',
            backgroundColor: '#3a1960',
            color: '#fff'
        }}>
            <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                <img style={{width: 40, height: 'auto', marginRight: 20}} src={expenseImg} alt='Expense'/>
                <h2 style={{letterSpacing: 1, margin: 0}}>Expense Tracker</h2>
            </div>
        </nav>
    );
};

export default Header;
