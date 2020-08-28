---
id: 'reporting.getreportrequest'
title: 'Interface: GetReportRequest'
sidebar_label: 'GetReportRequest'
hide_title: 'true'
---

# Interface: GetReportRequest

## Hierarchy

-   [ReportingRequest](reporting.reportingrequest.md)

    ↳ **GetReportRequest**

## Index

### Properties

-   [reportingEngineRequest](reporting.getreportrequest.md#reportingenginerequest)

## Properties

### reportingEngineRequest

• **reportingEngineRequest**: _object_

_Overrides [ReportingRequest](reporting.reportingrequest.md).[reportingEngineRequest](reporting.reportingrequest.md#reportingenginerequest)_

_Defined in [types/reporting.ts:42](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/types/reporting.ts#L42)_

#### Type declaration:

-   **authRequest**(): _object_

    -   **partner**: _string_

    -   **password**: _string_

    -   **user**: _string_

    -   **vendor**: _string_

-   **getDataRequest**(): _object_

    -   **pageNum**: _string_

    -   **reportId**: _string_
