import React from 'react'
import Image from 'next/image'

import styles from '../scss/HomePresent.module.scss'

import RedesSociales from '@/components/RedesSociales'

const SeccionMain = () => {

  return (
    <section className={styles.seccion_main}>

     <div className={styles.titulos_main}>
        <RedesSociales />       
        <h1 className={styles.h1_main}>Hola, yo soy Jorge Peraza</h1>   
        <div className={styles.btn_main}>
        <p className={styles.parrafo_start}>Desarrollador web fullstack</p>
        </div>
     </div>

     <div className={styles.container_img_main_present}>
     <Image src="/img/mifoto.webp" 
     width={400}
     height={300}
     priority      
     className={styles.imagen_main}
     alt="presentacion zavan" /> 
      </div>

  </section>
  )
}

export default SeccionMain