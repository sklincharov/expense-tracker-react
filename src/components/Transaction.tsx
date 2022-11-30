import React, { useContext } from 'react';
import { ITransaction } from '../interfaces/ITransaction'
import { TransactionContext, TransactionContextType } from '../context/TransactionState'

type Props = {
    transaction: ITransaction
};

const Transaction: React.FC<Props> = ({ transaction }) => {
    const { deleteTransaction } = useContext(TransactionContext) as TransactionContextType;

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