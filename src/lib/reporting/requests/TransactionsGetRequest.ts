import qs from 'qs';
import {
    TransactionEventCode,
    TransactionsGetRequestParams,
} from '../../../types/transactions';
import Request from '../../Request';

export default class TransactionsGetRequest extends Request {
    constructor(startTime: Date, endTime: Date, type: TransactionEventCode) {
        const paramInput: TransactionsGetRequestParams = {
            transaction_type: type,
            start_date: startTime.toISOString(),
            end_date: endTime.toISOString(),
        };

        const queryParams = qs.stringify(paramInput);

        super({ path: `/v1/reporting/transactions?${queryParams}` });
    }
}
