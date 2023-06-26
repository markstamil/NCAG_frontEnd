import React, { useState } from 'react'
import { PlusCircleFilled } from '@ant-design/icons'
import { Row, Col } from 'reactstrap'
import Buttons from '../../Components/UI/Buttons'
import { SubmitButtonProps } from '../../Assets/ButtonProperties/SubmitButtonProps'
import ModalForm from '../../Components/Modals/ModalForm'
import Datatable from './../../Components/Table.js/Datatable';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formValues, setFormValues] = useState({
    Name: '',
    Address: '',
    EntryDate: '',
    MobileNo: '',
    Age: '',
    Office: '',
    Occupation: '',
    Nationality: '',
    Religion: '',
    PrayerRequest: '',
    AreaPastor: '',
    MaritalStatus: '',
    OldChurchID: '',
    Gender: '',
    Carecell: ''
  })
  const handleForm = () => {
    setIsOpen(true)
  }
  const hanldeClose = () => {
    setIsOpen(false)
  }
  const columns = [
    { Field: 'Name', 'headerName': 'Name' },
    { Field: 'Address', 'headerName': 'Address' },
    { Field: 'MobileNo', 'headerName': 'MobileNo' },
    { Field: 'Age', 'headerName': 'Age' },
    { Field: 'Area Pastor', 'headerName': 'AreaPastor' },
  ]
  const handleOnChangeForm = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmitForm = () => {
    console.log('data ', formValues)
  }
  return (
    <div >
      <ModalForm isOpen={isOpen}
        callBackOnClose={hanldeClose}
        callBackOnChange={handleOnChangeForm}
        header={'Add Members'}
        callBackOnSubmit={handleSubmitForm}
      />

      <Row className='d-flex justify-content-end flex-row'>
        <Col md='3' className='d-flex justify-content-end flex-row'>
          <Buttons
            name={<span className='mx-1'>Add Member</span>}
            style={SubmitButtonProps}
            icon={<PlusCircleFilled style={{ marginBottom: '5px' }} />}
            callBackOnSubmit={handleForm}
          />
        </Col>
      </Row>
      <Row>
        <Datatable columns={columns} rowdata={[]} width={'100%'} />
      </Row>
    </div>
  )
}

export default Home