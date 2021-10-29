export type TransactionEventCode = 'T1106' | 'T1107';

export type TransactionsGetRequestParams = {
    transaction_id?: string;
    transaction_type?: TransactionEventCode;
    transaction_status?: 'D' | 'F' | 'P' | 'S' | 'V';
    start_date: string;
    end_date: string;
};
