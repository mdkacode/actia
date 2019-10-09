
// Global Import START
import { Layout } from 'antd'
import * as React from "react";
import 'antd/dist/antd.css'
// Global Import END

// Local Import START
import MainLayout from "../Modules/Mainlayout/MainLayout";
// Local Import END


export default class app extends React.Component<{}, {}> {

  
  render() {
    return (
      <Layout className="Content-area" >
      <h2>Hello</h2>
      </Layout>
    );
  }
}


{/* <UserTable userData={mastermenu}/> */ }