declare module '@paypal/checkout-server-sdk' {
    interface CoreSdk {
        AccessToken: typeof AccessToken;
        AccessTokenRequest: typeof AccessTokenRequest;
        PayPalEnvironment: typeof PayPalEnvironment;
        LiveEnvironment: typeof LiveEnvironment;
        PayPalHttpClient: typeof PayPalHttpClient;
        RefreshTokenRequest: typeof RefreshTokenRequest;
        TokenCache: typeof TokenCache;
        SandboxEnvironment: typeof SandboxEnvironment;
    }

    export const core: CoreSdk;

    interface OrdersSdk {
        OrdersAuthorizeRequest: typeof OrdersAuthorizeRequest;
        OrdersCaptureRequest: typeof OrdersCaptureRequest;
        OrdersCreateRequest: typeof OrdersCreateRequest;
        OrdersGetRequest: typeof OrdersGetRequest;
        OrdersPatchRequest: typeof OrdersPatchRequest;
        OrdersValidateRequest: typeof OrdersValidateRequest;
    }

    export const orders: OrdersSdk;

    interface PaymentsSdk {
        AuthorizationsCaptureRequest: typeof AuthorizationsCaptureRequest;
        AuthorizationsGetRequest: typeof AuthorizationsGetRequest;
        AuthorizationsReauthorizeRequest: typeof AuthorizationsReauthorizeRequest;
        AuthorizationsVoidRequest: typeof AuthorizationsVoidRequest;
        CapturesGetRequest: typeof CapturesGetRequest;
        CapturesRefundRequest: typeof CapturesRefundRequest;
        RefundsGetRequest: typeof RefundsGetRequest;
    }

    export const payments: PaymentsSdk;
}
