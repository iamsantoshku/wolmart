import React from 'react'
import Aboutnav from '../component/about/Aboutnav'
import Aboutmain from '../component/about/Aboutmain'
import Aboutmid from '../component/about/Aboutmid'
import Aboutend from '../component/about/Aboutend'

const About = () => {
  return (
    <div>
        <Aboutnav/>
        <div class="page-content">
            <Aboutmain/>
            <Aboutmid/>
            <Aboutend/>
        </div>
      
    </div>
  )
}

export default About
