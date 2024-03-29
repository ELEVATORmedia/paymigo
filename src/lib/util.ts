const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
});

export const dateToParamString = (input: Date) => {
    const { month, day, year, hour, minute, second } = formatter
        .formatToParts(input)
        .reduce((prev, { type, value }) => {
            if (type !== 'literal') prev[type] = value;
            return prev;
        }, {} as { [key: string]: string });

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

// ref: https://developer.paypal.com/docs/api/payments/v2/#errors
export enum ErrorCodes {
    AUTH_CAPTURE_CURRENCY_MISMATCH = 'AUTH_CAPTURE_CURRENCY_MISMATCH',
    AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE',
    AUTHORIZATION_ALREADY_CAPTURED = 'AUTHORIZATION_ALREADY_CAPTURED',
    AUTHORIZATION_DENIED = 'AUTHORIZATION_DENIED',
    AUTHORIZATION_EXPIRED = 'AUTHORIZATION_EXPIRED',
    AUTHORIZATION_VOIDED = 'AUTHORIZATION_VOIDED',
    CANNOT_BE_ZERO_OR_NEGATIVE = 'CANNOT_BE_ZERO_OR_NEGATIVE',
    CANNOT_BE_VOIDED = 'CANNOT_BE_VOIDED',
    REFUND_NOT_PERMITTED_DUE_TO_CHARGEBACK = 'REFUND_NOT_PERMITTED_DUE_TO_CHARGEBACK',
    CAPTURE_DISPUTED_PARTIAL_REFUND_NOT_ALLOWED = 'CAPTURE_DISPUTED_PARTIAL_REFUND_NOT_ALLOWED',
    CAPTURE_FULLY_REFUNDED = 'CAPTURE_FULLY_REFUNDED',
    DECIMAL_PRECISION = 'DECIMAL_PRECISION',
    DECIMALS_NOT_SUPPORTED = 'DECIMALS_NOT_SUPPORTED',
    DUPLICATE_INVOICE_ID = 'DUPLICATE_INVOICE_ID',
    INVALID_ACCOUNT_STATUS = 'INVALID_ACCOUNT_STATUS',
    INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
    INVALID_CURRENCY_CODE = 'INVALID_CURRENCY_CODE',
    INVALID_INVOICE_ID = 'INVALID_INVOICE_ID',
    INVALID_PARAMETER_SYNTAX = 'INVALID_PARAMETER_SYNTAX',
    INVALID_PARAMETER_VALUE = 'INVALID_PARAMETER_VALUE',
    INVALID_PAYEE_ACCOUNT = 'INVALID_PAYEE_ACCOUNT',
    INVALID_PLATFORM_FEES_AMOUNT = 'INVALID_PLATFORM_FEES_AMOUNT',
    INVALID_RESOURCE_ID = 'INVALID_RESOURCE_ID',
    INVALID_STRING_LENGTH = 'INVALID_STRING_LENGTH',
    INVALID_STRING_MAX_LENGTH = 'INVALID_STRING_MAX_LENGTH',
    MAX_CAPTURE_AMOUNT_EXCEEDED = 'MAX_CAPTURE_AMOUNT_EXCEEDED',
    MAX_CAPTURE_COUNT_EXCEEDED = 'MAX_CAPTURE_COUNT_EXCEEDED',
    MAX_NUMBER_OF_REFUNDS_EXCEEDED = 'MAX_NUMBER_OF_REFUNDS_EXCEEDED',
    MISSING_REQUIRED_PARAMETER = 'MISSING_REQUIRED_PARAMETER',
    MULTIPLE_AUTHORIZATIONS_FOUND = 'MULTIPLE_AUTHORIZATIONS_FOUND',
    NOT_AUTHORIZED = 'NOT_AUTHORIZED',
    PARTIAL_REFUND_NOT_ALLOWED = 'PARTIAL_REFUND_NOT_ALLOWED',
    PAYEE_ACCOUNT_LOCKED_OR_CLOSED = 'PAYEE_ACCOUNT_LOCKED_OR_CLOSED',
    PAYEE_ACCOUNT_RESTRICTED = 'PAYEE_ACCOUNT_RESTRICTED',
    PAYER_ACCOUNT_LOCKED_OR_CLOSED = 'PAYER_ACCOUNT_LOCKED_OR_CLOSED',
    PAYER_CANNOT_PAY = 'PAYER_CANNOT_PAY',
    PENDING_CAPTURE = 'PENDING_CAPTURE',
    PERMISSION_DENIED = 'PERMISSION_DENIED',
    PERMISSION_NOT_GRANTED = 'PERMISSION_NOT_GRANTED',
    PREVIOUSLY_CAPTURED = 'PREVIOUSLY_CAPTURED',
    PREVIOUSLY_VOIDED = 'PREVIOUSLY_VOIDED',
    REFUND_AMOUNT_EXCEEDED = 'REFUND_AMOUNT_EXCEEDED',
    REFUND_AMOUNT_TOO_LOW = 'REFUND_AMOUNT_TOO_LOW',
    REFUND_CAPTURE_CURRENCY_MISMATCH = 'REFUND_CAPTURE_CURRENCY_MISMATCH',
    REFUND_FAILED_INSUFFICIENT_FUNDS = 'REFUND_FAILED_INSUFFICIENT_FUNDS',
    REFUND_NOT_ALLOWED = 'REFUND_NOT_ALLOWED',
    REFUND_TIME_LIMIT_EXCEEDED = 'REFUND_TIME_LIMIT_EXCEEDED',
    TRANSACTION_REFUSED = 'TRANSACTION_REFUSED',
    REFUND_NOT_SUPPORTED_FOR_PAYMENT_SOURCE = 'REFUND_NOT_SUPPORTED_FOR_PAYMENT_SOURCE',
    REFUND_TIME_EXCEEDED_FOR_PAYMENT_SOURCE = 'REFUND_TIME_EXCEEDED_FOR_PAYMENT_SOURCE',
    REFUND_FAILED_BY_PAYMENT_SOURCE = 'REFUND_FAILED_BY_PAYMENT_SOURCE',
}
