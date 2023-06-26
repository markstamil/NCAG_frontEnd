import React from 'react'
import { Button } from 'reactstrap'

const Buttons = ({ callBackOnSubmit, style, name,icon }) => {
    return (
        <Button style={style} onClick={callBackOnSubmit} >{icon} {name}</Button>
    )
}

export default Buttons