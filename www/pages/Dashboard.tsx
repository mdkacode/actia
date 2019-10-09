
// Global Import START
import { Layout } from 'antd'
import * as React from "react";
import 'antd/dist/antd.css'
// Global Import END

// Local Import START
import RenderHeader from '../components/Header/Header';
import Dashboard from "../Modules/Dashboard/Dashboard";
// Local Import END


export default class app extends React.Component<{}, {}> {

  
  render() {
    return (
      <Layout className="Content-area" >
      <Dashboard isValid={true}/>
      </Layout>
    );
  }
}


{/* <UserTable userData={mastermenu}/> */ }