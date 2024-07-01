import React from 'react'
import Continar from './Continar'
import Banner from './Banner'
import Expertise from './Expertise'
import Aboutme from './Aboutme'
import MyPortfolio from './MyPortfolio'
import Customertestimonials from './Customertestimonials'


const Home = () => {
  return (
    <div>
      <Banner/>
      <Expertise/>
      <Aboutme/>
      <MyPortfolio/>
      <Customertestimonials/>
    </div>
  )
}

export default Home