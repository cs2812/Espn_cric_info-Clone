import React from 'react'
import Footer from '../components/Footer/Footer'
import LeftSideBar from '../components/LeftSideBar/LeftSideBar'
import LiveScore from '../components/Live/LiveScore'
import Navbar from '../components/Navbar/Navbar'
import News from '../components/News/News'
import RightSideBar from '../components/RighSidebar/RightSideBar'
import SeriesHome from '../Routes/SeriesHome/SeriesHome'
import Video from '../Routes/Video/Video'
import styles from "./home.module.css"
import ReactDOM from "react-dom/client";
import Feature from '../Routes/feature/Feature'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <Navbar />
        <LiveScore />

      </div>
      <div className={styles.homeflex} >
        
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LeftSideBar />}>
            </Route>
          </Routes>
          <Routes>
            <Route path="/" element={<News />}>
            </Route>
          </Routes>
          <Routes>
            <Route path="/feature" element={<Feature />}>
            </Route>
          </Routes>
    <RightSideBar />
            
        </BrowserRouter>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Home
