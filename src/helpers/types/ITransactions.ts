export interface ITransactions {
    list: ITransaction[] | null;
    last: ILastTransactions;
}

export interface ITransaction {
    amount: number;
    date: string;
    time: string;
    type: "IN" | "OUT"
}
export interface ILastTransactions {
    in: ITransaction | null;
    out: ITransaction | null
}