import React, { useContext } from 'react'
import { TransactionContext, TransactionContextType } from '../context/TransactionState'
import Transaction from './Transaction';


const TransactionList = () => {
    const { transactions } = useContext(TransactionContext) as TransactionContextType;
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Transaction
                        key={transaction.id}
                        transaction={transaction}
                    />))}
            </ul>
        </>
    )
}

export default TransactionList