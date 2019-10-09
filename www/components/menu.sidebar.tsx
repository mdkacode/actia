import {Menu,Icon} from 'antd'
import React,{useState} from 'react'
import "../pages/style.css";
import Link from "next/link"
// import Link from 'next/link'


const { SubMenu } = Menu;
interface MenuItems {
    MenuItemList :Array<any>
}
/* tslint:disable */
let items:any=[];
const MenuItems = (props:any)=>{
  const item = props.item;
  
  

        items = []; // make Array Null
      item.map(res=>{
        console.log('TEXTCHECK');
        console.log(res.title);
        

      items.push(<Menu theme="dark" mode="inline"  defaultSelectedKeys={["1"]}>
      
      <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>{res.title}</span>
                </span>
              }
            >
            {res.children.map((res,id)=>   <Menu.Item key={id}>{res.title}</Menu.Item>)}
            </SubMenu>           
         </Menu>)
     }).join("")
 return items
        
    
}
export default MenuItems