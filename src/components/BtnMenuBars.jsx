import React, { useRef } from 'react'
import styles from '../scss/BtnMenuBars.module.scss'

const BtnMenuBars = ({viewMenu}) => {       
    const menuBars = useRef();
    const clickMenu = (e) => viewMenu(true);    

  return (
    <button ref={menuBars} onClick={ (e)=>{clickMenu(e)} } className={`${styles.panel_btn} `}>
        <i className="fa fa-bars" aria-hidden="true"></i>
    </button> 
  )
}

export default BtnMenuBars