---
id: 'paymigoclient'
title: 'Class: PaymigoClient'
sidebar_label: 'PaymigoClient'
hide_title: 'true'
---

# Class: PaymigoClient

## Hierarchy

-   **PaymigoClient**

## Index

### Constructors

-   [constructor](paymigoclient.md#constructor)

### Properties

-   [\_baseClient](paymigoclient.md#private-_baseclient)
-   [disputes](paymigoclient.md#disputes)
-   [mode](paymigoclient.md#mode)
-   [orders](paymigoclient.md#orders)
-   [reporting](paymigoclient.md#reporting)

## Constructors

### constructor

\+ **new PaymigoClient**(`options`: [ClientOptions](../globals.md#clientoptions)): _[PaymigoClient](paymigoclient.md)_

_Defined in [Client.ts:14](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/Client.ts#L14)_

**Parameters:**

| Name      | Type                                         |
| --------- | -------------------------------------------- |
| `options` | [ClientOptions](../globals.md#clientoptions) |

**Returns:** _[PaymigoClient](paymigoclient.md)_

## Properties

### `Private` \_baseClient

• **\_baseClient**: _[BasePayPalClient](basepaypalclient.md)_

_Defined in [Client.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/Client.ts#L10)_

---

### disputes

• **disputes**: _[DisputesClient](disputesclient.md)_

_Defined in [Client.ts:13](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/Client.ts#L13)_

---

### mode

• **mode**: _[ClientMode](../globals.md#clientmode)_

_Defined in [Client.ts:9](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/Client.ts#L9)_

---

### orders

• **orders**: _[OrdersClient](ordersclient.md)_

_Defined in [Client.ts:12](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/Client.ts#L12)_

---

### reporting

• **reporting**: _[ReportingClient](reportingclient.md)_

_Defined in [Client.ts:14](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/Client.ts#L14)_
