import React from 'react'
import ErrorBody from '../component/Error/ErrorBody'
import ErrorTopbanner from '../component/Error/ErrorTopbanner'
import Membership from '../component/Membership/Membership'

function Error() {
  return (
      <div>
          <ErrorTopbanner />
          <ErrorBody />
          <Membership/>
    </div>
  )
}

export default Error