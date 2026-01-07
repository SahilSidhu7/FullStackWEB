import Total from './components/Total'
import Header from './components/Header'
import Content from './components/Content'

function Course(props) {
  return (
    <div key={props.course.id}>
        <Header course={props.course.name}/>
        <Content exercises={props.course.parts}/>
      <Total exercises={props.course.parts}/>
    </div>
  )
}

export default Course
