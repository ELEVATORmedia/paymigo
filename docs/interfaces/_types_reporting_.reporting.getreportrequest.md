[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["types/reporting"](../modules/_types_reporting_.md) › [reporting](../modules/_types_reporting_.reporting.md) › [GetReportRequest](_types_reporting_.reporting.getreportrequest.md)

# Interface: GetReportRequest

## Hierarchy

-   [ReportingRequest](_types_reporting_.reporting.reportingrequest.md)

    ↳ **GetReportRequest**

## Index

### Properties

-   [reportingEngineRequest](_types_reporting_.reporting.getreportrequest.md#reportingenginerequest)

## Properties

### reportingEngineRequest

• **reportingEngineRequest**: _object_

_Overrides [ReportingRequest](_types_reporting_.reporting.reportingrequest.md).[reportingEngineRequest](_types_reporting_.reporting.reportingrequest.md#reportingenginerequest)_

_Defined in [src/types/reporting.ts:42](https://github.com/ELEVATORmedia/paymigo/blob/3f5d74d/src/types/reporting.ts#L42)_

#### Type declaration:

-   **authRequest**(): _object_

    -   **partner**: _string_

    -   **password**: _string_

    -   **user**: _string_

    -   **vendor**: _string_

-   **getDataRequest**(): _object_

    -   **pageNum**: _string_

    -   **reportId**: _string_
