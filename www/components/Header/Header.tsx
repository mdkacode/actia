import React from 'react';
import { Layout, Menu } from 'antd';
import Logo from '../logo';
import Link from "next/link"
const { Header } = Layout;


const RenderHeader = () =>{

    return ( <Header  className="body-header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <div className="nav-logo"> 
    <Logo />
    </div>

    <div className="right-login">
   <Link href="#"><a className="link-text">Login</a></Link> 
    </div>
 
  </Header>
  )
   
}

export default  RenderHeader;