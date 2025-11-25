function Total(props) {
  return (
    <div>
      <p>Number of exercises {
        props.exercises.reduce((a,b) => a + b.exercises,0)
      }</p>
    </div>
  )
}

export default Total
