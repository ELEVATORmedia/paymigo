[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["src/lib/disputes/DisputesClient"](../modules/_src_lib_disputes_disputesclient_.md) › [DisputesClient](_src_lib_disputes_disputesclient_.disputesclient.md)

# Class: DisputesClient

## Hierarchy

-   **DisputesClient**

## Index

### Constructors

-   [constructor](_src_lib_disputes_disputesclient_.disputesclient.md#constructor)

### Properties

-   [\_client](_src_lib_disputes_disputesclient_.disputesclient.md#private-_client)

### Methods

-   [getById](_src_lib_disputes_disputesclient_.disputesclient.md#getbyid)
-   [list](_src_lib_disputes_disputesclient_.disputesclient.md#list)

## Constructors

### constructor

\+ **new DisputesClient**(`client`: PayPalHttpClient): _[DisputesClient](_src_lib_disputes_disputesclient_.disputesclient.md)_

_Defined in [src/lib/disputes/DisputesClient.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/a9a7ad7/src/lib/disputes/DisputesClient.ts#L10)_

**Parameters:**

| Name     | Type             |
| -------- | ---------------- |
| `client` | PayPalHttpClient |

**Returns:** _[DisputesClient](_src_lib_disputes_disputesclient_.disputesclient.md)_

## Properties

### `Private` \_client

• **\_client**: _PayPalHttpClient_

_Defined in [src/lib/disputes/DisputesClient.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/a9a7ad7/src/lib/disputes/DisputesClient.ts#L10)_

## Methods

### getById

▸ **getById**(`disputeId`: string): _Promise‹any›_

_Defined in [src/lib/disputes/DisputesClient.ts:21](https://github.com/ELEVATORmedia/paymigo/blob/a9a7ad7/src/lib/disputes/DisputesClient.ts#L21)_

Retrieve dispute instance by its ID

**Parameters:**

| Name        | Type   | Description               |
| ----------- | ------ | ------------------------- |
| `disputeId` | string | unique dispute identifier |

**Returns:** _Promise‹any›_

dispute instance

---

### list

▸ **list**(`options`: [DisputesListOptions](../modules/_src_lib_disputes_disputesclient_.md#disputeslistoptions)): _Promise‹any[]›_

_Defined in [src/lib/disputes/DisputesClient.ts:37](https://github.com/ELEVATORmedia/paymigo/blob/a9a7ad7/src/lib/disputes/DisputesClient.ts#L37)_

Retrieve all relevant disputes based off of provided options

**Parameters:**

| Name      | Type                                                                                       | Description                                    |
| --------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| `options` | [DisputesListOptions](../modules/_src_lib_disputes_disputesclient_.md#disputeslistoptions) | provides `startTime` and `state` of dispute(s) |

**Returns:** _Promise‹any[]›_

array of disputes
