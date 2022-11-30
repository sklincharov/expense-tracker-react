import React from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Expense from './components/Expense';
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import TransactionProvider from './context/TransactionState';


function App() {
  return (
    <TransactionProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expense />
        <TransactionList />
        <AddTransaction />
      </div>
    </TransactionProvider>
  );
}

export default App;
