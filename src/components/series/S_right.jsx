import React from 'react'
import styles from "./Series.module.css"

const S_right = () => {
  return (
    <div className={styles.Sright}>
      <div className={styles.R_Task1}>
        <div className={styles.Rdiv1}>
          <h4>Top Wicket Takers</h4>
        </div>

        <div className={styles.Rdiv2}>
          <div className={styles.Rimg}>
          <img src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304100/304194.png" alt="" />
          </div>
            <div className={styles.RimgDetails}>
              <p>Bhuvneshwar Kumar  rm</p>
              <h2>6</h2>
              <p>innings:3 Average:12.83</p>
            </div>
        </div>
        <hr />

        <div className={styles.Rdiv2}>
          <div className={styles.Rimg}>
          <img src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/309100/309102.png" alt="" />
          </div>
            <div className={styles.RimgDetails}>
              <p>Harshal Patel rm</p>
              <h2>6</h2>
              <p>innings:3 Average:14.16</p>
            </div>
        </div>
        <hr />

        <div className={styles.Rdiv2}>
          <div className={styles.Rimg}>
          <img src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/312100/312155.png" alt="" />
          </div>
            <div className={styles.RimgDetails}>
              <p>Yuzvendta Chahal lbg  rm</p>
              <h2>4</h2>
              <p>innings:3 Average:23.75</p>
            </div>
        </div>
        <hr />
        <h3 className={styles.RTask1_h1}>View All Stats</h3>
      </div>

      <div className={styles.R_Task1}>
        <div className={styles.Rdiv1}>
          <h4>Top Run Scorers</h4>
        </div>

        <div className={styles.Rdiv2}>
          <div className={styles.Rimg}>
          <img src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/329300/329345.4.jpg" alt="" />
          </div>
            <div className={styles.RimgDetails}>
              <p>Ishan Kishan Ihb  rm</p>
              <h2>164</h2>
              <p>innings:3 Average:54.66</p>
            </div>
        </div>
        <hr />

        <div className={styles.Rdiv2}>
          <div className={styles.Rimg}>
          <img src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/317900/317958.jpg" alt="" />
          </div>
            <div className={styles.RimgDetails}>
              <p>Heinrich Klaasen rhb</p>
              <h2>110</h2>
              <p>innings:2 Average:55.00</p>
            </div>
        </div>
        <hr />

        <div className={styles.Rdiv2}>
          <div className={styles.Rimg}>
          <img src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/309100/309198.1.jpg" alt="" />
          </div>
            <div className={styles.RimgDetails}>
              <p>Shreyas Iyer  rhb</p>
              <h2>90</h2>
              <p>innings:3 Average:30.00</p>
            </div>
        </div>
        <hr />
        <h3 className={styles.RTask1_h1}>View All Stats</h3>
      </div>
    </div>
  )
}

export default S_right



/*



*/ 