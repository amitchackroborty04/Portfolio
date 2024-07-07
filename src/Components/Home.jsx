import React from 'react'
import Continar from './Continar'
import Banner from './Banner'
import Expertise from './Expertise'
import Aboutme from './Aboutme'
import MyPortfolio from './MyPortfolio'
import Customertestimonials from './Customertestimonials'
import Skill from './Skill'
import Contact from './Contact'


const Home = () => {
  return (
    <div>
      <Banner/>
      <Expertise/>
      <Aboutme/>
      <Skill/>
      <MyPortfolio/>
      {/* <Customertestimonials/> */}
      <Contact/>
    </div>
  )
}

export default Home