[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["src/lib/reporting"](../modules/_src_lib_reporting_.md) › [ReportingClient](_src_lib_reporting_.reportingclient.md)

# Class: ReportingClient

## Hierarchy

-   **ReportingClient**

## Index

### Constructors

-   [constructor](_src_lib_reporting_.reportingclient.md#constructor)

### Properties

-   [\_apiUri](_src_lib_reporting_.reportingclient.md#private-_apiuri)
-   [\_payflowCredentials](_src_lib_reporting_.reportingclient.md#private-_payflowcredentials)

### Methods

-   [buildRequestBody](_src_lib_reporting_.reportingclient.md#buildrequestbody)
-   [makeRequest](_src_lib_reporting_.reportingclient.md#makerequest)
-   [parseResponse](_src_lib_reporting_.reportingclient.md#parseresponse)

## Constructors

### constructor

\+ **new ReportingClient**(`mode`: [ClientMode](../modules/_src_types_client_.md#clientmode), `credentials`: [PayflowCredentials](../modules/_src_types_client_.md#payflowcredentials)): _[ReportingClient](_src_lib_reporting_.reportingclient.md)_

_Defined in [src/lib/reporting.ts:16](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/reporting.ts#L16)_

**Parameters:**

| Name          | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| `mode`        | [ClientMode](../modules/_src_types_client_.md#clientmode)                 |
| `credentials` | [PayflowCredentials](../modules/_src_types_client_.md#payflowcredentials) |

**Returns:** _[ReportingClient](_src_lib_reporting_.reportingclient.md)_

## Properties

### `Private` \_apiUri

• **\_apiUri**: _string_

_Defined in [src/lib/reporting.ts:15](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/reporting.ts#L15)_

---

### `Private` \_payflowCredentials

• **\_payflowCredentials**: _[PayflowCredentials](../modules/_src_types_client_.md#payflowcredentials)_

_Defined in [src/lib/reporting.ts:16](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/reporting.ts#L16)_

## Methods

### buildRequestBody

▸ **buildRequestBody**(`params`: any): _string_

_Defined in [src/lib/reporting.ts:25](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/reporting.ts#L25)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `params` | any  |

**Returns:** _string_

---

### makeRequest

▸ **makeRequest**(`body`: any): _Promise‹AxiosResponse‹unknown, any››_

_Defined in [src/lib/reporting.ts:33](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/reporting.ts#L33)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `body` | any  |

**Returns:** _Promise‹AxiosResponse‹unknown, any››_

---

### parseResponse

▸ **parseResponse**(`input`: string): _Promise‹any›_

_Defined in [src/lib/reporting.ts:35](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/reporting.ts#L35)_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `input` | string |

**Returns:** _Promise‹any›_
