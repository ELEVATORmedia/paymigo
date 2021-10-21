[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["src/lib/util"](_src_lib_util_.md)

# Module: "src/lib/util"

## Index

### Variables

-   [formatter](_src_lib_util_.md#const-formatter)

### Functions

-   [dateToParamString](_src_lib_util_.md#const-datetoparamstring)

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

_Defined in [src/lib/util.ts:2](https://github.com/ELEVATORmedia/paymigo/blob/a9a7ad7/src/lib/util.ts#L2)_

## Functions

### `Const` dateToParamString

▸ **dateToParamString**(`input`: Date): _string_

_Defined in [src/lib/util.ts:12](https://github.com/ELEVATORmedia/paymigo/blob/a9a7ad7/src/lib/util.ts#L12)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `input` | Date |

**Returns:** _string_
