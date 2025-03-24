import React from 'react'
import Homeintro from './Homeintro'
import Homeswipe from './Homeswipe'
// import Catogryba from './CategoryBanner'
import CategoryBanner from './CategoryBanner'
import Categorymonth from './Categorymonth'
import Populardeprt from './Populardeprt'
import Homeintroo from './Homeintroo'

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
            <Categorymonth/>
            <Populardeprt/>
          </div>

        </main>

      </div>


    </div>

  )
}

export default Home
