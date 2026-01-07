function Content(props) {
  return (
    <div>
      {props.exercises.map((part) => (
        <p key={part.id}>{part.name} {part.exercises}</p>
      ))}
    </div>
  )
}

export default Content
