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
-   [getRefund](_lib_payments_.paymentsclient.md#getrefund)
-   [reauthorizeAuthorization](_lib_payments_.paymentsclient.md#reauthorizeauthorization)
-   [refund](_lib_payments_.paymentsclient.md#refund)
-   [voidAuthorization](_lib_payments_.paymentsclient.md#voidauthorization)

## Constructors

### constructor

\+ **new PaymentsClient**(`client`: PayPalHttpClient): _[PaymentsClient](_lib_payments_.paymentsclient.md)_

_Overrides [ResourceClient](_lib_resourceclient_.resourceclient.md).[constructor](_lib_resourceclient_.resourceclient.md#constructor)_

_Defined in [src/lib/payments.ts:12](https://github.com/ELEVATORmedia/paymigo/blob/0815c8d/src/lib/payments.ts#L12)_

**Parameters:**

| Name     | Type             |
| -------- | ---------------- |
| `client` | PayPalHttpClient |

**Returns:** _[PaymentsClient](_lib_payments_.paymentsclient.md)_

## Properties

### `Protected` \_client

• **\_client**: _PayPalHttpClient_

_Inherited from [ResourceClient](_lib_resourceclient_.resourceclient.md).[\_client](_lib_resourceclient_.resourceclient.md#protected-_client)_

_Defined in [src/lib/ResourceClient.ts:2](https://github.com/ELEVATORmedia/paymigo/blob/0815c8d/src/lib/ResourceClient.ts#L2)_

## Methods

### captureAuthorization

▸ **captureAuthorization**(`authorizationId`: string, `amount?`: [Amount](../interfaces/_types_common_.amount.md)): _Promise‹[AuthorizationCaptureResponse](../interfaces/_types_payments_.authorizationcaptureresponse.md)›_

_Defined in [src/lib/payments.ts:29](https://github.com/ELEVATORmedia/paymigo/blob/0815c8d/src/lib/payments.ts#L29)_

**Parameters:**

| Name              | Type                                             |
| ----------------- | ------------------------------------------------ |
| `authorizationId` | string                                           |
| `amount?`         | [Amount](../interfaces/_types_common_.amount.md) |

**Returns:** _Promise‹[AuthorizationCaptureResponse](../interfaces/_types_payments_.authorizationcaptureresponse.md)›_

---

### getAuthorization

▸ **getAuthorization**(`authorizationId`: string): _Promise‹[Authorization](../interfaces/_types_payments_.authorization.md)›_

_Defined in [src/lib/payments.ts:17](https://github.com/ELEVATORmedia/paymigo/blob/0815c8d/src/lib/payments.ts#L17)_

**Parameters:**

| Name              | Type   |
| ----------------- | ------ |
| `authorizationId` | string |

**Returns:** _Promise‹[Authorization](../interfaces/_types_payments_.authorization.md)›_

---

### getCapture

▸ **getCapture**(`captureId`: string): _Promise‹[Capture](../interfaces/_types_payments_.capture.md)›_

_Defined in [src/lib/payments.ts:79](https://github.com/ELEVATORmedia/paymigo/blob/0815c8d/src/lib/payments.ts#L79)_

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| `captureId` | string |

**Returns:** _Promise‹[Capture](../interfaces/_types_payments_.capture.md)›_

---

### getRefund

▸ **getRefund**(`refundId`: string): _Promise‹[Refund](../interfaces/_types_payments_.refund.md)›_

_Defined in [src/lib/payments.ts:106](https://github.com/ELEVATORmedia/paymigo/blob/0815c8d/src/lib/payments.ts#L106)_

**Parameters:**

| Name       | Type   |
| ---------- | ------ |
| `refundId` | string |

**Returns:** _Promise‹[Refund](../interfaces/_types_payments_.refund.md)›_

---

### reauthorizeAuthorization

▸ **reauthorizeAuthorization**(`authorizationId`: string, `amount?`: [Amount](../interfaces/_types_common_.amount.md)): _Promise‹boolean›_

_Defined in [src/lib/payments.ts:49](https://github.com/ELEVATORmedia/paymigo/blob/0815c8d/src/lib/payments.ts#L49)_

**Parameters:**

| Name              | Type                                             |
| ----------------- | ------------------------------------------------ |
| `authorizationId` | string                                           |
| `amount?`         | [Amount](../interfaces/_types_common_.amount.md) |

**Returns:** _Promise‹boolean›_

---

### refund

▸ **refund**(`captureId`: string, `data?`: [RefundCapturedPaymentBody](../interfaces/_types_payments_.refundcapturedpaymentbody.md)): _Promise‹[Refund](../interfaces/_types_payments_.refund.md)›_

_Defined in [src/lib/payments.ts:91](https://github.com/ELEVATORmedia/paymigo/blob/0815c8d/src/lib/payments.ts#L91)_

**Parameters:**

| Name        | Type                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------- |
| `captureId` | string                                                                                   |
| `data?`     | [RefundCapturedPaymentBody](../interfaces/_types_payments_.refundcapturedpaymentbody.md) |

**Returns:** _Promise‹[Refund](../interfaces/_types_payments_.refund.md)›_

---

### voidAuthorization

▸ **voidAuthorization**(`authorizationId`: string): _Promise‹boolean›_

_Defined in [src/lib/payments.ts:67](https://github.com/ELEVATORmedia/paymigo/blob/0815c8d/src/lib/payments.ts#L67)_

**Parameters:**

| Name              | Type   |
| ----------------- | ------ |
| `authorizationId` | string |

**Returns:** _Promise‹boolean›_
