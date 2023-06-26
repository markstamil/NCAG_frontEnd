import React from 'react'
import { Col, Modal, ModalBody, Row } from 'reactstrap'
import {
    UserOutlined,
    HomeOutlined,
    CalendarOutlined,
    MobileOutlined,
    BankOutlined,
} from '@ant-design/icons';
import InputGroup from '../UI/InputGroup';
import Buttons from '../UI/Buttons';
import { SubmitButtonProps } from './../../Assets/ButtonProperties/SubmitButtonProps';
import { CloseButtonProps } from './../../Assets/ButtonProperties/CloseButtonProps';

const ModalForm = ({ isOpen, callBackOnClose, header, callBackOnChange,callBackOnSubmit }) => {
    const handleOnChange = (e) => {
        callBackOnChange(e)
    }
    const handleSubmit = () => {
        callBackOnSubmit()
    }
    const handleClose = () => {
        callBackOnClose()
    }
    return (
        <div>
            <Modal isOpen={isOpen} size='lg'>
                <ModalBody>
                    <h3 className='text-center'>{header}</h3>

                    <Row>
                        <Col className='d-flex'>
                            <InputGroup name='Name'
                                callBackOnChange={handleOnChange}
                                type={'text'}
                            />
                            <InputGroup name='Address'
                                callBackOnChange={handleOnChange}
                                type={'textarea'}
                            />
                            <InputGroup name='EntryDate'
                                callBackOnChange={handleOnChange}
                                type={'date'}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col className='d-flex'>

                            <InputGroup name='MobileNo'
                                callBackOnChange={handleOnChange}
                                type={'text'}
                            />
                            <InputGroup name='Age'
                                callBackOnChange={handleOnChange}
                                type={'text'}
                            />
                            <InputGroup name='Office'
                                callBackOnChange={handleOnChange}
                                type={'text'}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex'>

                            <InputGroup name='Occupation'
                                callBackOnChange={handleOnChange}
                                type={'text'}
                            />
                            <InputGroup name='Nationality'
                                callBackOnChange={handleOnChange}
                                type={'text'}
                            />
                            <InputGroup name='Religion'
                                callBackOnChange={handleOnChange}
                                type={'text'}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex'>

                            <InputGroup name='PrayerRequest'
                                callBackOnChange={handleOnChange}
                                type={'text'}
                            />
                            <InputGroup name='PrayerRequest'
                                callBackOnChange={handleOnChange}
                                type={'text'}
                            />
                            <InputGroup name='AreaPastor'
                                callBackOnChange={handleOnChange}
                                type={'text'}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex'>
                            <InputGroup name='MaritalStatus'
                                callBackOnChange={handleOnChange}
                                type={'text'}
                            />
                            <InputGroup name='OldChurchID'
                                callBackOnChange={handleOnChange}
                                type={'text'}
                            />
                            <InputGroup name='Gender'
                                callBackOnChange={handleOnChange}
                                type={'select'}
                                selectModules={['Male', 'Female', 'Others']}
                            />
                        </Col>
                    </Row>
                    <Row >
                        <Col className='d-flex'>

                            <InputGroup name='Carecell'
                                callBackOnChange={handleOnChange}
                                type={'select'}
                                selectModules={['Yes', 'No']}
                            />
                        </Col>
                    </Row>







                    <Row>
                        <Col>
                            <Buttons name={'Submit'} style={SubmitButtonProps} callBackOnSubmit={handleSubmit} />
                            <Buttons name={'Close'} style={CloseButtonProps} callBackOnSubmit={handleClose} />
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ModalForm