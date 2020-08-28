---
id: 'ordersclient'
title: 'Class: OrdersClient'
sidebar_label: 'OrdersClient'
hide_title: 'true'
---

# Class: OrdersClient

## Hierarchy

-   **OrdersClient**

## Index

### Constructors

-   [constructor](ordersclient.md#constructor)

### Properties

-   [\_client](ordersclient.md#private-_client)

### Methods

-   [capture](ordersclient.md#capture)
-   [create](ordersclient.md#create)
-   [getById](ordersclient.md#getbyid)
-   [verify](ordersclient.md#verify)

## Constructors

### constructor

\+ **new OrdersClient**(`client`: [BasePayPalClient](basepaypalclient.md)): _[OrdersClient](ordersclient.md)_

_Defined in [lib/orders.ts:6](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/lib/orders.ts#L6)_

**Parameters:**

| Name     | Type                                    |
| -------- | --------------------------------------- |
| `client` | [BasePayPalClient](basepaypalclient.md) |

**Returns:** _[OrdersClient](ordersclient.md)_

## Properties

### `Private` \_client

• **\_client**: _[BasePayPalClient](basepaypalclient.md)_

_Defined in [lib/orders.ts:6](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/lib/orders.ts#L6)_

## Methods

### capture

▸ **capture**(`orderId`: string): _Promise‹any›_

_Defined in [lib/orders.ts:31](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/lib/orders.ts#L31)_

uses a unique order ID to capture an authorized order payment

**Parameters:**

| Name      | Type   | Description             |
| --------- | ------ | ----------------------- |
| `orderId` | string | unique order identifier |

**Returns:** _Promise‹any›_

order payment capture result

---

### create

▸ **create**(`input`: any): _Promise‹any›_

_Defined in [lib/orders.ts:13](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/lib/orders.ts#L13)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `input` | any  |

**Returns:** _Promise‹any›_

---

### getById

▸ **getById**(`orderId`: string): _Promise‹any›_

_Defined in [lib/orders.ts:68](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/lib/orders.ts#L68)_

Retrieve order instance by its ID

**Parameters:**

| Name      | Type   | Description             |
| --------- | ------ | ----------------------- |
| `orderId` | string | unique order identifier |

**Returns:** _Promise‹any›_

order instance

---

### verify

▸ **verify**(`orderId`: string, `expectedAmount`: number): _Promise‹boolean›_

_Defined in [lib/orders.ts:50](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/lib/orders.ts#L50)_

Retrieve dispute order by its ID to view order details to validate status and amount charged

**Parameters:**

| Name             | Type   | Description                 |
| ---------------- | ------ | --------------------------- |
| `orderId`        | string | unique order identifier     |
| `expectedAmount` | number | expected transaction amount |

**Returns:** _Promise‹boolean›_

whether the transaction completed successfully
