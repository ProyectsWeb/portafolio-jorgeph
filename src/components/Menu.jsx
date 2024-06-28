import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../scss/Menu.module.scss'


function Menu({menu})  { 
  const [menuY, setMenuY] = useState(`${styles.menu}`); 
  const menuH = () => setMenuY(`${styles.hidden}`);
  const menuVer = () => setMenuY(`${styles.menu_vertical}`);  
    
  useEffect((e)=>{
    function cambiarPantalla(e){ 
      console.log(e)
      e.currentTarget.outerWidth <= 900 ?  menuVer() : menuH();            
    }

    !menu ? menuH() : menuVer();  
    window.addEventListener('resize', cambiarPantalla );
  },[menu]);  

  return (  
    <nav className={`${styles.menu}`}>
      <Link className={styles.link_menu} href="#sobre-mi">Sobre Mi</Link>
      <Link className={styles.link_menu} href="#habilidades">Habilidades</Link>
      <Link className={styles.link_menu} href="#proyectos">Proyectos</Link>
      <Link className={styles.link_menu} href="#educacion">Educacion</Link>
      <Link className={styles.link_menu} href="#experiencia">Experiencia</Link>
      <Link className={styles.link_menu} href="#contacto">Contacto</Link>
    </nav>
  )
}

export default Menu