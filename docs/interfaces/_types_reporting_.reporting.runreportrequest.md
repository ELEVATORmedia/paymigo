[@elevatormedia/paymigo](../README.md) › [Globals](../globals.md) › ["types/reporting"](../modules/_types_reporting_.md) › [reporting](../modules/_types_reporting_.reporting.md) › [RunReportRequest](_types_reporting_.reporting.runreportrequest.md)

# Interface: RunReportRequest

## Hierarchy

-   [ReportingRequest](_types_reporting_.reporting.reportingrequest.md)

    ↳ **RunReportRequest**

## Index

### Properties

-   [reportingEngineRequest](_types_reporting_.reporting.runreportrequest.md#reportingenginerequest)

## Properties

### reportingEngineRequest

• **reportingEngineRequest**: _object_

_Overrides [ReportingRequest](_types_reporting_.reporting.reportingrequest.md).[reportingEngineRequest](_types_reporting_.reporting.reportingrequest.md#reportingenginerequest)_

_Defined in [src/types/reporting.ts:26](https://github.com/ELEVATORmedia/paymigo/blob/60b912d/src/types/reporting.ts#L26)_

#### Type declaration:

-   **authRequest**(): _object_

    -   **partner**: _string_

    -   **password**: _string_

    -   **user**: _string_

    -   **vendor**: _string_

-   **runReportRequest**(): _object_

    -   **pageSize**: _number_

    -   **reportName**: _[ReportName](../modules/_types_reporting_.reporting.md#reportname)_

    -   **reportParam**: _[ReportParam](../modules/_types_reporting_.reporting.md#reportparam) | [ReportParam](../modules/_types_reporting_.reporting.md#reportparam)[]_
