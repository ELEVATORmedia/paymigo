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
-   [apiVersion](_lib_payments_.paymentsclient.md#apiversion)

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

_Defined in [src/lib/payments.ts:13](https://github.com/ELEVATORmedia/paymigo/blob/6591146/src/lib/payments.ts#L13)_

**Parameters:**

| Name     | Type             |
| -------- | ---------------- |
| `client` | PayPalHttpClient |

**Returns:** _[PaymentsClient](_lib_payments_.paymentsclient.md)_

## Properties

### `Protected` \_client

• **\_client**: _PayPalHttpClient_

_Inherited from [ResourceClient](_lib_resourceclient_.resourceclient.md).[\_client](_lib_resourceclient_.resourceclient.md#protected-_client)_

_Defined in [src/lib/ResourceClient.ts:2](https://github.com/ELEVATORmedia/paymigo/blob/6591146/src/lib/ResourceClient.ts#L2)_

---

### apiVersion

• **apiVersion**: _string_ = "v2"

_Defined in [src/lib/payments.ts:13](https://github.com/ELEVATORmedia/paymigo/blob/6591146/src/lib/payments.ts#L13)_

## Methods

### captureAuthorization

▸ **captureAuthorization**(`authorizationId`: string, `amount?`: [Amount](../interfaces/_types_common_.amount.md)): _Promise‹[AuthorizationCaptureResponse](../interfaces/_types_payments_.authorizationcaptureresponse.md)›_

_Defined in [src/lib/payments.ts:31](https://github.com/ELEVATORmedia/paymigo/blob/6591146/src/lib/payments.ts#L31)_

**Parameters:**

| Name              | Type                                             |
| ----------------- | ------------------------------------------------ |
| `authorizationId` | string                                           |
| `amount?`         | [Amount](../interfaces/_types_common_.amount.md) |

**Returns:** _Promise‹[AuthorizationCaptureResponse](../interfaces/_types_payments_.authorizationcaptureresponse.md)›_

---

### getAuthorization

▸ **getAuthorization**(`authorizationId`: string): _Promise‹[Authorization](../interfaces/_types_payments_.authorization.md)›_

_Defined in [src/lib/payments.ts:19](https://github.com/ELEVATORmedia/paymigo/blob/6591146/src/lib/payments.ts#L19)_

**Parameters:**

| Name              | Type   |
| ----------------- | ------ |
| `authorizationId` | string |

**Returns:** _Promise‹[Authorization](../interfaces/_types_payments_.authorization.md)›_

---

### getCapture

▸ **getCapture**(`captureId`: string): _Promise‹[Capture](../interfaces/_types_payments_.capture.md)›_

_Defined in [src/lib/payments.ts:81](https://github.com/ELEVATORmedia/paymigo/blob/6591146/src/lib/payments.ts#L81)_

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| `captureId` | string |

**Returns:** _Promise‹[Capture](../interfaces/_types_payments_.capture.md)›_

---

### getRefund

▸ **getRefund**(`refundId`: string): _Promise‹[Refund](../interfaces/_types_payments_.refund.md)›_

_Defined in [src/lib/payments.ts:108](https://github.com/ELEVATORmedia/paymigo/blob/6591146/src/lib/payments.ts#L108)_

**Parameters:**

| Name       | Type   |
| ---------- | ------ |
| `refundId` | string |

**Returns:** _Promise‹[Refund](../interfaces/_types_payments_.refund.md)›_

---

### reauthorizeAuthorization

▸ **reauthorizeAuthorization**(`authorizationId`: string, `amount?`: [Amount](../interfaces/_types_common_.amount.md)): _Promise‹boolean›_

_Defined in [src/lib/payments.ts:51](https://github.com/ELEVATORmedia/paymigo/blob/6591146/src/lib/payments.ts#L51)_

**Parameters:**

| Name              | Type                                             |
| ----------------- | ------------------------------------------------ |
| `authorizationId` | string                                           |
| `amount?`         | [Amount](../interfaces/_types_common_.amount.md) |

**Returns:** _Promise‹boolean›_

---

### refund

▸ **refund**(`captureId`: string, `data?`: [RefundCapturedPaymentBody](../interfaces/_types_payments_.refundcapturedpaymentbody.md)): _Promise‹[Refund](../interfaces/_types_payments_.refund.md)›_

_Defined in [src/lib/payments.ts:93](https://github.com/ELEVATORmedia/paymigo/blob/6591146/src/lib/payments.ts#L93)_

**Parameters:**

| Name        | Type                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------- |
| `captureId` | string                                                                                   |
| `data?`     | [RefundCapturedPaymentBody](../interfaces/_types_payments_.refundcapturedpaymentbody.md) |

**Returns:** _Promise‹[Refund](../interfaces/_types_payments_.refund.md)›_

---

### voidAuthorization

▸ **voidAuthorization**(`authorizationId`: string): _Promise‹boolean›_

_Defined in [src/lib/payments.ts:69](https://github.com/ELEVATORmedia/paymigo/blob/6591146/src/lib/payments.ts#L69)_

**Parameters:**

| Name              | Type   |
| ----------------- | ------ |
| `authorizationId` | string |

**Returns:** _Promise‹boolean›_
