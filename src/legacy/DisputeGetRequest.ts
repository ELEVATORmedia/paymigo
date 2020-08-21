import PayPalRequest from './PayPalRequest';

export default class DisputeGetRequest extends PayPalRequest {
    constructor(disputeId: string) {
        super({ path: `/v1/customer/disputes/${disputeId}` });
    }
}
