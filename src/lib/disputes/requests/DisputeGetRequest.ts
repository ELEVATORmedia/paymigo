import Request from '../../Request';

export default class DisputeGetRequest extends Request {
    constructor(disputeId: string) {
        super({ path: `/v1/customer/disputes/${disputeId}` });
    }
}
