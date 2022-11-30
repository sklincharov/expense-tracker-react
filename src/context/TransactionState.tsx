import React, { createContext, useState } from 'react';
import { ITransaction } from '../interfaces/ITransaction';

export type TransactionContextType = {
    transactions: ITransaction[];
    addTransaction: (transaction: ITransaction) => void;
    deleteTransaction: (id: number) => void;
}

// Create context
export const TransactionContext = createContext<TransactionContextType | null>(null);

interface Props {
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