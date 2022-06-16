import React from 'react'
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div class={styles.mainnav}><div class={styles.navbar}>
            <img class={styles.navimg} src="https://wassets.hscicdn.com/static/images/logo.png" alt="" />
            <div> Live Scores</div>
            <div>Series</div>
            <div>Teams</div>
            <div> News</div>
            <div>Features</div>
            <div> Videos</div>
            <div>Stats</div>
            <div> Editions</div>
            <img class={styles.navimg} src="https://cdn-icons-png.flaticon.com/128/66/66275.png" alt="" />
            <img class={styles.navimg} src="https://cdn-icons-png.flaticon.com/128/3898/3898840.png" alt="" />
            <img class={styles.navimg} src="https://cdn-icons-png.flaticon.com/128/3603/3603178.png" alt="" />
            <img class={styles.navimg} src="https://cdn-icons-png.flaticon.com/128/49/49116.png" alt="" />
    </div></div>
  )
}

export default Navbar
