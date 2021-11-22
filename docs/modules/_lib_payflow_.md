[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["lib/payflow"](_lib_payflow_.md)

# Module: "lib/payflow"

## Index

### Classes

-   [PayflowClient](../classes/_lib_payflow_.payflowclient.md)

### Variables

-   [XmlBuilder](_lib_payflow_.md#const-xmlbuilder)
-   [XmlParser](_lib_payflow_.md#const-xmlparser)

## Variables

### `Const` XmlBuilder

• **XmlBuilder**: _Builder‹›_ = new xml2js.Builder({
xmldec: { version: '1.0', encoding: 'UTF-8' },
})

_Defined in [src/lib/payflow.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/3f5d74d/src/lib/payflow.ts#L10)_

---

### `Const` XmlParser

• **XmlParser**: _Parser‹›_ = new xml2js.Parser({
valueProcessors: [parseNumbers],
})

_Defined in [src/lib/payflow.ts:6](https://github.com/ELEVATORmedia/paymigo/blob/3f5d74d/src/lib/payflow.ts#L6)_
