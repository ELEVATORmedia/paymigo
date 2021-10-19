[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["src/lib/orders"](../modules/_src_lib_orders_.md) › [OrdersClient](_src_lib_orders_.ordersclient.md)

# Class: OrdersClient

## Hierarchy

-   **OrdersClient**

## Index

### Constructors

-   [constructor](_src_lib_orders_.ordersclient.md#constructor)

### Properties

-   [\_client](_src_lib_orders_.ordersclient.md#private-_client)

### Methods

-   [capture](_src_lib_orders_.ordersclient.md#capture)
-   [create](_src_lib_orders_.ordersclient.md#create)
-   [getById](_src_lib_orders_.ordersclient.md#getbyid)
-   [verify](_src_lib_orders_.ordersclient.md#verify)

## Constructors

### constructor

\+ **new OrdersClient**(`client`: PayPalHttpClient): _[OrdersClient](_src_lib_orders_.ordersclient.md)_

_Defined in [src/lib/orders.ts:4](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/orders.ts#L4)_

**Parameters:**

| Name     | Type             |
| -------- | ---------------- |
| `client` | PayPalHttpClient |

**Returns:** _[OrdersClient](_src_lib_orders_.ordersclient.md)_

## Properties

### `Private` \_client

• **\_client**: _PayPalHttpClient_

_Defined in [src/lib/orders.ts:4](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/orders.ts#L4)_

## Methods

### capture

▸ **capture**(`orderId`: string): _Promise‹any›_

_Defined in [src/lib/orders.ts:29](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/orders.ts#L29)_

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

_Defined in [src/lib/orders.ts:11](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/orders.ts#L11)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `input` | any  |

**Returns:** _Promise‹any›_

---

### getById

▸ **getById**(`orderId`: string): _Promise‹any›_

_Defined in [src/lib/orders.ts:66](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/orders.ts#L66)_

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

_Defined in [src/lib/orders.ts:48](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/orders.ts#L48)_

Retrieve dispute order by its ID to view order details to validate status and amount charged

**Parameters:**

| Name             | Type   | Description                 |
| ---------------- | ------ | --------------------------- |
| `orderId`        | string | unique order identifier     |
| `expectedAmount` | number | expected transaction amount |

**Returns:** _Promise‹boolean›_

whether the transaction completed successfully
