import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionState'
import { ITransactionContext } from '../interfaces/ITransactionContext';
import Transaction from './Transaction';


const TransactionList: React.FC = () => {
    const { transactions } = useContext(TransactionContext) as ITransactionContext;
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