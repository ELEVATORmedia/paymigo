[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["lib/disputes/DisputesClient"](../modules/_lib_disputes_disputesclient_.md) › [DisputesClient](_lib_disputes_disputesclient_.disputesclient.md)

# Class: DisputesClient

## Hierarchy

-   [ResourceClient](_lib_resourceclient_.resourceclient.md)

    ↳ **DisputesClient**

## Index

### Constructors

-   [constructor](_lib_disputes_disputesclient_.disputesclient.md#constructor)

### Properties

-   [\_client](_lib_disputes_disputesclient_.disputesclient.md#protected-_client)

### Methods

-   [getById](_lib_disputes_disputesclient_.disputesclient.md#getbyid)
-   [list](_lib_disputes_disputesclient_.disputesclient.md#list)

## Constructors

### constructor

\+ **new DisputesClient**(`client`: PayPalHttpClient): _[DisputesClient](_lib_disputes_disputesclient_.disputesclient.md)_

_Overrides [ResourceClient](_lib_resourceclient_.resourceclient.md).[constructor](_lib_resourceclient_.resourceclient.md#constructor)_

_Defined in [lib/disputes/DisputesClient.ts:5](https://github.com/ELEVATORmedia/paymigo/blob/56771c5/src/lib/disputes/DisputesClient.ts#L5)_

**Parameters:**

| Name     | Type             |
| -------- | ---------------- |
| `client` | PayPalHttpClient |

**Returns:** _[DisputesClient](_lib_disputes_disputesclient_.disputesclient.md)_

## Properties

### `Protected` \_client

• **\_client**: _PayPalHttpClient_

_Inherited from [ResourceClient](_lib_resourceclient_.resourceclient.md).[\_client](_lib_resourceclient_.resourceclient.md#protected-_client)_

_Defined in [lib/ResourceClient.ts:2](https://github.com/ELEVATORmedia/paymigo/blob/56771c5/src/lib/ResourceClient.ts#L2)_

## Methods

### getById

▸ **getById**(`disputeId`: string): _Promise‹[Dispute](../interfaces/_types_disputes_.dispute.md)›_

_Defined in [lib/disputes/DisputesClient.ts:15](https://github.com/ELEVATORmedia/paymigo/blob/56771c5/src/lib/disputes/DisputesClient.ts#L15)_

Retrieve dispute instance by its ID

**Parameters:**

| Name        | Type   | Description               |
| ----------- | ------ | ------------------------- |
| `disputeId` | string | unique dispute identifier |

**Returns:** _Promise‹[Dispute](../interfaces/_types_disputes_.dispute.md)›_

dispute instance

---

### list

▸ **list**(`options`: [DisputesListOptions](../modules/_types_disputes_.md#disputeslistoptions)): _Promise‹[Dispute](../interfaces/_types_disputes_.dispute.md)[]›_

_Defined in [lib/disputes/DisputesClient.ts:27](https://github.com/ELEVATORmedia/paymigo/blob/56771c5/src/lib/disputes/DisputesClient.ts#L27)_

Retrieve all relevant disputes based off of provided options

**Parameters:**

| Name      | Type                                                                      | Description                                    |
| --------- | ------------------------------------------------------------------------- | ---------------------------------------------- |
| `options` | [DisputesListOptions](../modules/_types_disputes_.md#disputeslistoptions) | provides `startTime` and `state` of dispute(s) |

**Returns:** _Promise‹[Dispute](../interfaces/_types_disputes_.dispute.md)[]›_

array of disputes
