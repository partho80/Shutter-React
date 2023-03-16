import React from 'react'

function CartBody() {
  return (
      <div>
           <section id="cart-Table-page" className="section">
    <div className="container">
      <div className="cart-table-section mb-5">
        <table id="cartTable-page" className="cartTable">
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
                <div className="quantity-wrapper py-4">
                  <div className="product-quantity">
                    <p className="input-number-decrement">-</p>
                    <input id="demoInput" className="demoInput input-number" type="number" min="1" max="100" value="1"/>
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

      <div className="cart-buttons-wrapper">
        <div className="cart-buttons-left">
          <div className="form-group mb-0 mr-4">
            <input type="text" className="form-control coupon-input-2" id="coupon" placeholder="Coupon Code"/>
          </div>
          <a href="#" className="btn btn-custom btn-fill btn-black">Apply Coupon</a>
        </div>
        <a href="#" className="btn btn-custom btn-fill btn-black">Update Cart</a>
      </div>
    </div>
  </section>
  {/* <!-- Cart Table End -->


  <!-- Cart Total Section Start --> */}
  <section id="cartTotal" className="section">
    <div className="cart-total-section">
      <div className="container">
        <div className="section-top">
          <h3 className="section-top-title">Cart Total</h3>
        </div>

        <ul className="price-collection mb-4">
          <li>
            <h5>Sub Total</h5><span>$320.00</span>
          </li>
          <li>
            <h5>Total</h5><span>$320.00</span>
          </li>
        </ul>
        <a href="" className="btn btn-custom btn-fill btn-black">Proceed to checkout</a>
      </div>
    </div>
  </section>
    </div>
  )
}

export default CartBody