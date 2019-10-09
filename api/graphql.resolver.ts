
import { menu,mastermenu } from "./constant";
import { ApiCall, PostApiCall } from "./api.axios";

import * as data from './response.json';

const GQLresolver = async()=>{
  const resolvers = {
    Query: {
      menu: () => menu,
      mastermenu: async ( parent, args , context, info ) => {
        console.log(parent,args,context )
        const mastermenu = await PostApiCall(`http://202.21.35.51:3000/youtube_donwloader/api/v1/downloadService?page=${args.pageNumber || 1 }&limit=5`, args.filters);
        console.log( mastermenu )
        return mastermenu.mastermenu.rows
      }
    }
  };

  return resolvers;
} 
export default GQLresolver;
 
  