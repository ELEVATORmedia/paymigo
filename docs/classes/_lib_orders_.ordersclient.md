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
-   [verifyOrderAmount](_lib_orders_.ordersclient.md#verifyorderamount)

## Constructors

### constructor

\+ **new OrdersClient**(`client`: PayPalHttpClient): _[OrdersClient](_lib_orders_.ordersclient.md)_

_Overrides [ResourceClient](_lib_resourceclient_.resourceclient.md).[constructor](_lib_resourceclient_.resourceclient.md#constructor)_

_Defined in [lib/orders.ts:5](https://github.com/ELEVATORmedia/paymigo/blob/396f1ec/src/lib/orders.ts#L5)_

**Parameters:**

| Name     | Type             |
| -------- | ---------------- |
| `client` | PayPalHttpClient |

**Returns:** _[OrdersClient](_lib_orders_.ordersclient.md)_

## Properties

### `Protected` \_client

• **\_client**: _PayPalHttpClient_

_Inherited from [ResourceClient](_lib_resourceclient_.resourceclient.md).[\_client](_lib_resourceclient_.resourceclient.md#protected-_client)_

_Defined in [lib/ResourceClient.ts:2](https://github.com/ELEVATORmedia/paymigo/blob/396f1ec/src/lib/ResourceClient.ts#L2)_

## Methods

### capture

▸ **capture**(`orderId`: string): _Promise‹any›_

_Defined in [lib/orders.ts:24](https://github.com/ELEVATORmedia/paymigo/blob/396f1ec/src/lib/orders.ts#L24)_

uses a unique order ID to capture an authorized order payment

**Parameters:**

| Name      | Type   | Description             |
| --------- | ------ | ----------------------- |
| `orderId` | string | unique order identifier |

**Returns:** _Promise‹any›_

order payment capture result

---

### create

▸ **create**(`input`: any): _Promise‹[Order](../interfaces/_types_orders_.order.md)›_

_Defined in [lib/orders.ts:11](https://github.com/ELEVATORmedia/paymigo/blob/396f1ec/src/lib/orders.ts#L11)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `input` | any  |

**Returns:** _Promise‹[Order](../interfaces/_types_orders_.order.md)›_

---

### getById

▸ **getById**(`orderId`: string): _Promise‹[Order](../interfaces/_types_orders_.order.md)›_

_Defined in [lib/orders.ts:57](https://github.com/ELEVATORmedia/paymigo/blob/396f1ec/src/lib/orders.ts#L57)_

Retrieve order instance by its ID

**Parameters:**

| Name      | Type   | Description             |
| --------- | ------ | ----------------------- |
| `orderId` | string | unique order identifier |

**Returns:** _Promise‹[Order](../interfaces/_types_orders_.order.md)›_

order instance

---

### verifyOrderAmount

▸ **verifyOrderAmount**(`orderId`: string, `expectedAmount`: [Amount](../interfaces/_types_common_.amount.md)): _Promise‹boolean›_

_Defined in [lib/orders.ts:38](https://github.com/ELEVATORmedia/paymigo/blob/396f1ec/src/lib/orders.ts#L38)_

Retrieve dispute order by its ID to view order details to validate status and amount charged

**Parameters:**

| Name             | Type                                             | Description                 |
| ---------------- | ------------------------------------------------ | --------------------------- |
| `orderId`        | string                                           | unique order identifier     |
| `expectedAmount` | [Amount](../interfaces/_types_common_.amount.md) | expected transaction amount |

**Returns:** _Promise‹boolean›_

whether the transaction completed successfully
