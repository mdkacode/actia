import React from "react";
import { Form, Input, Select, Icon, Button } from "antd";
const { Option } = Select;

/**
 * 
 */

const FilterForm = ( props ) => {
  const { getFieldDecorator } = props.form
  const handleFilterSubmit = ( e ) => {
    e.preventDefault()
    const fieldsValues = props.form.getFieldsValue()
    props.onSubmit(fieldsValues);
  }
  return(
    <Form layout="inline" onSubmit={ handleFilterSubmit }>
      <Form.Item >
        {getFieldDecorator('videoId')
         (
          <Input
          placeholder={"Video Id"}
          />
         )  
        } 
      </Form.Item>
      <Form.Item>
       {getFieldDecorator('downloadType')
        (
          <Select style={{ width: 120 }} allowClear placeholder="Download Type">
            <Option value="P">Priority</Option>
            <Option value="N">Normal</Option>
            <Option value="E">Error</Option>
          </Select>
        )
       } 
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('status')
          (
            <Select mode="multiple" style={{ width: 120 }} allowClear placeholder="Status">
              <Option value="NEW">New</Option>
              <Option value="IN_PROGRESS">In Progress</Option>
              <Option value="FTP_DONE">FTP Done</Option>
              <Option value="DOWNLOAD_DONE">Download Done</Option>
            </Select>
          )
        }
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          <Icon type="search"/>
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type="danger" onClick={props.onReset}>
          Reset
        </Button>
      </Form.Item>
      
      <Form.Item className="total-count">
        <p>Total Count:{props.totalCount}</p>
      </Form.Item>
    </Form>
  )
}

export default Form.create({ name: 'filterForm' })(FilterForm);