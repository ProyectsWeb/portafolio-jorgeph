import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Menu from './Menu'

import styles from '../scss/Header.module.scss'
import BtnMenuBars from './../components/BtnMenuBars'


export const Header = () => {
   const [menu, setMenu] = useState(false); 
   const viewMenu = () => setMenu(!menu); 
 
  return (
    <div className={styles.header}>
      {menu ? <Menu menu={menu}/> : <Menu menu={menu} />} 
    </div>
  )
}
