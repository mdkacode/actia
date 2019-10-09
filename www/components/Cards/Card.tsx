import React from 'react';

import { List, Card,Avatar,Icon } from 'antd';



const { Meta } = Card;

let cardslist = [];

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

const Cards = (props) =>{

    

    cardslist = []
   




    return (<List
        dataSource={props.data}
        renderItem={item => (
            <List.Item
            key={item.videoId}
            actions={[
              <IconText type="star-o" text={item.downloadType} key="list-vertical-star-o" />,
              <IconText type="like-o" text={item.createdOn} key="list-vertical-like-o" />,
              <IconText type="message" text={item.updatedOn} key="list-vertical-message" />,
            ]}
            
          >
            <List.Item.Meta
              avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
              title={item.videoId}
              description={<div><h1>{item.status}</h1></div>}
            />
           {item.downloadSize}
          </List.Item>
        )}
      />)
}

export default Cards;