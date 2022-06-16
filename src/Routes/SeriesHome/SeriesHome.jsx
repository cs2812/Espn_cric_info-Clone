import React from 'react'
import Snavbar from '../../components/series/Snavbar'
import S_left from '../../components/series/S_left'
import S_mide from '../../components/series/S_mide'
import S_right from '../../components/series/S_right'
import styles from "./SH.module.css"

const SeriesHome = () => {
  return (
    <>
    <Snavbar/>
    <div className={styles.Shome} >
        <S_left/>
        <S_mide/>
        <S_right/>
      
    </div>
    </>
   
  )
}

export default SeriesHome
