import Request from 'legacy/Request';

/**
 Creates an order.
 **/
declare class OrdersCreateRequest extends Request {
    payPalPartnerAttributionId(payPalPartnerAttributionId: any): OrdersCreateRequest;
    prefer(prefer: any): OrdersCreateRequest;
    requestBody(order: any): OrdersCreateRequest;
}
