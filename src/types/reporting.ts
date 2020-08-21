
export declare namespace reporting {
    export type ReportName =
        | 'SettlementReport'
        | 'TransactionSummaryReport'
        | 'DailyActivityReport';

    export interface ReportingRequest {
        reportingEngineRequest: {
            authRequest: {
                user: string;
                vendor: string;
                partner: string;
                password: string;
            };
            [key: string]: any;
        };
    }

    export type ReportParam = {
        paramName: string;
        paramValue: string;
    };

    export interface RunReportRequest extends ReportingRequest {
        reportingEngineRequest: {
            authRequest: {
                user: string;
                vendor: string;
                partner: string;
                password: string;
            };
            runReportRequest: {
                reportName: ReportName;
                reportParam: ReportParam | ReportParam[];
                pageSize: number;
            };
        };
    }

    export interface GetReportRequest extends ReportingRequest {
        reportingEngineRequest: {
            authRequest: {
                user: string;
                vendor: string;
                partner: string;
                password: string;
            };
            getDataRequest: {
                reportId: string;
                pageNum: string;
            };
        };
    }

    export interface ReportingResponse {
        reportingEngineResponse: {
            baseResponse: {
                responseCode: number[];
                responseMsg: string[];
            }[];
            [key: string]: any;
        };
    }

    export interface RunReportResponse extends ReportingResponse {
        reportingEngineResponse: {
            baseResponse: {
                responseCode: number[];
                responseMsg: string[];
            }[];
            runReportResponse: {
                reportId: string[];
                statusCode: number[];
                statusMsg: string[];
            }[];
        };
    }
}
