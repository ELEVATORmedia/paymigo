[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["src/lib/disputes"](../modules/_src_lib_disputes_.md) › [DisputesClient](_src_lib_disputes_.disputesclient.md)

# Class: DisputesClient

## Hierarchy

-   **DisputesClient**

## Index

### Constructors

-   [constructor](_src_lib_disputes_.disputesclient.md#constructor)

### Properties

-   [\_client](_src_lib_disputes_.disputesclient.md#private-_client)

### Methods

-   [getById](_src_lib_disputes_.disputesclient.md#getbyid)
-   [list](_src_lib_disputes_.disputesclient.md#list)

## Constructors

### constructor

\+ **new DisputesClient**(`client`: PayPalHttpClient): _[DisputesClient](_src_lib_disputes_.disputesclient.md)_

_Defined in [src/lib/disputes.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/disputes.ts#L10)_

**Parameters:**

| Name     | Type             |
| -------- | ---------------- |
| `client` | PayPalHttpClient |

**Returns:** _[DisputesClient](_src_lib_disputes_.disputesclient.md)_

## Properties

### `Private` \_client

• **\_client**: _PayPalHttpClient_

_Defined in [src/lib/disputes.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/disputes.ts#L10)_

## Methods

### getById

▸ **getById**(`disputeId`: string): _Promise‹any›_

_Defined in [src/lib/disputes.ts:21](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/disputes.ts#L21)_

Retrieve dispute instance by its ID

**Parameters:**

| Name        | Type   | Description               |
| ----------- | ------ | ------------------------- |
| `disputeId` | string | unique dispute identifier |

**Returns:** _Promise‹any›_

dispute instance

---

### list

▸ **list**(`options`: [DisputesListOptions](../modules/_src_lib_disputes_.md#disputeslistoptions)): _Promise‹any[]›_

_Defined in [src/lib/disputes.ts:37](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/disputes.ts#L37)_

Retrieve all relevant disputes based off of provided options

**Parameters:**

| Name      | Type                                                                        | Description                                    |
| --------- | --------------------------------------------------------------------------- | ---------------------------------------------- |
| `options` | [DisputesListOptions](../modules/_src_lib_disputes_.md#disputeslistoptions) | provides `startTime` and `state` of dispute(s) |

**Returns:** _Promise‹any[]›_

array of disputes
