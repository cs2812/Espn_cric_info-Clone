import React from 'react'
import styles from "./Feature.module.css"

function Feature() {
  return (
    <div class={styles.feature}>
      Features
      <hr />
      <div>
        <div className={styles.imgdivfeature}>
          <center> <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/341100/341107.6.jpg" alt="" /></center>
         
        </div>
        <div className={styles.textdivfeature}></div>
      </div>
    </div>
  )
}

export default Feature