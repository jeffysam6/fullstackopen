import React,{useState} from 'react'
import axios from 'axios'
import personService from '../services/database'
import Notification from './Notification'



const PersonForm = ({ persons, setPersons, errorMessage, setErrorMessage}) => {

    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')

    const handlePersonChange = (event) => {

        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    const addPerson = (event) => {
        const ppl = persons.map(p => p.name)
        const phn = persons.map(p => p.phone)
        if (ppl.includes(newName)) {
            alert(`${newName} is already added to phonebook`)
        }

        else if (phn.includes(newPhone)) {
            alert(`${newPhone} is already added to phonebook`)
        }

        else {
            
           

            event.preventDefault()
            const personObject = {
                name: newName,
                number: newPhone
            }
            
            personService
            .update(personObject)
            .then(response=>{
                    setPersons(persons.concat(personObject))
                    setErrorMessage(newName)
                    setNewName('')
                    setNewPhone('')

            
                    
                })
            


        }

    }

    return (
        <form onSubmit={addPerson}>
            <div>
                
                name: <input value={newName} onChange={handlePersonChange} />
            </div>
            <div>
                number: <input value={newPhone} onChange={handlePhoneChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}



export default PersonForm