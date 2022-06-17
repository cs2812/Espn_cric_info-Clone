import React from "react";
import Footer from "../components/Footer/Footer";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import LiveScore from "../components/Live/LiveScore";
import Navbar from "../components/Navbar/Navbar";
import News from "../components/News/News";
import RightSideBar from "../components/RighSidebar/RightSideBar";
import SeriesHome from "../Routes/SeriesHome/SeriesHome";
import Video from "../Routes/Video/Video";
import styles from "./home.module.css";
import Teams from "../components/Teams/Teams"
import Score from "../components/NavbarLive/score";
const Home = () => {
  return (
    <div className={styles.container}> 
        <div>
            <LiveScore/> 
           
        </div>
        <div className={styles.homeflex} >
            <LeftSideBar/>
            <News/>
            <RightSideBar/>
        </div>
        
        <div>
            <Footer/>
        </div>

<<<<<<< HEAD
      <div>
        <Footer />
      </div> */}
      {/* <Teams/> */}
      <Score />
=======
  
>>>>>>> 0dd3f1237213437f78795427bd31ca0cfdf30251
    </div>
  );
};

export default Home;
