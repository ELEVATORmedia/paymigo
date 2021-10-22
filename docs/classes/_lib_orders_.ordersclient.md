[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["lib/orders"](../modules/_lib_orders_.md) › [OrdersClient](_lib_orders_.ordersclient.md)

# Class: OrdersClient

## Hierarchy

-   [ResourceClient](_lib_resourceclient_.resourceclient.md)

    ↳ **OrdersClient**

## Index

### Constructors

-   [constructor](_lib_orders_.ordersclient.md#constructor)

### Properties

-   [\_client](_lib_orders_.ordersclient.md#protected-_client)

### Methods

-   [capture](_lib_orders_.ordersclient.md#capture)
-   [create](_lib_orders_.ordersclient.md#create)
-   [getById](_lib_orders_.ordersclient.md#getbyid)
-   [verify](_lib_orders_.ordersclient.md#verify)

## Constructors

### constructor

\+ **new OrdersClient**(`client`: PayPalHttpClient): _[OrdersClient](_lib_orders_.ordersclient.md)_

_Overrides [ResourceClient](_lib_resourceclient_.resourceclient.md).[constructor](_lib_resourceclient_.resourceclient.md#constructor)_

_Defined in [lib/orders.ts:4](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/orders.ts#L4)_

**Parameters:**

| Name     | Type             |
| -------- | ---------------- |
| `client` | PayPalHttpClient |

**Returns:** _[OrdersClient](_lib_orders_.ordersclient.md)_

## Properties

### `Protected` \_client

• **\_client**: _PayPalHttpClient_

_Inherited from [ResourceClient](_lib_resourceclient_.resourceclient.md).[\_client](_lib_resourceclient_.resourceclient.md#protected-_client)_

_Defined in [lib/ResourceClient.ts:2](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/ResourceClient.ts#L2)_

## Methods

### capture

▸ **capture**(`orderId`: string): _Promise‹any›_

_Defined in [lib/orders.ts:28](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/orders.ts#L28)_

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

_Defined in [lib/orders.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/orders.ts#L10)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `input` | any  |

**Returns:** _Promise‹any›_

---

### getById

▸ **getById**(`orderId`: string): _Promise‹any›_

_Defined in [lib/orders.ts:65](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/orders.ts#L65)_

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

_Defined in [lib/orders.ts:47](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/orders.ts#L47)_

Retrieve dispute order by its ID to view order details to validate status and amount charged

**Parameters:**

| Name             | Type   | Description                 |
| ---------------- | ------ | --------------------------- |
| `orderId`        | string | unique order identifier     |
| `expectedAmount` | number | expected transaction amount |

**Returns:** _Promise‹boolean›_

whether the transaction completed successfully
