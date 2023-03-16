import React from 'react'

function Savings() {
  return (
      <div>
           <section id="savings" className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
                          <div className="savings-content-wrapper" style={{ backgroundImage: `url('assets/img/savings-left.jpg')` }} >
            <div className="savings-content">
              <p className="text-custom">save 30%</p>
              <h1 className="saving-title">women</h1>
              <a href="shop.html" className="btn btn-custom">shop now</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
                          <div className="savings-content-wrapper" style={{ backgroundImage: `url('assets/img/savings-right.jpg')` }}>
            <div className="savings-content">
              <p className="text-custom">save 30%</p>
              <h1 className="saving-title">man</h1>
              <a href="shop.html" className="btn btn-custom btn-gray">shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Savings