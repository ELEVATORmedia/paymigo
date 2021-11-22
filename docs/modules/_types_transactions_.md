[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["types/transactions"](_types_transactions_.md)

# Module: "types/transactions"

## Index

### Type aliases

-   [TransactionEventCode](_types_transactions_.md#transactioneventcode)
-   [TransactionsGetRequestParams](_types_transactions_.md#transactionsgetrequestparams)

## Type aliases

### TransactionEventCode

Ƭ **TransactionEventCode**: _"T1106" | "T1107"_

_Defined in [src/types/transactions.ts:1](https://github.com/ELEVATORmedia/paymigo/blob/3f5d74d/src/types/transactions.ts#L1)_

---

### TransactionsGetRequestParams

Ƭ **TransactionsGetRequestParams**: _object_

_Defined in [src/types/transactions.ts:3](https://github.com/ELEVATORmedia/paymigo/blob/3f5d74d/src/types/transactions.ts#L3)_

#### Type declaration:

-   **end_date**: _string_

-   **start_date**: _string_

-   **transaction_id**? : _string_

-   **transaction_status**? : _"D" | "F" | "P" | "S" | "V"_

-   **transaction_type**? : _[TransactionEventCode](_types_transactions_.md#transactioneventcode)_
