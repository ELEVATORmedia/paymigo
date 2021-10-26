# paymigo

TypeScript wrapper and extension of [PayPal's Node.js Checkout SDK](https://github.com/paypal/Checkout-NodeJS-SDK#readme).

## Purpose

PayPal is one of the premiere ecommerce service providers and Node.js has only been rising in popularity. However, PayPal's [Checkout Node SDK](https://github.com/paypal/Checkout-NodeJS-SDK) lacks types and an easy-to-use API client for a better developer experience. This library serves to expose all existing funtionality of `@paypal/checkout-server-sdk` with an easy to use API, TS-first support with static typing for new clients as well as legacy types, and extend existing functionality to encompass more of PayPal's REST API's potential.

As of this writing, it's core implementation is built around the original client then extends functionality by providing more request options and a client that's easier to implement. In the future, we plan to rebuild to core client, but our primary focus will be providing a simple and cohesive developer experience to making using PayPal's platform easier.

## Getting Started

First, install the library with your preferred package manager:

### npm

```bash
npm install @elevatormedia/paymigo
```

### yarn

```bash
yarn add @elevatormedia/paymigo
```

Configuration requires a valid Client ID and Secret Key recovered from your PayPal developer dashboard. We recommend adding them to your environment variables.

The Paymigo client is then created by pairing those with your environment type:

```ts
import PaymigoClient from '@elevatormedia/paymigo';

const client = new PaymigoClient({
    mode: 'sandbox',
    clientId: '<CLIENT_ID>',
    secretKey: '<SECRET_KEY>',
});
```
