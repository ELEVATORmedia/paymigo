---
id: 'reporting.runreportrequest'
title: 'Interface: RunReportRequest'
sidebar_label: 'RunReportRequest'
hide_title: 'true'
---

# Interface: RunReportRequest

## Hierarchy

-   [ReportingRequest](reporting.reportingrequest.md)

    ↳ **RunReportRequest**

## Index

### Properties

-   [reportingEngineRequest](reporting.runreportrequest.md#reportingenginerequest)

## Properties

### reportingEngineRequest

• **reportingEngineRequest**: _object_

_Overrides [ReportingRequest](reporting.reportingrequest.md).[reportingEngineRequest](reporting.reportingrequest.md#reportingenginerequest)_

_Defined in [types/reporting.ts:26](https://github.com/ELEVATORmedia/paymigo/blob/30e9201/src/types/reporting.ts#L26)_

#### Type declaration:

-   **authRequest**(): _object_

    -   **partner**: _string_

    -   **password**: _string_

    -   **user**: _string_

    -   **vendor**: _string_

-   **runReportRequest**(): _object_

    -   **pageSize**: _number_

    -   **reportName**: _[ReportName](../modules/reporting.md#reportname)_

    -   **reportParam**: _[ReportParam](../modules/reporting.md#reportparam) | [ReportParam](../modules/reporting.md#reportparam)[]_
