[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["src/legacy/disputes/DisputesGetRequest"](../modules/_src_legacy_disputes_disputesgetrequest_.md) › [DisputesGetRequest](_src_legacy_disputes_disputesgetrequest_.disputesgetrequest.md)

# Class: DisputesGetRequest

## Hierarchy

-   [Request](_src_legacy_request_.request.md)

    ↳ **DisputesGetRequest**

## Index

### Constructors

-   [constructor](_src_legacy_disputes_disputesgetrequest_.disputesgetrequest.md#constructor)

### Properties

-   [body](_src_legacy_disputes_disputesgetrequest_.disputesgetrequest.md#body)
-   [headers](_src_legacy_disputes_disputesgetrequest_.disputesgetrequest.md#headers)
-   [path](_src_legacy_disputes_disputesgetrequest_.disputesgetrequest.md#path)
-   [verb](_src_legacy_disputes_disputesgetrequest_.disputesgetrequest.md#verb)

## Constructors

### constructor

\+ **new DisputesGetRequest**(`startTime`: Date, `state?`: [DisputeState](../modules/_src_legacy_disputes_disputesgetrequest_.md#disputestate)): _[DisputesGetRequest](_src_legacy_disputes_disputesgetrequest_.disputesgetrequest.md)_

_Overrides [Request](_src_legacy_request_.request.md).[constructor](_src_legacy_request_.request.md#constructor)_

_Defined in [src/legacy/disputes/DisputesGetRequest.ts:12](https://github.com/ELEVATORmedia/paymigo/blob/db26ee3/src/legacy/disputes/DisputesGetRequest.ts#L12)_

**Parameters:**

| Name        | Type                                                                                |
| ----------- | ----------------------------------------------------------------------------------- |
| `startTime` | Date                                                                                |
| `state?`    | [DisputeState](../modules/_src_legacy_disputes_disputesgetrequest_.md#disputestate) |

**Returns:** _[DisputesGetRequest](_src_legacy_disputes_disputesgetrequest_.disputesgetrequest.md)_

## Properties

### body

• **body**: _any_

_Inherited from [Request](_src_legacy_request_.request.md).[body](_src_legacy_request_.request.md#body)_

_Defined in [src/legacy/Request.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/db26ee3/src/legacy/Request.ts#L10)_

---

### headers

• **headers**: _any_

_Inherited from [Request](_src_legacy_request_.request.md).[headers](_src_legacy_request_.request.md#headers)_

_Defined in [src/legacy/Request.ts:11](https://github.com/ELEVATORmedia/paymigo/blob/db26ee3/src/legacy/Request.ts#L11)_

---

### path

• **path**: _string_

_Inherited from [Request](_src_legacy_request_.request.md).[path](_src_legacy_request_.request.md#path)_

_Defined in [src/legacy/Request.ts:8](https://github.com/ELEVATORmedia/paymigo/blob/db26ee3/src/legacy/Request.ts#L8)_

---

### verb

• **verb**: _[RequestVerb](../modules/_src_types_paypal_.md#requestverb)_

_Inherited from [Request](_src_legacy_request_.request.md).[verb](_src_legacy_request_.request.md#verb)_

_Defined in [src/legacy/Request.ts:9](https://github.com/ELEVATORmedia/paymigo/blob/db26ee3/src/legacy/Request.ts#L9)_
