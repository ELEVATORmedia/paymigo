import PaymigoClient from 'paymigo';

const client = new PaymigoClient({
    mode: 'sandbox',
    clientId: 'CLIENT_ID',
    secretKey: 'SECRET_KEY',
});
