import React from 'react'

import AboutMe from './AboutMe'
import Resume from './Resume'
import Education from './Education'
import Skills from './Skills'
import Hobbies from './Hobbies'

const HashLinkPage = () => (
  <div>
    <section id="abo">
      <AboutMe />
    </section>
    <section id="exp">
      <Resume />
    </section>
    <section id="edu">
      <Education />
    </section>
    <section id="ski">
      <Skills />
    </section>
    <section id="hob">
      <Hobbies />
    </section>
  </div>
)

export default HashLinkPage
