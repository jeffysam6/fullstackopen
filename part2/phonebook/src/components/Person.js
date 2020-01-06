import React from 'react'
import personService from '../services/database'

const Person = ({keys,name,phone,deleteEntry}) => {
    


    return (
        <li key={keys}>
            {name} {phone}
            <button onClick={deleteEntry}>Delete</button>
        </li>
    )
}



export default Person