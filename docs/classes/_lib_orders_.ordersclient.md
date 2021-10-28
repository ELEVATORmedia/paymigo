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

-   [authorize](_lib_orders_.ordersclient.md#authorize)
-   [capture](_lib_orders_.ordersclient.md#capture)
-   [create](_lib_orders_.ordersclient.md#create)
-   [getById](_lib_orders_.ordersclient.md#getbyid)
-   [update](_lib_orders_.ordersclient.md#update)
-   [verifyOrderAmount](_lib_orders_.ordersclient.md#verifyorderamount)

## Constructors

### constructor

\+ **new OrdersClient**(`client`: PayPalHttpClient): _[OrdersClient](_lib_orders_.ordersclient.md)_

_Overrides [ResourceClient](_lib_resourceclient_.resourceclient.md).[constructor](_lib_resourceclient_.resourceclient.md#constructor)_

_Defined in [src/lib/orders.ts:6](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/lib/orders.ts#L6)_

**Parameters:**

| Name     | Type             |
| -------- | ---------------- |
| `client` | PayPalHttpClient |

**Returns:** _[OrdersClient](_lib_orders_.ordersclient.md)_

## Properties

### `Protected` \_client

• **\_client**: _PayPalHttpClient_

_Inherited from [ResourceClient](_lib_resourceclient_.resourceclient.md).[\_client](_lib_resourceclient_.resourceclient.md#protected-_client)_

_Defined in [src/lib/ResourceClient.ts:2](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/lib/ResourceClient.ts#L2)_

## Methods

### authorize

▸ **authorize**(`orderId`: string): _Promise‹object›_

_Defined in [src/lib/orders.ts:39](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/lib/orders.ts#L39)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `orderId` | string |

**Returns:** _Promise‹object›_

---

### capture

▸ **capture**(`orderId`: string): _Promise‹any›_

_Defined in [src/lib/orders.ts:56](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/lib/orders.ts#L56)_

uses a unique order ID to capture an authorized order payment

**Parameters:**

| Name      | Type   | Description             |
| --------- | ------ | ----------------------- |
| `orderId` | string | unique order identifier |

**Returns:** _Promise‹any›_

order payment capture result

---

### create

▸ **create**(`input`: [CreateOrderInput](../interfaces/_types_orders_.createorderinput.md)): _Promise‹[Order](../interfaces/_types_orders_.order.md)›_

_Defined in [src/lib/orders.ts:11](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/lib/orders.ts#L11)_

**Parameters:**

| Name    | Type                                                                 |
| ------- | -------------------------------------------------------------------- |
| `input` | [CreateOrderInput](../interfaces/_types_orders_.createorderinput.md) |

**Returns:** _Promise‹[Order](../interfaces/_types_orders_.order.md)›_

---

### getById

▸ **getById**(`orderId`: string): _Promise‹[Order](../interfaces/_types_orders_.order.md)›_

_Defined in [src/lib/orders.ts:93](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/lib/orders.ts#L93)_

Retrieve order instance by its ID

**Parameters:**

| Name      | Type   | Description             |
| --------- | ------ | ----------------------- |
| `orderId` | string | unique order identifier |

**Returns:** _Promise‹[Order](../interfaces/_types_orders_.order.md)›_

order instance

---

### update

▸ **update**(`orderId`: string, `updates`: [PatchOrderInput](../interfaces/_types_orders_.patchorderinput.md)): _Promise‹object›_

_Defined in [src/lib/orders.ts:25](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/lib/orders.ts#L25)_

**Parameters:**

| Name      | Type                                                               |
| --------- | ------------------------------------------------------------------ |
| `orderId` | string                                                             |
| `updates` | [PatchOrderInput](../interfaces/_types_orders_.patchorderinput.md) |

**Returns:** _Promise‹object›_

---

### verifyOrderAmount

▸ **verifyOrderAmount**(`orderId`: string, `expectedAmount`: [Amount](../interfaces/_types_common_.amount.md)): _Promise‹boolean›_

_Defined in [src/lib/orders.ts:74](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/lib/orders.ts#L74)_

Retrieve dispute order by its ID to view order details to validate status and amount charged

**Parameters:**

| Name             | Type                                             | Description                 |
| ---------------- | ------------------------------------------------ | --------------------------- |
| `orderId`        | string                                           | unique order identifier     |
| `expectedAmount` | [Amount](../interfaces/_types_common_.amount.md) | expected transaction amount |

**Returns:** _Promise‹boolean›_

whether the transaction completed successfully
