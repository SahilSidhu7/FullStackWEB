import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onclick}>{props.text}</button>
  )
}

const StaticLine = ({name, value}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}

const Stats = ({good,neutral,bad}) => {
  if ((good+neutral+bad) == 0) {
    return (
      <>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
    <h1>statistics</h1>
    <table>
      <tbody>
      <StaticLine name={"good"} value={good}/>
      <StaticLine name={"neutral"} value={neutral}/>
      <StaticLine name={"bad"} value={bad}/>
      <StaticLine name={"all"} value={(good+bad+neutral)}/>
      <StaticLine name={"average"} value={((good-bad)/(good+neutral+bad))}/>
      <tr>
        <td>positive</td>
        <td>{((good)/(good+neutral+bad))*100}</td>
        <td>%</td>
      </tr>
      </tbody>
    </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onclick={()=>setGood(good+1)} text="good"/>
      <Button onclick={()=>setNeutral(neutral+1)} text="neutral"/>
      <Button onclick={()=>setBad(bad+1)} text="bad"/>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App