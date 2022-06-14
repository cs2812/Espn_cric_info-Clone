import React from 'react'
import Footer from '../components/Footer/Footer'
import LeftSideBar from '../components/LeftSideBar/LeftSideBar'
import LiveScore from '../components/Live/LiveScore'
import Navbar from '../components/Navbar/Navbar'
import News from '../components/News/News'
import RightSideBar from '../components/RighSidebar/RightSideBar'
import styles from "./home.module.css"
const Home = () => {
  return (
    <div className={styles.container}>
        <div>
            <LiveScore/> 
            <Navbar/>
        </div>
        <div className={styles.homeflex} >
            <LeftSideBar/>
            <News/>
            <RightSideBar/>
        </div>
        <div>
            <Footer/>
        </div>
      
    </div>
  )
}

export default Home
