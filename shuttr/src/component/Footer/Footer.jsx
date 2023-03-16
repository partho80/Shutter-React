import React from 'react'

function Footer() {
  return (
      <div>
           <footer id="footer" className="section">
    <div className="footer-section">
      <div className="footer-wrapper">
        <div className="container">
          <div className="row mb-5 row-align">
            <div className="col-lg-6 col-md-3 mb-4">
              <a href="index.html"><img className="main-logo" src="assets/img/logo.png" alt=""/></a>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="footer-faq">
                <h5>Need Any Help?</h5>
                <ul className="footer-top-ul">
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Get Started</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="hr-mod"/>
          <div className="row mt-5">
            <div className="col-md-5 mb-5">
              <h5 className="footer-top-title mb-4">About Company</h5>
              <p className="footer-desc mb-4">Nisl vel pretium lectus quam id leo in vitae turpis. Id leo in vitae turpis.
              </p>
              <ul className="footer-social">
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className="footer-top-title mb-4">Services</h5>
              <ul className="footer-item-collection">
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Branding Design</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className="footer-top-title mb-4">Resource</h5>
              <ul className="footer-item-collection">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Project</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="footer-top-title mb-4">Contact</h5>
              <ul className="footer-item-collection">
                <li><a href="#">(+00) 123 456 789</a></li>
                <li><a href="#">Infor@yourmail.com</a></li>
                <li><a href="#">www.yourdomain.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="footer-bottom-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <p className="copyright">©Copyright LuminousLabs 2022</p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="footer-payment">
              <ul className="payment-collection">
                <li>
                  <a href="#">
                    <img src="assets/img/payment1.png" alt=""/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/payment2.png" alt=""/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/payment3.png" alt=""/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/payment4.png" alt=""/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
{/* / <!-- scroll top start --> */}
  <a className="material-scrolltop">
    <i className="fas fa-arrow-circle-up"></i>
  </a>
  {/* <!-- scroll top end -->
  <!-- Modal --> */}
  <div className="modal fade" id="cartModal" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {/* <!-- Cart Table Start --> */}
          <section id="cart-Table">
            <div className="container">
              <div className="cart-table-section mb-5">
                <table id="cartTable" className="cartTable">
                  <thead>
                    <tr>
                      <th scope="col" className="cth-first"></th>
                      <th scope="col" className="cth-second">Product</th>
                      <th scope="col" className="cth-third">Price</th>
                      <th scope="col" className="cth-fourth">Quantity</th>
                      <th scope="col" className="cth-fifth">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label=""><a href="#"><i className="fa fa-times" aria-hidden="true"></i></a></td>
                      <td data-label="Product"><img className="cart-product-img" src="assets/img/product.jpg" alt=""/></td>
                      <td data-label="Price">$320.00</td>
                      <td data-label="Quantity">
                        {/* <!-- Increment-Decrement Start --> */}
                        <div className="quantity-wrapper">
                          <div className="product-quantity">
                            <p className="input-number-decrement">-</p>
                            <input id="demoInput1" className="demoInput input-number" type="number" min="1" max="100"
                              value="1"/>
                            <p className="input-number-increment">+</p>
                          </div>
                        </div>
                        {/* <!-- Increment-Decrement End --> */}
                      </td>
                      <td data-label="Total">$320.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          {/* <!-- Cart Table End --> */}
        </div>
        <div className="modal-footer">
          <a href="" className="btn btn-custom btn-fill btn-black">Proceed to checkout</a>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Search Modal --> */}
  <div className="modal fade searchModal" id="searchModal" tabIndex="-1" role="dialog"  
    aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="modal-body">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..."/>
            <span className="input-group-btn">
              <button className="btn modal-btn-search" type="button"><i className="fa fa-search fa-fw"></i> Search</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Footer