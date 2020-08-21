/* eslint-disable @typescript-eslint/camelcase */
import qs from 'qs';
import PayPalRequest from './PayPalRequest';

export type DisputeState = 'RESOLVED';

export type DisputesGetRequestParams = {
    start_time: string;
    dispute_state?: DisputeState;
};

export default class DisputesGetRequest extends PayPalRequest {
    constructor(startTime: Date, state?: DisputeState) {
        const paramInput: DisputesGetRequestParams = {
            start_time: startTime.toISOString(),
        };

        if (state) paramInput.dispute_state = state;

        const queryParams = qs.stringify(paramInput);

        super({ path: `/v1/customer/disputes?${queryParams}` });
    }
}
