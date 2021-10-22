[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["lib/reporting"](../modules/_lib_reporting_.md) › [ReportingClient](_lib_reporting_.reportingclient.md)

# Class: ReportingClient

## Hierarchy

-   **ReportingClient**

## Index

### Constructors

-   [constructor](_lib_reporting_.reportingclient.md#constructor)

### Properties

-   [\_apiUri](_lib_reporting_.reportingclient.md#private-_apiuri)
-   [\_payflowCredentials](_lib_reporting_.reportingclient.md#private-_payflowcredentials)

### Methods

-   [buildRequestBody](_lib_reporting_.reportingclient.md#buildrequestbody)
-   [makeRequest](_lib_reporting_.reportingclient.md#makerequest)
-   [parseResponse](_lib_reporting_.reportingclient.md#parseresponse)

## Constructors

### constructor

\+ **new ReportingClient**(`mode`: [ClientMode](../modules/_types_client_.md#clientmode), `credentials`: [PayflowCredentials](../modules/_types_client_.md#payflowcredentials)): _[ReportingClient](_lib_reporting_.reportingclient.md)_

_Defined in [lib/reporting.ts:16](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/reporting.ts#L16)_

**Parameters:**

| Name          | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| `mode`        | [ClientMode](../modules/_types_client_.md#clientmode)                 |
| `credentials` | [PayflowCredentials](../modules/_types_client_.md#payflowcredentials) |

**Returns:** _[ReportingClient](_lib_reporting_.reportingclient.md)_

## Properties

### `Private` \_apiUri

• **\_apiUri**: _string_

_Defined in [lib/reporting.ts:15](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/reporting.ts#L15)_

---

### `Private` \_payflowCredentials

• **\_payflowCredentials**: _[PayflowCredentials](../modules/_types_client_.md#payflowcredentials)_

_Defined in [lib/reporting.ts:16](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/reporting.ts#L16)_

## Methods

### buildRequestBody

▸ **buildRequestBody**(`params`: any): _string_

_Defined in [lib/reporting.ts:25](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/reporting.ts#L25)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `params` | any  |

**Returns:** _string_

---

### makeRequest

▸ **makeRequest**(`body`: any): _Promise‹AxiosResponse‹unknown, any››_

_Defined in [lib/reporting.ts:34](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/reporting.ts#L34)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `body` | any  |

**Returns:** _Promise‹AxiosResponse‹unknown, any››_

---

### parseResponse

▸ **parseResponse**(`input`: string): _Promise‹any›_

_Defined in [lib/reporting.ts:36](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/reporting.ts#L36)_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `input` | string |

**Returns:** _Promise‹any›_
