import React from 'react'

import { LeftSideBar } from './components/SideBars/LeftSideBar'
import { RightSideBar } from './components/SideBars/RightSideBar'
import Featured from './Content/Featured'
import MainContent from './Content/MainContent'

const Home = () => {
  return (
    <>
         <main className="container mx-auto px-4 py-8">
        {/* Featured Post */}
        <Featured/>

           <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
            <LeftSideBar/>

          {/* Main Content */}
            <MainContent/>

          {/* Right Sidebar */}
            <RightSideBar/>
          </div>
    </main> 
    </>
  )
}

export default Home