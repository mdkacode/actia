import React from 'react';
import { Layout, Divider } from "antd";
const { Content } = Layout;

const ContentContainer = (props) =>{
    return (
      <Content style={{ padding: 10, overflow:"auto" }}>
        <Divider>{ props.containerName }</Divider>
        {
          props.children
        }
      </Content> 
    );
}

export default ContentContainer;