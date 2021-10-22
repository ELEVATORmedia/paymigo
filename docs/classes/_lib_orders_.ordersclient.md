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

_Defined in [lib/orders.ts:5](https://github.com/ELEVATORmedia/paymigo/blob/eaf52dd/src/lib/orders.ts#L5)_

**Parameters:**

| Name     | Type             |
| -------- | ---------------- |
| `client` | PayPalHttpClient |

**Returns:** _[OrdersClient](_lib_orders_.ordersclient.md)_

## Properties

### `Protected` \_client

• **\_client**: _PayPalHttpClient_

_Inherited from [ResourceClient](_lib_resourceclient_.resourceclient.md).[\_client](_lib_resourceclient_.resourceclient.md#protected-_client)_

_Defined in [lib/ResourceClient.ts:2](https://github.com/ELEVATORmedia/paymigo/blob/eaf52dd/src/lib/ResourceClient.ts#L2)_

## Methods

### capture

▸ **capture**(`orderId`: string): _Promise‹any›_

_Defined in [lib/orders.ts:29](https://github.com/ELEVATORmedia/paymigo/blob/eaf52dd/src/lib/orders.ts#L29)_

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

_Defined in [lib/orders.ts:11](https://github.com/ELEVATORmedia/paymigo/blob/eaf52dd/src/lib/orders.ts#L11)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `input` | any  |

**Returns:** _Promise‹[Order](../interfaces/_types_orders_.order.md)›_

---

### getById

▸ **getById**(`orderId`: string): _Promise‹[Order](../interfaces/_types_orders_.order.md)›_

_Defined in [lib/orders.ts:66](https://github.com/ELEVATORmedia/paymigo/blob/eaf52dd/src/lib/orders.ts#L66)_

Retrieve order instance by its ID

**Parameters:**

| Name      | Type   | Description             |
| --------- | ------ | ----------------------- |
| `orderId` | string | unique order identifier |

**Returns:** _Promise‹[Order](../interfaces/_types_orders_.order.md)›_

order instance

---

### verify

▸ **verify**(`orderId`: string, `expectedAmount`: string): _Promise‹boolean›_

_Defined in [lib/orders.ts:48](https://github.com/ELEVATORmedia/paymigo/blob/eaf52dd/src/lib/orders.ts#L48)_

Retrieve dispute order by its ID to view order details to validate status and amount charged

**Parameters:**

| Name             | Type   | Description                 |
| ---------------- | ------ | --------------------------- |
| `orderId`        | string | unique order identifier     |
| `expectedAmount` | string | expected transaction amount |

**Returns:** _Promise‹boolean›_

whether the transaction completed successfully
