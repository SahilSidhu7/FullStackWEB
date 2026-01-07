import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react";
import Result from './components/Result'

const List = ({filtered,showResult}) => {
  if (filtered.length == 1){
    return null
  }
  if (filtered.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }
  return filtered.map((data,i)=>{return <div key={i}>{data} <button onClick={()=>showResult(i)}>show</button></div>})
}

function App() {
  const [countries,setCountries] = useState([])
  const [filtered,setFiltered] = useState([])
  const [value,setValue] = useState('')
  const [result,setResult] = useState(null)
  const url = 'https://studies.cs.helsinki.fi/restcountries/api'

  useEffect(()=>{
    axios.get(`${url}/all`).then(res => setCountries(res.data.map(c => c.name.common)))
  },[])

  const showResult = (i) => {
    setValue(filtered[i])
  }

  useEffect(()=>{
    setResult(null)
    const filteredData = countries.filter((data) => data.toLowerCase().includes(value.toLowerCase()))
    setFiltered(filteredData)
    if(filteredData.length == 1) {
      axios.get(`${url}/name/${filteredData[0]}`).then(res=>setResult(res.data))
    }
  },[value,countries])


  return (
    <div>
      find countries <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <Result data={result}/>
      <List filtered={filtered} showResult={showResult}/>
    </div>
  )
}

export default App
