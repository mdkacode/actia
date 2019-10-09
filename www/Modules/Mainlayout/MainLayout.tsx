import React, { Component } from 'react';

import Sidebar from "../SidebarLayout/Sidebar";
import LoginForm from "../Login/Login";
import axios from 'axios';
import { Layout, Skeleton } from 'antd';
import Cookies from "universal-cookie";
import RenderHeader from '../../components/Header/Header';
import RenderFooter from '../../components/Footer/Footer';

const cookies = new Cookies();

const {  Content } = Layout;
// state defination START
type LayoutState = {
    title: String
    isSidebar: Boolean,
    token: Boolean,
    initialLoad: Boolean,
    isLogin: boolean

}

interface LayoutProps {
    isLogin: boolean,
    isLogged: boolean
}
// state defination END


class MainLayout extends Component<LayoutProps, LayoutState> {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            token: false,
            isSidebar: false,
            initialLoad: false,
            isLogin: false
        };
    }



    async componentWillMount() {
        console.log('props');
    }
    componentWillUpdate(prevProps, nextProps) {
        console.log('object Data');
        console.log(this.props);
    }

    render() {
        return (
            this.state.initialLoad ? <Skeleton avatar active paragraph={{ rows: 20 }} /> :
                <Layout>
                    <Content>
                    {!this.props.isLogged && <LoginForm getLogin={this.props.isLogin} />}
                    {this.props.isLogged && <RenderHeader />} 
                    {/* {this.props.isLogged && <Sidebar />} */}
                    </Content>
                  {/* {this.props.isLogged && <RenderFooter />} */}
                </Layout>

        )
    }
}
export default MainLayout