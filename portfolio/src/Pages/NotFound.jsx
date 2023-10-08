
const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-header">404 - Nothing exists here.</h1>
      <img className="error-icon" src="/error.png" />
      <a className="not-found-anchor" href="/c">Click here to return home</a>
    </div>
  )
}

export default NotFound