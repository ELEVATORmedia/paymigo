---
id: 'disputesclient'
title: 'Class: DisputesClient'
sidebar_label: 'DisputesClient'
hide_title: 'true'
---

# Class: DisputesClient

## Hierarchy

-   **DisputesClient**

## Index

### Constructors

-   [constructor](disputesclient.md#constructor)

### Properties

-   [\_client](disputesclient.md#private-_client)

### Methods

-   [getById](disputesclient.md#getbyid)
-   [list](disputesclient.md#list)

## Constructors

### constructor

\+ **new DisputesClient**(`client`: [BasePayPalClient](basepaypalclient.md)): _[DisputesClient](disputesclient.md)_

_Defined in [lib/disputes.ts:11](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/lib/disputes.ts#L11)_

**Parameters:**

| Name     | Type                                    |
| -------- | --------------------------------------- |
| `client` | [BasePayPalClient](basepaypalclient.md) |

**Returns:** _[DisputesClient](disputesclient.md)_

## Properties

### `Private` \_client

• **\_client**: _[BasePayPalClient](basepaypalclient.md)_

_Defined in [lib/disputes.ts:11](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/lib/disputes.ts#L11)_

## Methods

### getById

▸ **getById**(`disputeId`: string): _Promise‹any›_

_Defined in [lib/disputes.ts:22](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/lib/disputes.ts#L22)_

Retrieve dispute instance by its ID

**Parameters:**

| Name        | Type   | Description               |
| ----------- | ------ | ------------------------- |
| `disputeId` | string | unique dispute identifier |

**Returns:** _Promise‹any›_

dispute instance

---

### list

▸ **list**(`options`: [DisputesListOptions](../globals.md#disputeslistoptions)): _Promise‹any[]›_

_Defined in [lib/disputes.ts:38](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/lib/disputes.ts#L38)_

Retrieve all relevant disputes based off of provided options

**Parameters:**

| Name      | Type                                                     | Description                                    |
| --------- | -------------------------------------------------------- | ---------------------------------------------- |
| `options` | [DisputesListOptions](../globals.md#disputeslistoptions) | provides `startTime` and `state` of dispute(s) |

**Returns:** _Promise‹any[]›_

array of disputes
