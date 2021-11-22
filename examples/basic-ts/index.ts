import PaymigoClient from '@elevatormedia/paymigo';

const client = new PaymigoClient({
    mode: 'sandbox',
    clientId: 'CLIENT_ID',
    secretKey: 'SECRET_KEY',
});

client.orders.capture('');

client.payments.captureAuthorization('');

client.disputes.getById('123abc');

client.orders.update('123', { op: 'add', path: '' });
