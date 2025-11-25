function Content(props) {
  return (
    <div>
      {props.exercises.map((part) => (
        <p>{part.part} {part.exercises}</p>
      ))}
    </div>
  )
}

export default Content
