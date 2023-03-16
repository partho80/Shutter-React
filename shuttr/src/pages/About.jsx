import React from 'react'
import AboutBody from '../component/About/AboutBody'
import AboutTopbanner from '../component/About/AboutTopbanner'
import Membership from '../component/Membership/Membership'
import TeamMember from '../component/TeamMember/TeamMember'

function About() {
  return (
      <div>
          <AboutTopbanner />
          <AboutBody />
          <TeamMember />
          <Membership/>
    </div>
  )
}

export default About