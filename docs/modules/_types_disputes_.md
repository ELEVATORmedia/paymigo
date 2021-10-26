[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["types/disputes"](_types_disputes_.md)

# Module: "types/disputes"

## Index

### Interfaces

-   [Buyer](../interfaces/_types_disputes_.buyer.md)
-   [Dispute](../interfaces/_types_disputes_.dispute.md)
-   [DisputeOutcome](../interfaces/_types_disputes_.disputeoutcome.md)
-   [DisputedTransaction](../interfaces/_types_disputes_.disputedtransaction.md)
-   [Document](../interfaces/_types_disputes_.document.md)
-   [Extensions](../interfaces/_types_disputes_.extensions.md)
-   [MerchandizeDisputeProperties](../interfaces/_types_disputes_.merchandizedisputeproperties.md)
-   [Message](../interfaces/_types_disputes_.message.md)
-   [Offer](../interfaces/_types_disputes_.offer.md)
-   [Seller](../interfaces/_types_disputes_.seller.md)
-   [ServiceDetails](../interfaces/_types_disputes_.servicedetails.md)

### Type aliases

-   [DisputeOutcomeCode](_types_disputes_.md#disputeoutcomecode)
-   [DisputeOutcomeResponse](_types_disputes_.md#disputeoutcomeresponse)
-   [DisputeState](_types_disputes_.md#disputestate)
-   [DisputesListOptions](_types_disputes_.md#disputeslistoptions)

## Type aliases

### DisputeOutcomeCode

Ƭ **DisputeOutcomeCode**: _"RESOLVED_BUYER_FAVOUR" | "RESOLVED_SELLER_FAVOUR" | "RESOLVED_WITH_PAYOUT" | "CANCELED_BY_BUYER" | "ACCEPTED" | "DENIED" | "NONE"_

_Defined in [src/types/disputes.ts:84](https://github.com/ELEVATORmedia/paymigo/blob/ae92c39/src/types/disputes.ts#L84)_

---

### DisputeOutcomeResponse

Ƭ **DisputeOutcomeResponse**: _object_

_Defined in [src/types/disputes.ts:78](https://github.com/ELEVATORmedia/paymigo/blob/ae92c39/src/types/disputes.ts#L78)_

#### Type declaration:

-   **amount**: _number_

-   **disputeId**: _string_

-   **outcome**: _"won" | "lost"_

---

### DisputeState

Ƭ **DisputeState**: _"RESOLVED"_

_Defined in [src/types/disputes.ts:76](https://github.com/ELEVATORmedia/paymigo/blob/ae92c39/src/types/disputes.ts#L76)_

---

### DisputesListOptions

Ƭ **DisputesListOptions**: _object_

_Defined in [src/types/disputes.ts:93](https://github.com/ELEVATORmedia/paymigo/blob/ae92c39/src/types/disputes.ts#L93)_

#### Type declaration:

-   **startTime**: _Date_

-   **state**? : _[DisputeState](_types_disputes_.md#disputestate)_
