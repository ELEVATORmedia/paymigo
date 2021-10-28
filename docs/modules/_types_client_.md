[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["types/client"](_types_client_.md)

# Module: "types/client"

## Index

### Type aliases

-   [ClientMode](_types_client_.md#clientmode)
-   [ClientOptions](_types_client_.md#clientoptions)
-   [PayflowCredentials](_types_client_.md#payflowcredentials)

## Type aliases

### ClientMode

Ƭ **ClientMode**: _"sandbox" | "production"_

_Defined in [src/types/client.ts:2](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/client.ts#L2)_

---

### ClientOptions

Ƭ **ClientOptions**: _object_

_Defined in [src/types/client.ts:11](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/client.ts#L11)_

#### Type declaration:

-   **clientId**: _string_

-   **mode**: _[ClientMode](_types_client_.md#clientmode)_

-   **reporting**? : _[PayflowCredentials](_types_client_.md#payflowcredentials)_

-   **secretKey**: _string_

---

### PayflowCredentials

Ƭ **PayflowCredentials**: _object_

_Defined in [src/types/client.ts:4](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/client.ts#L4)_

#### Type declaration:

-   **partner**: _"Paypal"_

-   **password**: _string_

-   **user**: _string_

-   **vendor**? : _string_
