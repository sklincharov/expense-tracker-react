import { ITransaction } from "./ITransaction";

export interface ITransactionContext {
    transactions: ITransaction[];
    addTransaction: (transaction: ITransaction) => void;
    deleteTransaction: (id: number) => void;
}