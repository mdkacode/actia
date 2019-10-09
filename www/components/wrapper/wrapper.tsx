import { Layout, Input } from 'antd';
import React from "react";
import TabsPane from "../Tabs";
import "./style.css"
const { Search } = Input;
const Wrapper = () => {

    return (
        <Layout>
            
            {/* adding heading on the top of the page START */}
            <div className="left-div">
                <span className="page-title">Hashtags Dashboard</span>
            </div>
             {/* adding heading on the top of the page  END*/}


             {/* adding search bar START */}
            <div className="left-search-area">
            <span className="search-text">Quick Search</span>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}  
                />
            </div>
            <div className="tabs-area">
            <TabsPane/>
            </div>
            
              {/* adding search bar END */}


        </Layout>

    )
}
export default Wrapper;