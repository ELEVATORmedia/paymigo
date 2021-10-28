[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["types/payments"](../modules/_types_payments_.md) › [AuthorizationCaptureResponse](_types_payments_.authorizationcaptureresponse.md)

# Interface: AuthorizationCaptureResponse

## Hierarchy

-   [Authorization](_types_payments_.authorization.md)

    ↳ **AuthorizationCaptureResponse**

## Index

### Properties

-   [amount](_types_payments_.authorizationcaptureresponse.md#amount)
-   [create_time](_types_payments_.authorizationcaptureresponse.md#create_time)
-   [disbursement_mode](_types_payments_.authorizationcaptureresponse.md#disbursement_mode)
-   [expiration_time](_types_payments_.authorizationcaptureresponse.md#expiration_time)
-   [final_capture](_types_payments_.authorizationcaptureresponse.md#final_capture)
-   [id](_types_payments_.authorizationcaptureresponse.md#id)
-   [invoice_id](_types_payments_.authorizationcaptureresponse.md#invoice_id)
-   [links](_types_payments_.authorizationcaptureresponse.md#links)
-   [seller_protection](_types_payments_.authorizationcaptureresponse.md#seller_protection)
-   [seller_receivable_breakdown](_types_payments_.authorizationcaptureresponse.md#seller_receivable_breakdown)
-   [status](_types_payments_.authorizationcaptureresponse.md#status)
-   [status_details](_types_payments_.authorizationcaptureresponse.md#optional-status_details)
-   [update_time](_types_payments_.authorizationcaptureresponse.md#update_time)

## Properties

### amount

• **amount**: _[Amount](_types_common_.amount.md)_

_Inherited from [Authorization](_types_payments_.authorization.md).[amount](_types_payments_.authorization.md#amount)_

_Defined in [src/types/payments.ts:7](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/payments.ts#L7)_

---

### create_time

• **create_time**: _Date_

_Inherited from [Authorization](_types_payments_.authorization.md).[create_time](_types_payments_.authorization.md#create_time)_

_Defined in [src/types/payments.ts:11](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/payments.ts#L11)_

---

### disbursement_mode

• **disbursement_mode**: _"INSTANT" | "DELAYED"_

_Defined in [src/types/payments.ts:19](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/payments.ts#L19)_

---

### expiration_time

• **expiration_time**: _Date_

_Inherited from [Authorization](_types_payments_.authorization.md).[expiration_time](_types_payments_.authorization.md#expiration_time)_

_Defined in [src/types/payments.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/payments.ts#L10)_

---

### final_capture

• **final_capture**: _boolean_

_Defined in [src/types/payments.ts:17](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/payments.ts#L17)_

---

### id

• **id**: _string_

_Inherited from [Authorization](_types_payments_.authorization.md).[id](_types_payments_.authorization.md#id)_

_Defined in [src/types/payments.ts:4](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/payments.ts#L4)_

---

### invoice_id

• **invoice_id**: _string_

_Inherited from [Authorization](_types_payments_.authorization.md).[invoice_id](_types_payments_.authorization.md#invoice_id)_

_Defined in [src/types/payments.ts:8](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/payments.ts#L8)_

---

### links

• **links**: _Array‹[Link](_types_common_.link.md)›_

_Inherited from [Authorization](_types_payments_.authorization.md).[links](_types_payments_.authorization.md#links)_

_Defined in [src/types/payments.ts:13](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/payments.ts#L13)_

---

### seller_protection

• **seller_protection**: _[SellerProtection](_types_payments_.sellerprotection.md)_

_Inherited from [Authorization](_types_payments_.authorization.md).[seller_protection](_types_payments_.authorization.md#seller_protection)_

_Defined in [src/types/payments.ts:9](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/payments.ts#L9)_

---

### seller_receivable_breakdown

• **seller_receivable_breakdown**: _[SellerReceivableBreakdown](_types_payments_.sellerreceivablebreakdown.md)_

_Defined in [src/types/payments.ts:18](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/payments.ts#L18)_

---

### status

• **status**: _[AuthorizationStatus](../modules/_types_payments_.md#authorizationstatus)_

_Inherited from [Authorization](_types_payments_.authorization.md).[status](_types_payments_.authorization.md#status)_

_Defined in [src/types/payments.ts:5](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/payments.ts#L5)_

---

### `Optional` status_details

• **status_details**? : _any_

_Inherited from [Authorization](_types_payments_.authorization.md).[status_details](_types_payments_.authorization.md#optional-status_details)_

_Defined in [src/types/payments.ts:6](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/payments.ts#L6)_

---

### update_time

• **update_time**: _Date_

_Inherited from [Authorization](_types_payments_.authorization.md).[update_time](_types_payments_.authorization.md#update_time)_

_Defined in [src/types/payments.ts:12](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/payments.ts#L12)_
