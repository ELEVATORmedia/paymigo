---
id: 'reportingclient'
title: 'Class: ReportingClient'
sidebar_label: 'ReportingClient'
hide_title: 'true'
---

# Class: ReportingClient

## Hierarchy

-   **ReportingClient**

## Index

### Constructors

-   [constructor](reportingclient.md#constructor)

### Properties

-   [\_apiUri](reportingclient.md#private-_apiuri)
-   [\_payflowCredentials](reportingclient.md#private-_payflowcredentials)

### Methods

-   [buildRequestBody](reportingclient.md#buildrequestbody)
-   [makeRequest](reportingclient.md#makerequest)
-   [parseResponse](reportingclient.md#parseresponse)

## Constructors

### constructor

\+ **new ReportingClient**(`mode`: [ClientMode](../globals.md#clientmode), `credentials`: [PayflowCredentials](../globals.md#payflowcredentials)): _[ReportingClient](reportingclient.md)_

_Defined in [lib/reporting.ts:16](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/lib/reporting.ts#L16)_

**Parameters:**

| Name          | Type                                                   |
| ------------- | ------------------------------------------------------ |
| `mode`        | [ClientMode](../globals.md#clientmode)                 |
| `credentials` | [PayflowCredentials](../globals.md#payflowcredentials) |

**Returns:** _[ReportingClient](reportingclient.md)_

## Properties

### `Private` \_apiUri

• **\_apiUri**: _string_

_Defined in [lib/reporting.ts:15](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/lib/reporting.ts#L15)_

---

### `Private` \_payflowCredentials

• **\_payflowCredentials**: _[PayflowCredentials](../globals.md#payflowcredentials)_

_Defined in [lib/reporting.ts:16](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/lib/reporting.ts#L16)_

## Methods

### buildRequestBody

▸ **buildRequestBody**(`params`: any): _any_

_Defined in [lib/reporting.ts:25](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/lib/reporting.ts#L25)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `params` | any  |

**Returns:** _any_

---

### makeRequest

▸ **makeRequest**(`body`: any): _Promise‹AxiosResponse‹any››_

_Defined in [lib/reporting.ts:33](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/lib/reporting.ts#L33)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `body` | any  |

**Returns:** _Promise‹AxiosResponse‹any››_

---

### parseResponse

▸ **parseResponse**(`input`: string): _any_

_Defined in [lib/reporting.ts:35](https://github.com/ELEVATORmedia/paymigo/blob/d7c96a7/src/lib/reporting.ts#L35)_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `input` | string |

**Returns:** _any_
