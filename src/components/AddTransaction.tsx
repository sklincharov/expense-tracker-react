import React, { useContext, useState } from 'react'
import { TransactionContext, TransactionContextType } from '../context/TransactionState';
import { ITransaction } from '../interfaces/ITransaction';

const AddTransaction: React.FC = () => {
    const { addTransaction } = useContext(TransactionContext) as TransactionContextType;

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const handleAddTransaction = (event: React.FormEvent) => {
        event.preventDefault();

        // Create new transaction
        let transaction: ITransaction = {
            id: Math.random(),
            text: text,
            amount: amount
        }

        // Update context
        addTransaction(transaction);
    }

    return (
        <> <h3>Add new transaction</h3>
            <form onSubmit={(event) => handleAddTransaction(event)}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(+e.target.value)}
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form></>
    )
}

export default AddTransaction