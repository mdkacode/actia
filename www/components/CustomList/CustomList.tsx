// global import 
import React from "react";
import { List } from "antd";



/**
 * 
 * @param props | props
 */
const CustomList = ( props ) => {
  return(
    <List
      style={{height:"100vh", overflow:"auto"}}
      itemLayout={ props.layout }
      dataSource={ props.data }
      renderItem={ props.itemRenderer }
      loadMore={ props.loadMore }
    />
  )
}

export default CustomList;