import React from 'react'
import Image from 'next/image'

import styles from '../scss/SeccionMain.module.scss'

import RedesSociales from '@/components/RedesSociales'
import Link from 'next/link'

const SeccionMain = () => {

  return (
    <section className={styles.seccion_main}>
     <div className={styles.titulos_main}>     
      <h2 className={styles.h1_main}>Desarrollo web y soluciones digitales a medida.</h2>     
      <Link href={'#contacto'} className={styles.link_contacto}>  
      <div className={styles.btn_main}><p className={styles.parrafo_start}>Contacto</p></div>
      </Link>
     </div>

    <div className={styles.container_img_main}>
     <Image src="/img/illustration-5.webp" 
     width={400}
     height={200}
     priority      
     className={styles.imagen_main}
     alt="presentacion zavan" /> 
    </div>

  </section>
  )
}

export default SeccionMain