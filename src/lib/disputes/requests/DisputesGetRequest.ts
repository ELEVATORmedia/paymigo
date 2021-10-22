/* eslint-disable @typescript-eslint/camelcase */
import Request from '../../Request';
import qs from 'qs';

export type DisputeState = 'RESOLVED';

export type DisputesGetRequestParams = {
    start_time: string;
    dispute_state?: DisputeState;
};

export default class DisputesGetRequest extends Request {
    constructor(startTime: Date, state?: DisputeState) {
        const paramInput: DisputesGetRequestParams = {
            start_time: startTime.toISOString(),
        };

        if (state) paramInput.dispute_state = state;

        const queryParams = qs.stringify(paramInput);

        super({ path: `/v1/customer/disputes?${queryParams}` });
    }
}
