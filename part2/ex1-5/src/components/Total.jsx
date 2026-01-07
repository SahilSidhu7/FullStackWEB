function Total(props) {
  return (
    <div>
      <h4 >Total of {
        props.exercises.reduce((a,b) => a + b.exercises,0)
      } exercises</h4>
    </div>
  )
}

export default Total
