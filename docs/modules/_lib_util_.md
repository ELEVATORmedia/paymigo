[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["lib/util"](_lib_util_.md)

# Module: "lib/util"

## Index

### Enumerations

-   [ErrorCodes](../enums/_lib_util_.errorcodes.md)

### Variables

-   [formatter](_lib_util_.md#const-formatter)

### Functions

-   [dateToParamString](_lib_util_.md#const-datetoparamstring)

## Variables

### `Const` formatter

• **formatter**: _DateTimeFormat_ = new Intl.DateTimeFormat('en-US', {
year: 'numeric',
month: '2-digit',
day: '2-digit',
hour12: false,
hour: 'numeric',
minute: 'numeric',
second: 'numeric',
})

_Defined in [src/lib/util.ts:1](https://github.com/ELEVATORmedia/paymigo/blob/0815c8d/src/lib/util.ts#L1)_

## Functions

### `Const` dateToParamString

▸ **dateToParamString**(`input`: Date): _string_

_Defined in [src/lib/util.ts:11](https://github.com/ELEVATORmedia/paymigo/blob/0815c8d/src/lib/util.ts#L11)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `input` | Date |

**Returns:** _string_
