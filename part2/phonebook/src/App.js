import React, { useState, useEffect} from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filtered from './components/Filtered'
import Notification from './components/Notification'
import axios from 'axios'
import personService from './services/database'





const App = () => {
  const [persons, setPersons] = useState([

  ])

  const [filter, setFilter] = useState("")

  const [errorMessage, setErrorMessage] = useState('')
 


  useEffect(() => {
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  },[])

  const ppl = persons.map(p => [p.name, p.number,p.id])
  
  const filtered = ppl.filter(q => q[0].toLowerCase().startsWith(filter))
 

  const deleteEntryOf = ids =>
  {
    const del = persons.find(n=>n.id===ids)

    console.log("ids",ids)
    if (window.confirm('Delete?')) {
      
    
    axios
      .delete('http://localhost:3001/persons/' + ids)
      .then(personService.getAll().then(response=>{setPersons(response.data)}))
    }
      
  }
  const rows = () => filtered.map(f =>
    <Person
      keys={f[2]}
      name={f[0]}
      phone={f[1]}
      deleteEntry={()=> deleteEntryOf(f[2])}
    />
  )

  return (
    <div>

      
      <h2>Phonebook</h2>

      <Notification message={errorMessage} />

      <Filtered filter={filter} setFilter={setFilter} />

      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setErrorMessage={setErrorMessage}/>
      <h2>Numbers</h2>
      
      <ul>
        {rows()}
      </ul>
      

    </div>
   

  )
}

export default App