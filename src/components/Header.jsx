import React from 'react';

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
            <h2 style={{textAlign: 'center', letterSpacing: 1}}>Expense Tracker</h2>
        </nav>
    );
};

export default Header;
