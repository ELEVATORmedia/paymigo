[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["lib/payflow"](../modules/_lib_payflow_.md) › [PayflowClient](_lib_payflow_.payflowclient.md)

# Class: PayflowClient

## Hierarchy

-   **PayflowClient**

## Index

### Constructors

-   [constructor](_lib_payflow_.payflowclient.md#constructor)

### Properties

-   [\_apiUri](_lib_payflow_.payflowclient.md#private-_apiuri)
-   [\_payflowCredentials](_lib_payflow_.payflowclient.md#private-_payflowcredentials)

### Methods

-   [buildRequestBody](_lib_payflow_.payflowclient.md#buildrequestbody)
-   [makeRequest](_lib_payflow_.payflowclient.md#makerequest)
-   [parseResponse](_lib_payflow_.payflowclient.md#parseresponse)

## Constructors

### constructor

\+ **new PayflowClient**(`mode`: [ClientMode](../modules/_types_client_.md#clientmode), `credentials`: [PayflowCredentials](../modules/_types_client_.md#payflowcredentials)): _[PayflowClient](_lib_payflow_.payflowclient.md)_

_Defined in [src/lib/payflow.ts:16](https://github.com/ELEVATORmedia/paymigo/blob/3f5d74d/src/lib/payflow.ts#L16)_

**Parameters:**

| Name          | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| `mode`        | [ClientMode](../modules/_types_client_.md#clientmode)                 |
| `credentials` | [PayflowCredentials](../modules/_types_client_.md#payflowcredentials) |

**Returns:** _[PayflowClient](_lib_payflow_.payflowclient.md)_

## Properties

### `Private` \_apiUri

• **\_apiUri**: _string_

_Defined in [src/lib/payflow.ts:15](https://github.com/ELEVATORmedia/paymigo/blob/3f5d74d/src/lib/payflow.ts#L15)_

---

### `Private` \_payflowCredentials

• **\_payflowCredentials**: _[PayflowCredentials](../modules/_types_client_.md#payflowcredentials)_

_Defined in [src/lib/payflow.ts:16](https://github.com/ELEVATORmedia/paymigo/blob/3f5d74d/src/lib/payflow.ts#L16)_

## Methods

### buildRequestBody

▸ **buildRequestBody**(`params`: any): _string_

_Defined in [src/lib/payflow.ts:25](https://github.com/ELEVATORmedia/paymigo/blob/3f5d74d/src/lib/payflow.ts#L25)_

**Parameters:**

| Name     | Type |
| -------- | ---- |
| `params` | any  |

**Returns:** _string_

---

### makeRequest

▸ **makeRequest**(`body`: any): _Promise‹AxiosResponse‹unknown, any››_

_Defined in [src/lib/payflow.ts:34](https://github.com/ELEVATORmedia/paymigo/blob/3f5d74d/src/lib/payflow.ts#L34)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `body` | any  |

**Returns:** _Promise‹AxiosResponse‹unknown, any››_

---

### parseResponse

▸ **parseResponse**(`input`: string): _Promise‹any›_

_Defined in [src/lib/payflow.ts:36](https://github.com/ELEVATORmedia/paymigo/blob/3f5d74d/src/lib/payflow.ts#L36)_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `input` | string |

**Returns:** _Promise‹any›_
