[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["lib/reporting/requests/TransactionsGetRequest"](../modules/_lib_reporting_requests_transactionsgetrequest_.md) › [TransactionsGetRequest](_lib_reporting_requests_transactionsgetrequest_.transactionsgetrequest.md)

# Class: TransactionsGetRequest ‹**B**›

## Type parameters

▪ **B**

## Hierarchy

-   [Request](_lib_request_.request.md)

    ↳ **TransactionsGetRequest**

## Index

### Constructors

-   [constructor](_lib_reporting_requests_transactionsgetrequest_.transactionsgetrequest.md#constructor)

### Properties

-   [body](_lib_reporting_requests_transactionsgetrequest_.transactionsgetrequest.md#body)
-   [headers](_lib_reporting_requests_transactionsgetrequest_.transactionsgetrequest.md#headers)
-   [path](_lib_reporting_requests_transactionsgetrequest_.transactionsgetrequest.md#path)
-   [verb](_lib_reporting_requests_transactionsgetrequest_.transactionsgetrequest.md#verb)

## Constructors

### constructor

\+ **new TransactionsGetRequest**(`startTime`: Date, `endTime`: Date, `type`: [TransactionEventCode](../modules/_types_transactions_.md#transactioneventcode)): _[TransactionsGetRequest](_lib_reporting_requests_transactionsgetrequest_.transactionsgetrequest.md)_

_Overrides [Request](_lib_request_.request.md).[constructor](_lib_request_.request.md#constructor)_

_Defined in [src/lib/reporting/requests/TransactionsGetRequest.ts:8](https://github.com/ELEVATORmedia/paymigo/blob/6591146/src/lib/reporting/requests/TransactionsGetRequest.ts#L8)_

**Parameters:**

| Name        | Type                                                                            |
| ----------- | ------------------------------------------------------------------------------- |
| `startTime` | Date                                                                            |
| `endTime`   | Date                                                                            |
| `type`      | [TransactionEventCode](../modules/_types_transactions_.md#transactioneventcode) |

**Returns:** _[TransactionsGetRequest](_lib_reporting_requests_transactionsgetrequest_.transactionsgetrequest.md)_

## Properties

### body

• **body**: _B_

_Inherited from [Request](_lib_request_.request.md).[body](_lib_request_.request.md#body)_

_Defined in [src/lib/Request.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/6591146/src/lib/Request.ts#L10)_

---

### headers

• **headers**: _any_

_Inherited from [Request](_lib_request_.request.md).[headers](_lib_request_.request.md#headers)_

_Defined in [src/lib/Request.ts:11](https://github.com/ELEVATORmedia/paymigo/blob/6591146/src/lib/Request.ts#L11)_

---

### path

• **path**: _string_

_Inherited from [Request](_lib_request_.request.md).[path](_lib_request_.request.md#path)_

_Defined in [src/lib/Request.ts:8](https://github.com/ELEVATORmedia/paymigo/blob/6591146/src/lib/Request.ts#L8)_

---

### verb

• **verb**: _string_

_Inherited from [Request](_lib_request_.request.md).[verb](_lib_request_.request.md#verb)_

_Defined in [src/lib/Request.ts:9](https://github.com/ELEVATORmedia/paymigo/blob/6591146/src/lib/Request.ts#L9)_
