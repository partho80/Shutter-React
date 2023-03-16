import React from 'react'
import ContactBody from '../component/Contact/ContactBody'
import ContactTopbanner from '../component/Contact/ContactTopbanner'
import Membership from '../component/Membership/Membership'

function Contact() {
  return (
      <div>
          <ContactTopbanner />
          <ContactBody />
          <Membership/>
    </div>
  )
}

export default Contact