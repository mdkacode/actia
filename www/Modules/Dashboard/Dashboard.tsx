// global import START
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import withApolloClient from "../../lib/with-apollo-client";
import { List, Row, Col, Button, Form , Input, Select, Divider, Icon} from "antd"
import moment from "moment";
const { Option } = Select;
// global import END

// Local Import START

import ContentContainer from '../../components/ContentContainer/ContentContainer';
import FilterForm from '../Dashboard/FilerForm';
import dashboardQuery from "./Dashboard.query";
import { DashboardQuery } from "../../__generated__/DashboardQuery"
import "./styles.css";
// Local Import END
interface DashboardProps {
  isValid: boolean,
  form: object
}

interface DashboardState {
  isShow?: boolean,
  isHeader?: boolean,
  isPagination?: boolean,
  Header?: string,
  initLoading?: boolean,
  loading?: boolean,
  columns?: object,
  tableData?: object,
  pageNumber?: number,
  filters?: object
}
// dashboard_age: 0
// dashboard_name: "Expects error 2779"
// dashboard_salary: "1234"
// id: 80255
let filterFormRef;
class Dashboard extends Component<DashboardProps, DashboardState>{

  constructor(props: DashboardProps) {
    super(props);
    this.state = {
      columns: [],
      isHeader: false,
      initLoading: false,
      loading: false,
      pageNumber: 1,
      filters:{},
      tableData: []
    }
  }

  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate() {
    console.log(this.props)
  }

  filterItem(e, data) {
    var Filterdata = e.filter((res) => {
      return res.videoId.includes(data.target.value) ||
        res.status.includes(data.target.value.toUpperCase());
    })
    console.log(Filterdata);
    this.setState({
      tableData: Filterdata
    })
  }
  resetFilter = () => {
    this.setState({
      pageNumber:1,
      filters:{}
    })
  }

  onSubmit = ( data ) => {
    console.log(data);

   this.setState({
     filters:data
   })
   
  }


  filterForm = () => {
    return (
      <React.Fragment>
        <div className="filter-block">
        {/* <Divider>Filters</Divider> */}
        <FilterForm onSubmit={ this.onSubmit } onReset={this.resetFilter} totalCount={10} />
        </div>
       
      </React.Fragment>
    )
  }

  listItemRenderer = (item) => (
    <List.Item className="item-list">
      
      <div className="full_width">
        <Row
          gutter={32}
          className="rows"
        >
          <Col span={8} >
            <b>Video Id: </b><span><a href={`https://www.youtube.com/watch?v=${item.videoId}`} target="_blank"> {item.videoId} </a> </span>
          </Col>
          <Col span={8}>
            <b>Download Size:</b><span> {(item.downloadSize / 1000000).toFixed(3)} MB </span>
          </Col>
          <Col span={8}>
            <b>Status: </b><span> {item.status} </span>
          </Col>
        </Row>
        <Row
          gutter={32}
          className="rows"
        >
          <Col span={8}>
            <b>Start Time:</b><span> {moment(item.startedOn).format("DD:MM:YYYY hh:MMA")} </span>
          </Col>
          <Col span={8}>
            <b>End Time:</b><span> {moment(item.upDatedOn).format("DD:MM:YYYY hh:MMA")} </span>
          </Col>
          <Col span={8}>
            <b>Total Time Taken:</b><span> {item.downloadTime / 1000} s </span>
          </Col>
        </Row>
        <Row
          gutter={32}
          className="rows"
        >
          <Col span={8}>
            <b>SourceId:</b><span> {item.sourceId || 'No Source Id Found'} </span>
          </Col>
          
        </Row>
        <Row>

        </Row>
      </div>
    </List.Item>
  )

  loadMore = (fetchMore) => {
    return (
      !this.state.initLoading && !this.state.loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={() => { this.onLoadMore(fetchMore) }}>load more</Button>
        </div>
      ) : null
    )
  }

  onLoadMore = async (fetchMore) => {
    console.log("onLoadmore")
    console.log(fetchMore)
    this.setState({
      loading: true,
      // list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    await fetchMore({
      variables: {
        pageNumber: 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          mastermenu: [...prev.mastermenu, ...fetchMoreResult.mastermenu]
        });
      }
    });
    this.setState({
      loading: false
    })
    // this.getData(res => {
    //   const data = this.state.data.concat(res.results);
    //   this.setState(
    //     {
    //       data,
    //       list: data,
    //       loading: false,
    //     }
    //     // () => {
    //     //   // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
    //     //   // In real scene, you can using public method of react-virtualized:
    //     //   // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
    //     //   window.dispatchEvent(new Event('resize'));
    //     // },
    //   );
    // });
  };


  render() {
    return (
      this.props.isValid &&
      <Query<DashboardQuery>
        query={dashboardQuery}
        variables={{ pageNumber: this.state.pageNumber, filters: this.state.filters }}
        >
        {({ loading, error, data: { mastermenu }, fetchMore }) => {
          if (error) return <div>{JSON.stringify(error)}</div>;
          if (loading) return <div>Loading</div>;
          // this.setState({
          //   tableData: mastermenu
          // }, () => {
          return (
            <div className="content-area-data">
              {this.filterForm()}
              <div className="content-list">
                {/* <ContentContainer containerName={"Dashboard"}> */}
                  {/* <input type="text" placeholder="Search" onChange={this.filterItem.bind(this, mastermenu)} /> */}
                
                  <List
                    className="loadmore_list"
                    style={{ height: "100vh", overflow: "auto" }}
                    itemLayout="horizontal"
                    dataSource={this.state.tableData.length !== 0 ? this.state.tableData : mastermenu}
                    renderItem={this.listItemRenderer}
                    loadMore={this.loadMore(fetchMore)}
                    loading={this.state.loading}
                  />
                {/* </ContentContainer> */}
              </div>
            </div>
          )
          // })
        }}
      </Query>
    )
  }



}
export default withApolloClient(Dashboard)