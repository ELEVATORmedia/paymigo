[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["src/types/paypal"](_src_types_paypal_.md)

# Module: "src/types/paypal"

## Index

### Type aliases

-   [DisputeOutcome](_src_types_paypal_.md#disputeoutcome)
-   [DisputeOutcomeCode](_src_types_paypal_.md#disputeoutcomecode)
-   [DisputeState](_src_types_paypal_.md#disputestate)
-   [RequestOptions](_src_types_paypal_.md#requestoptions)
-   [RequestVerb](_src_types_paypal_.md#requestverb)

## Type aliases

### DisputeOutcome

Ƭ **DisputeOutcome**: _object_

_Defined in [src/types/paypal.ts:14](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/types/paypal.ts#L14)_

#### Type declaration:

-   **amount**: _number_

-   **disputeId**: _string_

-   **outcome**: _"won" | "lost"_

---

### DisputeOutcomeCode

Ƭ **DisputeOutcomeCode**: _"RESOLVED_BUYER_FAVOUR" | "RESOLVED_SELLER_FAVOUR" | "RESOLVED_WITH_PAYOUT" | "CANCELED_BY_BUYER" | "ACCEPTED" | "DENIED" | "NONE"_

_Defined in [src/types/paypal.ts:20](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/types/paypal.ts#L20)_

---

### DisputeState

Ƭ **DisputeState**: _"RESOLVED"_

_Defined in [src/types/paypal.ts:12](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/types/paypal.ts#L12)_

---

### RequestOptions

Ƭ **RequestOptions**: _object_

_Defined in [src/types/paypal.ts:5](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/types/paypal.ts#L5)_

#### Type declaration:

-   **body**? : _any_

-   **headers**? : _any_

-   **path**: _string_

-   **verb**? : _[RequestVerb](_src_types_paypal_.md#requestverb)_

---

### RequestVerb

Ƭ **RequestVerb**: _"GET" | "POST"_

_Defined in [src/types/paypal.ts:3](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/types/paypal.ts#L3)_
