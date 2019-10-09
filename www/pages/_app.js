import App, { Container } from "next/app";
import React from "react";
import withApolloClient from "../lib/with-apollo-client";

import { Layout } from 'antd'
import { ApolloProvider } from "react-apollo";
// Local Import START
import MainLayout from "../Modules/Mainlayout/MainLayout";
import "./style.css"
import axios from 'axios';
import Cookies from "universal-cookie";

const cookies = new Cookies();

// Local Import END


const AppContext = React.createContext()


class Application extends App {

  constructor(props) {
    super(props);
    this.state = {
      token: false
    }
  }

  async componentWillMount() {

    const validToken = cookies.get('token');
    const AuthStr = 'Bearer ' + validToken;
    let data = await axios.get('http://localhost:4000/gettoken', { headers: { Authorization: AuthStr } });

    if (data.data.success === true) {
      await this.setState({
        token: true,
        initialLoad: false
      })
    }
    else {
      this.setState({
        token: false,
        initialLoad: false
      })

    }

    console.log(this.state);
  }

  async getLogin(values) {
    console.log(values);
    let data = await axios.post('http://localhost:4000/login', values);

    if (data.status === 200) {
      cookies.set("token", data.data.token, { path: '/', expires: new Date(Date.now() + 86400000) });
      await this.setState({
        token: true,
        initialLoad: false
      })
      return true;
    }
    else {
      this.setState({
        token: false,
        initialLoad: false
      })
      return false;
    }
  }
  render() {

    const { Component, pageProps, apolloClient } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <Container>
          <Layout>
            <MainLayout isLogin={this.getLogin.bind(this)} isLogged={this.state.token} />
            {this.state.token && <Component {...pageProps} />}
          </Layout>
        </Container>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(Application);
