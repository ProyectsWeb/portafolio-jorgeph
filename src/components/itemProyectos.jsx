import React from 'react'
import styles from '../scss/itemProyectos.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const ItemProyectos = () => {

  return (
    <main className={styles.item_servicios} id='proyectos'>
      <h2 className={styles.title_proyectos}>PROYECTOS</h2>
      <div className={styles.container_servicios}>
     
        <div className={styles.box_servicio}>
          <Link href={'https://tecnobyte.tech/'} target='_blank'>
            <Image src={'/img/tecnobyte.jpeg'} width={360} height={360} className={styles.img_proyect}/>
          </Link>         

           <div className={styles.link_read}> 
            <span>Node.js,</span> <span>MongoDB,</span><span>JavaScript,</span><span>CSS</span>          
           </div> 
        </div>


        <div className={styles.box_servicio}>       
        <Link href={'https://proyectsweb.github.io/audifonos/'} target='_blank'>
            <Image src={'/img/sonido_profesional.jpeg'} width={360} height={360} className={styles.img_proyect}/>
          </Link>         

           <div className={styles.link_read}> 
            <span>HTML,</span> <span>CSS,</span><span>JavaScript,</span>          
           </div> 
        </div>


        <div className={styles.box_servicio}>
        <Link href={'https://zavanaf.vercel.app/fp/644e05d34ebaf5dd5f77606c'} target='_blank'>
            <Image src={'/img/landing_zavan.jpeg'} width={360} height={360} className={styles.img_proyect}/>
          </Link>         

           <div className={styles.link_read}> 
            <span>Next.js,</span> <span>CSS,</span><span>JavaScript,</span><span>MongoDB</span>          
           </div> 
        </div>


        <div className={styles.box_servicio}>
        <Link href={'https://bibliapp.vercel.app/'} target='_blank'>
            <Image src={'/img/bibliapp.png'} width={360} height={360} className={styles.img_proyect}/>
          </Link>         

           <div className={styles.link_read}> 
           <span>PWA,</span><span>JavaScript,</span> <span>CSS,</span><span>API</span>        
           </div> 
        </div>

        <div className={styles.box_servicio}>
        <Link href={'https://proyectsweb.github.io/design-zavan-js/'} target='_blank'>
            <Image src={'/img/design_zavan_js.jpeg'} width={360} height={360} className={styles.img_proyect}/>
          </Link>         

           <div className={styles.link_read}> 
           <span>JavaScript,</span> <span>CSS,</span>        
           </div> 
        </div>


        <div className={styles.box_servicio}>
        <Link href={'https://proyectsweb.github.io/ecommerce/'} target='_blank'>
            <Image src={'/img/muebles_tienda.jpeg'} width={360} height={360} className={styles.img_proyect}/>
          </Link>         

           <div className={styles.link_read}> 
           <span>HTML,</span><span>CSS,</span><span>JavaScript,</span>  
           </div> 
        </div> 

        </div>
    </main>  
  )
}

export default ItemProyectos