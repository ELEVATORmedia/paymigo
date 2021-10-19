[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["src/legacy/Request"](../modules/_src_legacy_request_.md) › [Request](_src_legacy_request_.request.md)

# Class: Request

## Hierarchy

-   **Request**

    ↳ [DisputeGetRequest](_src_legacy_disputes_disputegetrequest_.disputegetrequest.md)

    ↳ [DisputesGetRequest](_src_legacy_disputes_disputesgetrequest_.disputesgetrequest.md)

## Index

### Constructors

-   [constructor](_src_legacy_request_.request.md#constructor)

### Properties

-   [body](_src_legacy_request_.request.md#body)
-   [headers](_src_legacy_request_.request.md#headers)
-   [path](_src_legacy_request_.request.md#path)
-   [verb](_src_legacy_request_.request.md#verb)

## Constructors

### constructor

\+ **new Request**(`__namedParameters`: object): _[Request](_src_legacy_request_.request.md)_

Defined in src/legacy/Request.ts:11

**Parameters:**

▪ **\_\_namedParameters**: _object_

| Name      | Type                                                        | Default        |
| --------- | ----------------------------------------------------------- | -------------- |
| `body`    | any                                                         | null           |
| `headers` | any                                                         | defaultHeaders |
| `path`    | string                                                      | -              |
| `verb`    | [RequestVerb](../modules/_src_types_paypal_.md#requestverb) | "GET"          |

**Returns:** _[Request](_src_legacy_request_.request.md)_

## Properties

### body

• **body**: _any_

Defined in src/legacy/Request.ts:10

---

### headers

• **headers**: _any_

Defined in src/legacy/Request.ts:11

---

### path

• **path**: _string_

Defined in src/legacy/Request.ts:8

---

### verb

• **verb**: _[RequestVerb](../modules/_src_types_paypal_.md#requestverb)_

Defined in src/legacy/Request.ts:9
