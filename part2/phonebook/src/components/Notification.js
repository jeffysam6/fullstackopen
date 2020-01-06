import React from 'react'
import '../index.css'

const Notification = ({ message }) => {
    if (message.length === 0) {
        return null
    }

    else{

    return (
        <div className="error">
            {message} is added
        </div>
    )
    }
}


export default Notification