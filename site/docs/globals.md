---
id: 'globals'
title: 'paymigo'
sidebar_label: 'Globals'
hide_title: 'true'
---

# paymigo

## Index

### Namespaces

-   [reporting](modules/reporting.md)

### Classes

-   [BasePayPalClient](classes/basepaypalclient.md)
-   [DisputeGetRequest](classes/disputegetrequest.md)
-   [DisputesClient](classes/disputesclient.md)
-   [DisputesGetRequest](classes/disputesgetrequest.md)
-   [OrdersClient](classes/ordersclient.md)
-   [PayPalRequest](classes/paypalrequest.md)
-   [PaymigoClient](classes/paymigoclient.md)
-   [ReportingClient](classes/reportingclient.md)

### Type aliases

-   [ClientMode](globals.md#clientmode)
-   [ClientOptions](globals.md#clientoptions)
-   [DisputeOutcome](globals.md#disputeoutcome)
-   [DisputeOutcomeCode](globals.md#disputeoutcomecode)
-   [DisputeState](globals.md#disputestate)
-   [DisputesGetRequestParams](globals.md#disputesgetrequestparams)
-   [DisputesListOptions](globals.md#disputeslistoptions)
-   [PayflowCredentials](globals.md#payflowcredentials)
-   [RequestOptions](globals.md#requestoptions)
-   [RequestVerb](globals.md#requestverb)

### Variables

-   [XmlBuilder](globals.md#const-xmlbuilder)
-   [XmlParser](globals.md#const-xmlparser)
-   [formatter](globals.md#const-formatter)
-   [paypal](globals.md#const-paypal)

### Functions

-   [dateToParamString](globals.md#const-datetoparamstring)

### Object literals

-   [defaultHeaders](globals.md#const-defaultheaders)

## Type aliases

### ClientMode

Ƭ **ClientMode**: _"sandbox" | "production"_

_Defined in [types/client.ts:2](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/types/client.ts#L2)_

---

### ClientOptions

Ƭ **ClientOptions**: _object_

_Defined in [types/client.ts:11](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/types/client.ts#L11)_

#### Type declaration:

-   **clientId**: _string_

-   **mode**: _[ClientMode](globals.md#clientmode)_

-   **reporting**? : _[PayflowCredentials](globals.md#payflowcredentials)_

-   **secretKey**: _string_

---

### DisputeOutcome

Ƭ **DisputeOutcome**: _object_

_Defined in [types/paypal.ts:18](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/types/paypal.ts#L18)_

#### Type declaration:

-   **amount**: _number_

-   **disputeId**: _string_

-   **outcome**: _"won" | "lost"_

---

### DisputeOutcomeCode

Ƭ **DisputeOutcomeCode**: _"RESOLVED_BUYER_FAVOUR" | "RESOLVED_SELLER_FAVOUR" | "RESOLVED_WITH_PAYOUT" | "CANCELED_BY_BUYER" | "ACCEPTED" | "DENIED" | "NONE"_

_Defined in [types/paypal.ts:24](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/types/paypal.ts#L24)_

---

### DisputeState

Ƭ **DisputeState**: _"RESOLVED"_

_Defined in [types/paypal.ts:16](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/types/paypal.ts#L16)_

_Defined in [legacy/DisputesGetRequest.ts:5](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/legacy/DisputesGetRequest.ts#L5)_

---

### DisputesGetRequestParams

Ƭ **DisputesGetRequestParams**: _object_

_Defined in [legacy/DisputesGetRequest.ts:7](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/legacy/DisputesGetRequest.ts#L7)_

#### Type declaration:

-   **dispute_state**? : _[DisputeState](globals.md#disputestate)_

-   **start_time**: _string_

---

### DisputesListOptions

Ƭ **DisputesListOptions**: _object_

_Defined in [lib/disputes.ts:5](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/lib/disputes.ts#L5)_

#### Type declaration:

-   **startTime**: _Date_

-   **state**? : _[DisputeState](globals.md#disputestate)_

---

### PayflowCredentials

Ƭ **PayflowCredentials**: _object_

_Defined in [types/client.ts:4](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/types/client.ts#L4)_

#### Type declaration:

-   **partner**: _"Paypal"_

-   **password**: _string_

-   **user**: _string_

-   **vendor**? : _string_

---

### RequestOptions

Ƭ **RequestOptions**: _object_

_Defined in [types/paypal.ts:9](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/types/paypal.ts#L9)_

#### Type declaration:

-   **body**? : _any_

-   **headers**? : _any_

-   **path**: _string_

-   **verb**? : _[RequestVerb](globals.md#requestverb)_

---

### RequestVerb

Ƭ **RequestVerb**: _"GET" | "POST"_

_Defined in [types/paypal.ts:1](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/types/paypal.ts#L1)_

## Variables

### `Const` XmlBuilder

• **XmlBuilder**: _any_ = new xml2js.Builder({
xmldec: { version: '1.0', encoding: 'UTF-8' },
})

_Defined in [lib/reporting.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/lib/reporting.ts#L10)_

---

### `Const` XmlParser

• **XmlParser**: _any_ = new xml2js.Parser({
valueProcessors: [parseNumbers],
})

_Defined in [lib/reporting.ts:6](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/lib/reporting.ts#L6)_

---

### `Const` formatter

• **formatter**: _DateTimeFormat_ = new Intl.DateTimeFormat('en-US', {
year: 'numeric',
month: '2-digit',
day: '2-digit',
hour12: false,
hour: 'numeric',
minute: 'numeric',
second: 'numeric',
})

_Defined in [lib/util.ts:2](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/lib/util.ts#L2)_

---

### `Const` paypal

• **paypal**: _any_ = require('@paypal/checkout-server-sdk')

_Defined in [Client.ts:6](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/Client.ts#L6)_

_Defined in [lib/orders.ts:3](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/lib/orders.ts#L3)_

## Functions

### `Const` dateToParamString

▸ **dateToParamString**(`input`: Date): _string_

_Defined in [lib/util.ts:12](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/lib/util.ts#L12)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `input` | Date |

**Returns:** _string_

## Object literals

### `Const` defaultHeaders

### ▪ **defaultHeaders**: _object_

_Defined in [legacy/PayPalRequest.ts:3](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/legacy/PayPalRequest.ts#L3)_

### Content-Type

• **Content-Type**: _string_ = "application/json"

_Defined in [legacy/PayPalRequest.ts:4](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/legacy/PayPalRequest.ts#L4)_
