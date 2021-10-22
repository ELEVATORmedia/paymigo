[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["lib/reporting"](_lib_reporting_.md)

# Module: "lib/reporting"

## Index

### Classes

-   [ReportingClient](../classes/_lib_reporting_.reportingclient.md)

### Variables

-   [XmlBuilder](_lib_reporting_.md#const-xmlbuilder)
-   [XmlParser](_lib_reporting_.md#const-xmlparser)

## Variables

### `Const` XmlBuilder

• **XmlBuilder**: _Builder‹›_ = new xml2js.Builder({
xmldec: { version: '1.0', encoding: 'UTF-8' },
})

_Defined in [lib/reporting.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/reporting.ts#L10)_

---

### `Const` XmlParser

• **XmlParser**: _Parser‹›_ = new xml2js.Parser({
valueProcessors: [parseNumbers],
})

_Defined in [lib/reporting.ts:6](https://github.com/ELEVATORmedia/paymigo/blob/0b66b83/src/lib/reporting.ts#L6)_
