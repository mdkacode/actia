import React from 'react';
import { Table} from 'antd';


  const  onChange = (pagination, filters, sorter) => {
    console.log('params', pagination, filters, sorter);
  }
  interface TableInformation{
    tableColumn : object,
    tableData : object
  }

  const RenderTable =(props:TableInformation) => {
      return (
        <Table columns={props.tableColumn} dataSource={props.tableData} onChange={onChange} />
      )
  }

  export default RenderTable;


