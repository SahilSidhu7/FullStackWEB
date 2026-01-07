const Notification = ({ message , error}) => {
  if (message === null) {
    return null
  }

  if (error){
    return (
        <div className="error">
        {message}
        </div>
    )
  } else {
    return (
        <div className="error" style={{color:'green'}}>
        {message}
        </div>
    )
  }
}

export default Notification