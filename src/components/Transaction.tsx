import React, { useContext } from 'react';
import { ITransaction } from '../interfaces/ITransaction'
import { TransactionContext } from '../context/TransactionState'
import { ITransactionContext } from '../interfaces/ITransactionContext';

type Props = {
    transaction: ITransaction
};

const Transaction: React.FC<Props> = ({ transaction }) => {
    const { deleteTransaction } = useContext(TransactionContext) as ITransactionContext;

    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"
        }>
            {transaction.text}
            <span>
                {sign}${Math.abs(transaction.amount)}
            </span>
            <button
                className="delete-btn"
                onClick={() => deleteTransaction(transaction.id)} >x</button>
        </li >
    )
}

export default Transaction