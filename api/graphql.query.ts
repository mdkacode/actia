import { gql,  } from "apollo-server-express";
export const typeDefs = gql`
# parent Element of the Menu START
type Menu { 
  title: String,
  key: String,
  icon:String,
  id:String,
  permissions:[String],
  items:[MenuHeading],
  children:[MenuChildren]
}
# parent Element of the Menu END

# Child Element of the Menu START
type MenuChildren {
  title:String,
  href:String,
  icon:String,
  permissions:[String]
}
# Child Element of the Menu START


type MenuHeading {
  id:Int,
  name:String
}
type MasterMenu {
  count:Int,
  videoId:String,
  sourceId:String,
  downloadType:String,
  downloadSize:String,
  downloadTime:String,
  createdOn:String,
  updatedOn:String,
  startedOn:String,
  status:String
}

input Filters {
  videoId: String,
  downloadType: String,
  status:String
}

type Query {
  menu: [Menu],
  mastermenu(pageNumber:Int, filters:Filters):[MasterMenu]
}
`;