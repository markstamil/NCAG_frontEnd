import React from 'react'
import FormLayout from '../../Layouts/FormLayout'

const Login = () => {
   
    const handleSubmit = () => {
        console.log('Received values of form: ');
    };
    const handleOnChange = (e) => {
        console.log(e.target.name + '' + e.target.value)
    }
    return (
        <div style={{ width: '100%' }} className='d-flex justify-content-center flex-row position-absolute top-50 translate-middle-y'>
            <FormLayout callBackHandleSubmit={handleSubmit} callBackOnChange={handleOnChange}  />
        </div>
    )
}

export default Login