import React from 'react'

function ErrorBody() {
  return (
      <div>
           <section className="error-page-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-img">
            <img src="assets/img/404.jpg" alt=""/>
            <a className="btn btn-custom btn-fill btn-arrow" href="index.html">Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default ErrorBody