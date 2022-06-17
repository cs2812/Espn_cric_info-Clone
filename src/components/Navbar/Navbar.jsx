import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.mainnav}><div className={styles.navbar}>
            <img className={styles.navimg} src="https://wassets.hscicdn.com/static/images/logo.png" alt="" />
            <div> Live Scores</div>
            <div>Series</div>
            <div>Teams</div>
            <div> News</div>
            <div>
            Features
            </div>
            <div> Videos</div>
            <div>Stats</div>
            <div> Editions</div>
            <img className={styles.navimg} src="https://cdn-icons-png.flaticon.com/128/66/66275.png" alt="" />
            <img className={styles.navimg} src="https://cdn-icons-png.flaticon.com/128/3898/3898840.png" alt="" />
            <img className={styles.navimg} src="https://cdn-icons-png.flaticon.com/128/3603/3603178.png" alt="" />
            <img className={styles.navimg} src="https://cdn-icons-png.flaticon.com/128/49/49116.png" alt="" />
    </div></div>
  )
}

export default Navbar
