import React from 'react';
import 'antd/dist/reset.css';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { textHeader } from '../Assets/CssProperties/Colors';
const FormLayout = ({ callBackHandleSubmit, callBackOnChange }) => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="normal_login"
            className="login-form rounded shadow d-flex justify-content-center flex-column"
            initialValues={{
                remember: true,
            }}
            onFinish={callBackHandleSubmit}
        >
            <h4 style={textHeader} className='text-start m-2'>Login</h4>
            <Form.Item
                name="username"
                className='m-2'
                onChange={(e) => callBackOnChange(e)}
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} name="username"
                    placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                className='m-2'
                onChange={(e) => callBackOnChange(e)}
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    name="password"

                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item className='m-2'>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                {/* <a className="login-form-forgot" href="">
                    Forgot password
                </a> */}
            </Form.Item>

            <Form.Item className='m-2'>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormLayout;