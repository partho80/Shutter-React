import React from 'react'

function ContactTopbanner() {
  return (
      <div>
          <div className="top-banner" style={{ backgroundImage: `url('assets/img/banner.jpg')` }}>
    <div className="container">
      <div className="row">
        <div className="banner-title">
          <h2>Contact Us</h2>
          <div className="banner-breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ContactTopbanner