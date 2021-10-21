[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["src/types/paypal"](_src_types_paypal_.md)

# Module: "src/types/paypal"

## Index

### Type aliases

-   [DisputeOutcome](_src_types_paypal_.md#disputeoutcome)
-   [DisputeOutcomeCode](_src_types_paypal_.md#disputeoutcomecode)
-   [DisputeState](_src_types_paypal_.md#disputestate)
-   [HttpMethod](_src_types_paypal_.md#httpmethod)
-   [RequestOptions](_src_types_paypal_.md#requestoptions)

## Type aliases

### DisputeOutcome

Ƭ **DisputeOutcome**: _object_

_Defined in [src/types/paypal.ts:12](https://github.com/ELEVATORmedia/paymigo/blob/90b1c91/src/types/paypal.ts#L12)_

#### Type declaration:

-   **amount**: _number_

-   **disputeId**: _string_

-   **outcome**: _"won" | "lost"_

---

### DisputeOutcomeCode

Ƭ **DisputeOutcomeCode**: _"RESOLVED_BUYER_FAVOUR" | "RESOLVED_SELLER_FAVOUR" | "RESOLVED_WITH_PAYOUT" | "CANCELED_BY_BUYER" | "ACCEPTED" | "DENIED" | "NONE"_

_Defined in [src/types/paypal.ts:18](https://github.com/ELEVATORmedia/paymigo/blob/90b1c91/src/types/paypal.ts#L18)_

---

### DisputeState

Ƭ **DisputeState**: _"RESOLVED"_

_Defined in [src/types/paypal.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/90b1c91/src/types/paypal.ts#L10)_

---

### HttpMethod

Ƭ **HttpMethod**: _"GET" | "POST"_

_Defined in [src/types/paypal.ts:1](https://github.com/ELEVATORmedia/paymigo/blob/90b1c91/src/types/paypal.ts#L1)_

---

### RequestOptions

Ƭ **RequestOptions**: _object_

_Defined in [src/types/paypal.ts:3](https://github.com/ELEVATORmedia/paymigo/blob/90b1c91/src/types/paypal.ts#L3)_

#### Type declaration:

-   **body**? : _any_

-   **headers**? : _any_

-   **path**: _string_

-   **verb**? : _[HttpMethod](_src_types_paypal_.md#httpmethod)_
