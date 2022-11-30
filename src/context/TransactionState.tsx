import React, { createContext, useState } from 'react';
import { ITransaction } from '../interfaces/ITransaction';
import { ITransactionContext } from '../interfaces/ITransactionContext';

// Create context
export const TransactionContext = createContext<ITransactionContext | null>(null);

type Props = {
    children: React.ReactNode;
}

// Configure provider
const TransactionProvider: React.FC<Props> = ({ children }) => {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    const deleteTransaction = (id: number) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    }

    const addTransaction = (transaction: ITransaction) => {
        setTransactions([transaction, ...transactions]);
    }

    return (
        <TransactionContext.Provider value={{ transactions, addTransaction, deleteTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
}

export default TransactionProvider