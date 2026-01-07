function Persons({persons,search,remove,setPersons,setErrorMes}) {
  const del = (id,name) => {
    const isConfirmed = confirm(`Delete ${name} ?`)
    if(isConfirmed){
      remove(id).catch(() => {
        setErrorMes(`Information of ${name} has already been removed from server`)
        setTimeout(() => {
          setErrorMes(null)
        }, 5000)
      })
      setPersons(persons.filter(per => per.id != id))
    }
  }
  return (
    <>
    {persons.map((person,i) =>  {
      if (person.name.toLowerCase().includes(search.toLowerCase())){
        return <div key={i}>{person.name} {person.number} <button onClick={()=>del(person.id,person.name)}>delete</button></div>
      }
    })}
    </>
  )
}

export default Persons
