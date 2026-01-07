import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Form from './components/Form'
import Filter from './components/Filter'
import serv from './server'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [search,setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [message,setMessage] = useState(null)
  
  const load = () => {
    serv.getAll().then(res=>setPersons(res))
  }

  useEffect(load,[])
  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} error={true}/>
      <Notification message={message} error={false}/>
      <Filter search={search} setSearch={setSearch}/>
      <h3>add a new</h3>
      <Form setPersons={setPersons} persons={persons} create={serv.create} update={serv.update} setMes={setMessage}/>
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} remove={serv.remove} setPersons={setPersons} setErrorMes={setErrorMessage}/>
    </div>
  )
}

export default App