import React,{Component} from 'react'

import { Query } from 'react-apollo';

import { Layout,Row,Col,Icon } from "antd";
import menuQuery from "./Sidebar.query";
import { MenuQuery } from "../../__generated__/MenuQuery"
import MenuItems from "../../components/menu.sidebar";
import RenderHeader from "../../components/Header/Header";
import Logo from "../../components/logo"

const {  Sider } = Layout;

type InitialState = {
title:String
}

class Sidebar extends Component<{},InitialState>{

    intial (){
        this.setState({
            title:'Hello World'
        })
    }

    logout(){
     // impliment Logout
    }

    componentWillMount(){
        this.intial()
    }

    render () {
        return (
            <Query<MenuQuery> query={menuQuery}>
        {({ loading, error, data: { menu } }) => {
          console.log(menu);
          if (error) return <div>{JSON.stringify(error)}</div>;
          if (loading) return <div>Loading</div>;

          return (
            <Layout>
            <div>
            <Sider
            className="Fullscreen-body"
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
          >
          
          <div className="Menu-scroll">
            <MenuItems item={menu}  />
            </div>
            <div className="Option-section">
            <Row type="flex" justify="space-around" align="middle">
        <Col span={8}>
            <div className="Help-section" >
            <Icon type="question-circle" /> Help
            </div>
        </Col>
        <Col span={14}><span className="Logout-section" onClick={this.logout}><Icon type="logout" /> Logout</span></Col>
    </Row>
            </div>
          </Sider>
          </div>
          </Layout>
         
          );
        }}
      </Query>
        )
    }

}

export default Sidebar