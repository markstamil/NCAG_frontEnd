import React from 'react'
import { Form, Input, Select } from 'antd';

const InputGroup = ({ callBackOnChange, name, prefix, type, selectModules }) => {
    const { Option } = Select;
    return (
        <div>
            {type === 'select' ? <Form.Item className='mt-2' label={name}
                name={name}
                
                rules={[
                    {
                        required: true,
                        message: 'Please select ' + name,
                    },
                ]}
            >
                <Select  placeholder={`Select ${name}`} onChange={callBackOnChange}>
                    {
                        selectModules.map((val, ind) => {
                            return <Option value={val}>{val}</Option>
                        })
                    }
                </Select>
            </Form.Item> : <Form.Item label={name}
                name={name}
                className='m-2'
                onChange={(e) => callBackOnChange(e)}
                rules={[
                    {
                        required: true,
                        message: `Please input your ${name}!`,
                    },
                ]}
            >
                <Input name={name}
                    type={type}
                    placeholder={name} />
            </Form.Item>}
        </div>
    )
}

export default InputGroup