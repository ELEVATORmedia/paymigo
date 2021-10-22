[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["lib/payments"](../modules/_lib_payments_.md) › [PaymentsClient](_lib_payments_.paymentsclient.md)

# Class: PaymentsClient

## Hierarchy

-   [ResourceClient](_lib_resourceclient_.resourceclient.md)

    ↳ **PaymentsClient**

## Index

### Constructors

-   [constructor](_lib_payments_.paymentsclient.md#constructor)

### Properties

-   [\_client](_lib_payments_.paymentsclient.md#protected-_client)

### Methods

-   [captureAuthorization](_lib_payments_.paymentsclient.md#captureauthorization)
-   [getAuthorization](_lib_payments_.paymentsclient.md#getauthorization)
-   [getCapture](_lib_payments_.paymentsclient.md#getcapture)
-   [reauthorizeAuthorization](_lib_payments_.paymentsclient.md#reauthorizeauthorization)
-   [refund](_lib_payments_.paymentsclient.md#refund)
-   [voidAuthorization](_lib_payments_.paymentsclient.md#voidauthorization)

## Constructors

### constructor

\+ **new PaymentsClient**(`client`: PayPalHttpClient): _[PaymentsClient](_lib_payments_.paymentsclient.md)_

_Overrides [ResourceClient](_lib_resourceclient_.resourceclient.md).[constructor](_lib_resourceclient_.resourceclient.md#constructor)_

_Defined in [lib/payments.ts:3](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/payments.ts#L3)_

**Parameters:**

| Name     | Type             |
| -------- | ---------------- |
| `client` | PayPalHttpClient |

**Returns:** _[PaymentsClient](_lib_payments_.paymentsclient.md)_

## Properties

### `Protected` \_client

• **\_client**: _PayPalHttpClient_

_Inherited from [ResourceClient](_lib_resourceclient_.resourceclient.md).[\_client](_lib_resourceclient_.resourceclient.md#protected-_client)_

_Defined in [lib/ResourceClient.ts:2](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/ResourceClient.ts#L2)_

## Methods

### captureAuthorization

▸ **captureAuthorization**(`authorizationId`: string): _Promise‹void›_

_Defined in [lib/payments.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/payments.ts#L10)_

**Parameters:**

| Name              | Type   |
| ----------------- | ------ |
| `authorizationId` | string |

**Returns:** _Promise‹void›_

---

### getAuthorization

▸ **getAuthorization**(`authorizationId`: string): _Promise‹void›_

_Defined in [lib/payments.ts:8](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/payments.ts#L8)_

**Parameters:**

| Name              | Type   |
| ----------------- | ------ |
| `authorizationId` | string |

**Returns:** _Promise‹void›_

---

### getCapture

▸ **getCapture**(`captureId`: string): _Promise‹void›_

_Defined in [lib/payments.ts:16](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/payments.ts#L16)_

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| `captureId` | string |

**Returns:** _Promise‹void›_

---

### reauthorizeAuthorization

▸ **reauthorizeAuthorization**(`authorizationId`: string): _Promise‹void›_

_Defined in [lib/payments.ts:12](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/payments.ts#L12)_

**Parameters:**

| Name              | Type   |
| ----------------- | ------ |
| `authorizationId` | string |

**Returns:** _Promise‹void›_

---

### refund

▸ **refund**(`captureId`: string): _Promise‹void›_

_Defined in [lib/payments.ts:18](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/payments.ts#L18)_

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| `captureId` | string |

**Returns:** _Promise‹void›_

---

### voidAuthorization

▸ **voidAuthorization**(`authorizationId`: string): _Promise‹void›_

_Defined in [lib/payments.ts:14](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/payments.ts#L14)_

**Parameters:**

| Name              | Type   |
| ----------------- | ------ |
| `authorizationId` | string |

**Returns:** _Promise‹void›_
