
import React from 'react';
import {Tabs} from 'antd';

const { TabPane } = Tabs;

function callback(key) {
   
  }


const TabsPane =()=>{

    return (
        <Tabs onChange={callback} type="card">
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
    )

}

export default TabsPane ;