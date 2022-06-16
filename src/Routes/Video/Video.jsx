import React from 'react'
import styles from "./video.module.css"

function Video() {
  return (
    <div className={styles.container}>
        <div className={styles.V_firstdiv}>
            
                <div className={styles.V_firstdiv_p}>
                    <p style={{color:"#03a9f4"}}>Switch Hit</p>
                    <h3>Ehantharajah: New iteration of Bairstow could be best ever</h3>
                    <p>The Switch Hit team assess how Brendon McCullum's <br /> approach to Test cricket could bring the best out of Jonny <br /> Bairstow</p>
                    <p>Jun 15 2022</p>
                </div>
        
            <div className={styles.firstdivimg}>
                <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1120/esci/media/motion/2022/0615/dm_220615_COM_CRIC_Analysis_Ehantharajah_New_iteration_of_Bairstow_could_be_the_best_ever_20220615/dm_220615_COM_CRIC_Analysis_Ehantharajah_New_iteration_of_Bairstow_could_be_the_best_ever_20220615.jpg" alt="" />
                <i class="fa-regular fa-circle-play"></i>

            </div>
        </div>

        <div className={styles.Feat}>
            <h1>Featured videos</h1>
            <p style={{color:"#03a9f4"}}>View all videos <i class="fa-solid fa-arrow-right"></i></p>
        </div>

        <div className={styles.V_secondDiv}>
            <div className={styles.VS}>
                <div className={styles.VS1}>
                    <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/esci/media/motion/2022/0615/dm_220615_INET_CRIC_news_ipl_media_rights_non-branded_GLOBAL/dm_220615_INET_CRIC_news_ipl_media_rights_non-branded_GLOBAL.jpg" alt="" />
                    <i class="fa-regular fa-circle-play"></i>
                
                </div>
                <div className={styles.VS2}>
                    <h4>Just how massive is the IPL's new media-rights deal ?</h4>
                    <p>Jun 15. 2022</p>
                </div>
            </div>
            <div className={styles.VS}>
                <div className={styles.VS1}>
                    <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/esci/media/motion/2022/0614/dm_220614_COM_CRIC_Analysis_PoliteEnquiries_CARNAGE_20220614_GLOBAL/dm_220614_COM_CRIC_Analysis_PoliteEnquiries_CARNAGE_20220614_GLOBAL.jpg" alt="" />
                    <i class="fa-regular fa-circle-play"></i>
                
                </div>
                <div className={styles.VS2}>
                    <h4>Just how massive is the IPL's new media-rights deal ?</h4>
                    <p>Jun 15. 2022</p>
                </div>
            </div>
            <div className={styles.VS}>
                <div className={styles.VS1}>
                    <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/esci/media/motion/2022/0613/dm_220613_INET_CRIC_indvsa2022_time_out_pantchat_non-branded_GLOBAL/dm_220613_INET_CRIC_indvsa2022_time_out_pantchat_non-branded_GLOBAL.jpg" alt="" />
                    <i class="fa-regular fa-circle-play"></i>
                
                </div>
                <div className={styles.VS2}>
                    <h4>Just how massive is the IPL's new media-rights deal ?</h4>
                    <p>Jun 15. 2022</p>
                </div>
            </div>
            <div>
                <div className={styles.VS1}>
                    <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/esci/media/motion/2022/0613/dm_220613_INET_CRIC_indvsa2022_time_out_3rdt20ipre_non-branded_GLOBAL/dm_220613_INET_CRIC_indvsa2022_time_out_3rdt20ipre_non-branded_GLOBAL.jpg" alt="" />
                    <i class="fa-regular fa-circle-play"></i>
                
                </div>
                <div className={styles.VS2}>
                    <h4>Just how massive is the IPL's new media-rights deal ?</h4>
                    <p>Jun 15. 2022</p>
                </div>
            </div>
        </div>
        <div className={styles.Feat}>
            <h1>ESPNcricinfo shows</h1>
        </div>

        <div className={styles.VhtirdDiv}>
            <div  style={{backgroundColor:"#182862 " }}>
                <div className={styles.VT1}>
                <img src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/340800/340880.png" alt="" />
                </div>
            </div>
            <div  style={{backgroundColor:"#182862" }}>
                <div className={styles.VT1}>
                <img src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/340800/340881.png" alt="" />
                </div>
            </div>
            <div  style={{backgroundColor:"#de4141 " }}>
                <div className={styles.VT1}>
                <img src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/327300/327356.png" alt="" />
                </div>
            </div>
            <div  style={{backgroundColor:" #256ed0" }}>
                <div className={styles.VT1}>
                <img src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/329100/329140.png" alt="" />
                </div>
            </div>
            <div  style={{backgroundColor:"#007e93 " }}>
                <div className={styles.VT1}>
                <img src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/336600/336683.png" alt="" />
                </div>
            </div>
            <div  style={{backgroundColor:" #26617d " }}>
                <div className={styles.VT1}>
                <img src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/317700/317739.png" alt="" />
                </div>
            </div>
            
            <div  style={{backgroundColor:"#25c57d" }}>
                <div className={styles.VT1}>
                <img src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/317700/317737.png" alt="" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Video


// style={{backgroundColor:"#182862 " }}