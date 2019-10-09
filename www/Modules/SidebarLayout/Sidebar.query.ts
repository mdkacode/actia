import gql from "graphql-tag";

const menuQuery = gql`
  query MenuQuery {
    menu{
    title
    key
    permissions
    children{
      title
      href
      permissions
    }
  }
  }
`;

export default  menuQuery;
