import React from 'react'
import CartBody from '../component/Cart/CartBody'
import CartTopbanner from '../component/Cart/cartTopbanner'
import Membership from '../component/Membership/Membership'

function Cart() {
  return (
      <div>
          <CartTopbanner />
          <CartBody />
          <Membership/>
    </div>
  )
}

export default Cart