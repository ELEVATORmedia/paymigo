const PaymigoClient = require('paymigo').default;

const client = new PaymigoClient({
    mode: 'sandbox',
    clientId: 'CLIENT_ID',
    secretKey: 'SECRET_KEY',
});
