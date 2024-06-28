import React from 'react'
import Image from 'next/image'

import styles from '../scss/SeccionEleccion.module.scss'

const SeccionEleccion = () => {
  return (
    <section className={styles.eleccion}>

        <div className={styles.container_logo}>
          <Image src={"/img/illustration-4.webp"} 
            width={200}
            height={200}
            className={styles.img_eleccion} 
            alt="elegir zavan design" />
          <a className={styles.freepik} target="_blank" href="https://www.freepik.es/vector-gratis/desarrollo-web-ingenieria-programadores-sitio-web-codificacion-pantallas-interfaz-realidad-aumentada-desarrollador-ingeniero-proyectos-software-programacion-o-diseno-aplicaciones-ilustracion-dibujos-animados_10798281.htm#query=diseno%20web&position=7&from_view=keyword&track=ais">Imagen de upklyak en Freepik</a> 
        
        </div>

        <div className={styles.container_eleccion}>        
          <span className={styles.span_elejir}>Otras Habilidades</span>          
          <div className={styles.info_item}>
           <span className={styles.span_info_item}>01.</span>
            <div className={styles.container_info}>
              <h5 className={styles.h5_info_item}>Adaptabilidad: </h5>
              <p className={styles.p_info_item}>Capacidad para aprender y adaptarse a nuevas tecnologías.</p>
            </div>
          </div>


          <div className={styles.info_item}>
           <span className={styles.span_info_item}>02.</span>
            <div className={styles.container_info}>
              <h5 className={styles.h5_info_item}>Resolución de Problemas:</h5>
              <p className={styles.p_info_item}>Capacidad para encontrar soluciones eficientes.</p>
            </div>
          </div>

          <div className={styles.info_item}>
           <span className={styles.span_info_item}>03.</span>
            <div className={styles.container_info}>
              <h5 className={styles.h5_info_item}>Pensamiento Crítico:</h5>
              <p className={styles.p_info_item}>Evaluación objetiva de problemas y soluciones.</p>
            </div>
          </div>         
        </div>
          
      </section>
  )
}

export default SeccionEleccion