
// Global Import START
import { Layout } from 'antd'
import * as React from "react";
import 'antd/dist/antd.css'
// Global Import END

// Local Import START
import MainLayout from "../Modules/Mainlayout/MainLayout";
// Local Import END


export default class MasterLayout extends React.Component<{}, {}> {

  
  render() {
    return (
      <Layout>
        <MainLayout />
      </Layout>
    );
  }
}


{/* <UserTable userData={mastermenu}/> */ }