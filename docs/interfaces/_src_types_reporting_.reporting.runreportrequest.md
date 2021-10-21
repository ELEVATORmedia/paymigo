[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["src/types/reporting"](../modules/_src_types_reporting_.md) › [reporting](../modules/_src_types_reporting_.reporting.md) › [RunReportRequest](_src_types_reporting_.reporting.runreportrequest.md)

# Interface: RunReportRequest

## Hierarchy

-   [ReportingRequest](_src_types_reporting_.reporting.reportingrequest.md)

    ↳ **RunReportRequest**

## Index

### Properties

-   [reportingEngineRequest](_src_types_reporting_.reporting.runreportrequest.md#reportingenginerequest)

## Properties

### reportingEngineRequest

• **reportingEngineRequest**: _object_

_Overrides [ReportingRequest](_src_types_reporting_.reporting.reportingrequest.md).[reportingEngineRequest](_src_types_reporting_.reporting.reportingrequest.md#reportingenginerequest)_

_Defined in [src/types/reporting.ts:26](https://github.com/ELEVATORmedia/paymigo/blob/a9a7ad7/src/types/reporting.ts#L26)_

#### Type declaration:

-   **authRequest**(): _object_

    -   **partner**: _string_

    -   **password**: _string_

    -   **user**: _string_

    -   **vendor**: _string_

-   **runReportRequest**(): _object_

    -   **pageSize**: _number_

    -   **reportName**: _[ReportName](../modules/_src_types_reporting_.reporting.md#reportname)_

    -   **reportParam**: _[ReportParam](../modules/_src_types_reporting_.reporting.md#reportparam) | [ReportParam](../modules/_src_types_reporting_.reporting.md#reportparam)[]_
