import PayPalClient from "paymigo";

const client = new PayPalClient({
    mode: 'sandbox',
    clientId: 'CLIENT_ID',
    secretKey: 'SECRET_KEY',
});
