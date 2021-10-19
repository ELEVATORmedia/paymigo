[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["src/lib/reporting"](_src_lib_reporting_.md)

# Module: "src/lib/reporting"

## Index

### Classes

-   [ReportingClient](../classes/_src_lib_reporting_.reportingclient.md)

### Variables

-   [XmlBuilder](_src_lib_reporting_.md#const-xmlbuilder)
-   [XmlParser](_src_lib_reporting_.md#const-xmlparser)

## Variables

### `Const` XmlBuilder

• **XmlBuilder**: _Builder‹›_ = new xml2js.Builder({
xmldec: { version: '1.0', encoding: 'UTF-8' },
})

_Defined in [src/lib/reporting.ts:10](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/reporting.ts#L10)_

---

### `Const` XmlParser

• **XmlParser**: _Parser‹›_ = new xml2js.Parser({
valueProcessors: [parseNumbers],
})

_Defined in [src/lib/reporting.ts:6](https://github.com/ELEVATORmedia/paymigo/blob/0314afc/src/lib/reporting.ts#L6)_
