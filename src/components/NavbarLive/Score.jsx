import React from 'react'
import styles from "./score.module.css"
import Navbar from '../Navbar/Navbar'
import RightSideBar from '../RighSidebar/RightSideBar'
const Score = () => {

 


  return (
    <div>
        <Navbar />
        <div className={styles.top} ><img src="https://tpc.googlesyndication.com/simgad/5784870444871888709?" alt="" /></div>
        <div className={styles.top1} >
            <div>Live <div className={styles.hr}></div></div>
            <div>Upcoming</div>
            <div>Competition</div>
        </div>

        <div className={styles.select}>
            <select><option value="">Format</option></select>
            <select><option value="">Teams</option></select>
            <select><option value="">Competitions</option></select> <div>RESET</div>
        </div>


       <div style={{
        "display": "flex"
       }} >  <div className={styles.matches}>

       <div>
          <div style={{
              "marginLeft": "20px"
          }} >TOP EVENTS</div> <hr /> <div style={{
              "marginLeft": "20px"
          }}>TODAY, 7:00 PM</div> <div style={{
              "marginLeft": "20px"
          }}>4th T20I (N), Rajkot, June 17, 2022, South Africa tour of India</div> <hr /> 
      <div className={styles.flag}> <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313128.logo.png" alt="" /> <div>INDIA</div></div>
      <div className={styles.flag} > <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313125.logo.png" alt="" /> <div>SOUTH AFRICA</div></div>
      <div style={{
              "marginLeft": "20px"
          }} >Match Yet to begin</div>
       </div>
       <div>

       <div style={{
              "marginLeft": "20px"
          }} >TOP EVENTS</div> <hr /> <div style={{
              "marginLeft": "20px"
          }}>TODAY, 2:30 PM</div> <div style={{
              "marginLeft": "20px"
          }}>1st ODI, Amstelveen, June 17, 2022, England tour of Netherlands</div> <hr /> 
      <div className={styles.flag}> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAGFBMVEWuHCj///8hRouuGiavFCP9+vr6+/0bRYylYjtoAAAA+0lEQVR4nO3QwQ2DAAwAsVCg7L8x/5zEBPYIngEAAAAAAAAAAAAAAAAAAAA+nWxzsc3NNgebk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUvNnm4dtfmxOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOakXRx3bJfcbBhUAAAAASUVORK5CYII=" alt="" /> <div>NETHERLANDS</div></div>
      <div className={styles.flag} > <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAKlBMVEX////OESTMAAnsrrPLAADwycvMAA3oqq3MABXxzs/jipDrqrD22tznpqnk47kCAAABl0lEQVR4nO3ayxGCABQEQVTwg5p/upJBH19RTkewNeddllnbeoF1G544rURUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRvZzoNb3xNmt/KtFzHx34/izXWSx0NBoduH4XT/xv90eJoERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiI9Hov+kcF6zRl9w5jnzDznAHHdapmEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaITJPoBwFdLuUzh4oMAAAAASUVORK5CYII=" alt="" /> <div>ENGLAND</div></div>
      <div style={{
              "marginLeft": "20px"
          }} >Match starts in 1 hr 20 mins</div>

       </div>
       <div>

       <div style={{
              "marginLeft": "20px"
          }} >TOP EVENTS</div> <hr /> <div style={{
              "marginLeft": "20px"
          }}>TODAY, 3:15 PM</div> <div style={{
              "marginLeft": "20px"
          }}>3rd ODI, Dublin, June 17, 2022, South Africa Women tour of Ireland</div> <hr /> 
      <div className={styles.flag}> <img src="https://www.cricketireland.ie/images/sized/images/uploads/news_images/CI_Logo-340x342.jpg" alt="" /> <div>Ireland Women</div></div>
      <div className={styles.flag} > <img src="https://s.ndtvimg.com/images/entities/300/south-africa-2117.png" alt="" /> <div>South Africa Women</div></div>
      <div style={{
              "marginLeft": "20px"
          }} >Match starts in 1 hr 59 mins</div>

       </div>
       <div>
       <div style={{
              "marginLeft": "20px"
          }} >TOP EVENTS</div> <hr /> <div style={{
              "marginLeft": "20px"
          }}>TODAY, 11:00 PM</div> <div style={{
              "marginLeft": "20px"
          }}>North Group (D/N), Chester-le-Street, June 17, 2022, Vitality Blast</div> <hr /> 
      <div className={styles.flag}> <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313255.logo.png" alt="" /> <div>Durham</div></div>
      <div className={styles.flag} > <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313281.logo.png" alt="" /> <div>Yorkshire</div></div>
      <div style={{
              "marginLeft": "20px"
          }} >Match yet to begin</div>

            
       </div>
       <div>
       <div style={{
              "marginLeft": "20px"
          }} >TOP EVENTS</div> <hr /> <div style={{
              "marginLeft": "20px"
          }}>TODAY, 11:00 PM</div> <div style={{
              "marginLeft": "20px"
          }}>North Group (D/N), Chester-le-Street, June 17, 2022, Vitality Blast</div> <hr /> 
      <div className={styles.flag}> <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/337600/337638.png" alt="" /> <div>Northamptonshire</div></div>
      <div className={styles.flag} > <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313271.logo.png" alt="" /> <div>Lancashire</div></div>
      <div style={{
              "marginLeft": "20px"
          }} >Match yet to begin</div>

       </div>
       <div>

       <div style={{
              "marginLeft": "20px"
          }} >TOP EVENTS</div> <hr /> <div style={{
              "marginLeft": "20px"
          }}>TODAY, 11:00 PM</div> <div style={{
              "marginLeft": "20px"
          }}>North Group (D/N), Nottingham, June 17, 2022, Vitality Blast</div> <hr /> 
      <div className={styles.flag}> <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313275.logo.png" alt="" /> <div>Nottinghamshire</div></div>
      <div className={styles.flag} > <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313279.logo.png" alt="" /> <div>Birmingham Bears</div></div>
      <div style={{
              "marginLeft": "20px"
          }} >Match yet to begin</div>
       </div>
        <div>

        <div style={{
              "marginLeft": "20px"
          }} >TOP EVENTS</div> <hr /> <div style={{
              "marginLeft": "20px"
          }}>TODAY, 11:00 PM</div> <div style={{
              "marginLeft": "20px"
          }}>North Group (D/N), Nottingham, June 17, 2022, Vitality Blast</div> <hr /> 
      <div className={styles.flag}> <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313267.logo.png" alt="" /> <div>Hampshire</div></div>
      <div className={styles.flag} > <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313268.logo.png" alt="" /> <div>Kent</div></div>
      <div style={{
              "marginLeft": "20px"
          }} >Match yet to begin</div>
        </div>
        <div>

        <div style={{
              "marginLeft": "20px"
          }} >TOP EVENTS</div> <hr /> <div style={{
              "marginLeft": "20px"
          }}>TODAY, 11:00 PM</div> <div style={{
              "marginLeft": "20px"
          }}>North Group (D/N), Nottingham, June 17, 2022, Vitality Blast</div> <hr /> 
      <div className={styles.flag}> <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313277.logo.png" alt="" /> <div>Surrey</div></div>
      <div className={styles.flag} > <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313273.logo.png" alt="" /> <div>Middlesex</div></div>
      <div style={{
              "marginLeft": "20px"
          }} >Match yet to begin</div>
        </div>
      </div> 
      <div className={styles.right} ><RightSideBar /></div>
        
       </div>
    </div>
  )
}

export default Score