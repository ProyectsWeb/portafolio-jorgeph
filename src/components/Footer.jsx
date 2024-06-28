import React from 'react'
import styles from '../scss/Footer.module.scss'
import Image from 'next/image'

const Footer = () => {
  return (  
   <footer className={styles.footer} id='contacto'>
    <div className={styles.container_footer}>

        <div className={styles.container_logo_footer}>
          <form action='#' className={styles.btn_suscribir}>                  
           <input  placeholder="Ingresa tu Email" className={styles.input_footer} type="email"/>            
           <button className={styles.btm_footer}>CONTACTO</button>              
         </form>
        </div> 

            <div className={styles.enlaces_footer}>
              <h3>Enlaces Utiles</h3>
              <a href="#">Google</a>
              <a href="https://www.linkedin.com/in/jorge-peraza-hernandez-424907168/">LinkedIn</a>              
            </div>

            <div className={styles.recursos_footer}>
              <h3>Recursos</h3>
              <a href="#proyectos">Proyectos</a>
              <a href="https://www.freepik.es/">Imagenes-<br />Diseñado por Freepik </a>
            </div>

            <div className={styles.contacto_footer}>
              <h3>Informacion de Contacto</h3>             
              <a href="tel:+0526645181841">6645181841</a>                        
            </div>        
    </div>   
  </ footer>
  )
}

export default Footer