import React from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Expense from './components/Expense';
import Header from './components/Header';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <Expense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
