import React from 'react'
import Homeintro from './Homeintro'
import Homeswipe from './Homeswipe'
// import Catogryba from './CategoryBanner'
import CategoryBanner from './CategoryBanner'
import Categorymonth from './Categorymonth'
import Populardeprt from './Populardeprt'
import Homeintroo from './Homeintroo'
import Deals from './Deals'
import Banner1 from './Banner1'
import Clothingbann from './Clothingbann'
import Banner3 from './Banner3'
import Ourclient from './Ourclient'
import Fromblog from './Fromblog'

const Home = () => {
  return (
    <div class="home">
      <div class="page-wrapper">
        <main class="main">
          {/* <Homeintro /> */}
          <Homeintroo/>
          <div class="container">
            <Homeswipe />
            {/* <Catogryba/> */}
            {/* <CategoryBanner/> */}
            <Deals/>
            <Categorymonth/>
            <Populardeprt/>
            <Banner1/>
            <Clothingbann/>
            <Banner3/>
            <Ourclient/>
            <Fromblog/>
          </div>

        </main>

      </div>


    </div>

  )
}

export default Home
