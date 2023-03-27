import React from 'react'
import { Link } from 'react-router-dom'


function ErrorBody() {
  return (
      <div>
           <section className="error-page-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-img">
            <img src="assets/img/404.jpg" alt=""/>
            <Link className="btn btn-custom btn-fill btn-arrow" to='/'>Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default ErrorBody