import gql from "graphql-tag";

const dashboardQuery = gql`
query DashboardQuery($pageNumber: Int, $filters: Filters) {
    mastermenu( pageNumber: $pageNumber, filters: $filters ) {
    count,
    videoId,
    sourceId,
    downloadType,
    downloadSize,
    downloadTime,
    createdOn,
    updatedOn,
    startedOn,
    status
  }
}`;
export default dashboardQuery;