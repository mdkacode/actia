import React,{ Component } from "react";
import { Form, Icon, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

type LoginState = {
    token :string
}
interface LoginProps extends FormComponentProps{
    username : string,
    Password: string,
    getLogin: (userdata)=> Number;
}

class LoginForm extends Component<LoginProps,LoginState> {

    constructor(props:LoginProps){
        super(props)
    }

    handleSubmit =async e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
          if (!err) {
          this.props.getLogin(values);
          

            
          }
        });
      };

      componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
      }


      hasErrors= (fieldsError)=> {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
      }

    render () {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>
            Log in
          </Button>
        </Form.Item>
      </Form>
            )
    }
    

}
export default  Form.create()(LoginForm);