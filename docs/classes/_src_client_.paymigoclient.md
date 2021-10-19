[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["src/Client"](../modules/_src_client_.md) › [PaymigoClient](_src_client_.paymigoclient.md)

# Class: PaymigoClient

## Hierarchy

-   **PaymigoClient**

## Index

### Constructors

-   [constructor](_src_client_.paymigoclient.md#constructor)

### Properties

-   [\_baseClient](_src_client_.paymigoclient.md#private-_baseclient)
-   [disputes](_src_client_.paymigoclient.md#disputes)
-   [mode](_src_client_.paymigoclient.md#mode)
-   [orders](_src_client_.paymigoclient.md#orders)
-   [reporting](_src_client_.paymigoclient.md#reporting)

## Constructors

### constructor

\+ **new PaymigoClient**(`options`: [ClientOptions](../modules/_src_types_client_.md#clientoptions)): _[PaymigoClient](_src_client_.paymigoclient.md)_

_Defined in [src/Client.ts:11](https://github.com/ELEVATORmedia/paymigo/blob/7e4f33e/src/Client.ts#L11)_

**Parameters:**

| Name      | Type                                                            |
| --------- | --------------------------------------------------------------- |
| `options` | [ClientOptions](../modules/_src_types_client_.md#clientoptions) |

**Returns:** _[PaymigoClient](_src_client_.paymigoclient.md)_

## Properties

### `Private` \_baseClient

• **\_baseClient**: _PayPalHttpClient_

_Defined in [src/Client.ts:7](https://github.com/ELEVATORmedia/paymigo/blob/7e4f33e/src/Client.ts#L7)_

---

### disputes

• **disputes**: _[DisputesClient](_src_lib_disputes_.disputesclient.md)_

_Defined in [src/Client.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/7e4f33e/src/Client.ts#L10)_

---

### mode

• **mode**: _[ClientMode](../modules/_src_types_client_.md#clientmode)_

_Defined in [src/Client.ts:6](https://github.com/ELEVATORmedia/paymigo/blob/7e4f33e/src/Client.ts#L6)_

---

### orders

• **orders**: _[OrdersClient](_src_lib_orders_.ordersclient.md)_

_Defined in [src/Client.ts:9](https://github.com/ELEVATORmedia/paymigo/blob/7e4f33e/src/Client.ts#L9)_

---

### reporting

• **reporting**: _[ReportingClient](_src_lib_reporting_.reportingclient.md)_

_Defined in [src/Client.ts:11](https://github.com/ELEVATORmedia/paymigo/blob/7e4f33e/src/Client.ts#L11)_
