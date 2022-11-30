import React from 'react';
import { ITransaction } from '../interfaces/ITransaction'

type Props = {
    transaction: ITransaction
};

const Transaction: React.FC<Props> = ({ transaction }) => {
    // 
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"
        }>
            {transaction.text} < span > {sign}${Math.abs(transaction.amount)}</span >
            <button className="delete-btn">x</button>
        </li >
    )
}

export default Transaction