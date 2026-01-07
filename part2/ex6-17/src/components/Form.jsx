import {useState} from 'react'

function Form({setPersons,persons,create,update,setMes}) {
    const [newName, setNewName] = useState('')
    const [newNum, setNum] = useState('')

    const addName = (e) => {
        e.preventDefault()
        const num = newNum
        const name = newName
        setNewName('')
        setNum('')
        const found = persons.find((person) => person.name.toLowerCase() == newName.toLowerCase())
        if (found) {
            const isConfirmed = confirm(`${name} is already added to phonebook, replace the old number with a new one?`)
            if(isConfirmed){
                setPersons(persons.map(p => {
                    if(found.id == p.id){
                        return {...found,"number":num}
                    }
                    return p
                }))
                update(found.id,found,num)
                setMes(`Number changed for ${name}`)
                setTimeout(() => {
                    setMes(null)
                }, 5000)
            } 
            return
        }
        const promise = create({name: name,number: num});
        setMes(`Added ${name}`)
        setTimeout(() => {
            setMes(null)
        }, 5000)
        promise.then(res=>setPersons(persons.concat(res)))
    }

    return (
        <div>
        <form onSubmit={addName}>
            <div>
            name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
            </div>
            <div>number: <input value={newNum} onChange={(e) => setNum(e.target.value)}/></div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
        </div>
    )
}

export default Form
