/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Filters } from "./globalTypes";

// ====================================================
// GraphQL query operation: DashboardQuery
// ====================================================

export interface DashboardQuery_mastermenu {
  __typename: "MasterMenu";
  videoId: string | null;
  sourceId: string | null;
  downloadType: string | null;
  downloadSize: string | null;
  downloadTime: string | null;
  createdOn: string | null;
  updatedOn: string | null;
  startedOn: string | null;
  status: string | null;
}

export interface DashboardQuery {
  mastermenu: (DashboardQuery_mastermenu | null)[] | null;
}

export interface DashboardQueryVariables {
  pageNumber?: number | null;
  filters?: Filters | null;
}
