import React from "react";
import { Table, Divider, Tag } from 'antd';

const UserTable = (props)=>{
    
    const dataSource = props.userData;
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'dashboard_name',
          key: 'name',
        },
        {
          title: 'Salary',
          dataIndex: 'dashboard_salary',
          key: 'salary',
        },
        {
          title: 'Age',
          dataIndex: 'dashboard_age',
          key: 'age',
        },
      ];
      
      
        return  <Table dataSource={dataSource} columns={columns} />
        
    
}

export default UserTable;