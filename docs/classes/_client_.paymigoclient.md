[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["Client"](../modules/_client_.md) › [PaymigoClient](_client_.paymigoclient.md)

# Class: PaymigoClient

## Hierarchy

-   **PaymigoClient**

## Index

### Constructors

-   [constructor](_client_.paymigoclient.md#constructor)

### Properties

-   [\_client](_client_.paymigoclient.md#private-_client)
-   [disputes](_client_.paymigoclient.md#disputes)
-   [mode](_client_.paymigoclient.md#mode)
-   [orders](_client_.paymigoclient.md#orders)
-   [payments](_client_.paymigoclient.md#payments)
-   [reporting](_client_.paymigoclient.md#reporting)

## Constructors

### constructor

\+ **new PaymigoClient**(`options`: [ClientOptions](../modules/_types_client_.md#clientoptions)): _[PaymigoClient](_client_.paymigoclient.md)_

_Defined in [Client.ts:15](https://github.com/ELEVATORmedia/paymigo/blob/eaf52dd/src/Client.ts#L15)_

**Parameters:**

| Name      | Type                                                        |
| --------- | ----------------------------------------------------------- |
| `options` | [ClientOptions](../modules/_types_client_.md#clientoptions) |

**Returns:** _[PaymigoClient](_client_.paymigoclient.md)_

## Properties

### `Private` \_client

• **\_client**: _PayPalHttpClient_

_Defined in [Client.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/eaf52dd/src/Client.ts#L10)_

---

### disputes

• **disputes**: _[DisputesClient](_lib_disputes_disputesclient_.disputesclient.md)_

_Defined in [Client.ts:14](https://github.com/ELEVATORmedia/paymigo/blob/eaf52dd/src/Client.ts#L14)_

---

### mode

• **mode**: _[ClientMode](../modules/_types_client_.md#clientmode)_

_Defined in [Client.ts:9](https://github.com/ELEVATORmedia/paymigo/blob/eaf52dd/src/Client.ts#L9)_

---

### orders

• **orders**: _[OrdersClient](_lib_orders_.ordersclient.md)_

_Defined in [Client.ts:12](https://github.com/ELEVATORmedia/paymigo/blob/eaf52dd/src/Client.ts#L12)_

---

### payments

• **payments**: _[PaymentsClient](_lib_payments_.paymentsclient.md)_

_Defined in [Client.ts:13](https://github.com/ELEVATORmedia/paymigo/blob/eaf52dd/src/Client.ts#L13)_

---

### reporting

• **reporting**: _[ReportingClient](_lib_reporting_.reportingclient.md)_

_Defined in [Client.ts:15](https://github.com/ELEVATORmedia/paymigo/blob/eaf52dd/src/Client.ts#L15)_