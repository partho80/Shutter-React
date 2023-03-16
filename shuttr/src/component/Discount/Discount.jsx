import React from 'react'

function Discount() {
  return (
      <div>
          <section id="discount" className="section">
    <div className="discount-section">
      <div className="discount-main-wrapper">
                      <div className="discount-single" style={{ backgroundImage: `url('assets/img/discount-left.jpg')` }}>
          <div className="discount-content-wrapper">
            <div className="discount-content">
              <p className="discount-top">Final Education</p>
              <h1 className="discount-heading">Sandals & Flip Flops</h1>
              <p className="discount-ration">Up To 70% Off</p>
              <a href="shop.html" className="btn btn-custom">shop now</a>
            </div>
          </div>
        </div>

                      <div className="discount-single" style={{ backgroundImage: `url('assets/img/discount-right.jpg')` }}>
          <div className="discount-content-wrapper jc-start">
            <div className="discount-content">
              <p className="discount-top">Final Education</p>
              <h1 className="discount-heading">Denim & Mashmallow</h1>
              <p className="discount-ration">Up To 70% Off</p>
              <a href="shop.html" className="btn btn-custom">shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Discount