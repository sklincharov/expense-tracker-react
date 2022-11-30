import React, { useContext } from 'react'
import { TransactionContext, TransactionContextType } from '../context/TransactionState';

const Balance: React.FC = () => {
  const { transactions } = useContext(TransactionContext) as TransactionContextType;

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

export default Balance