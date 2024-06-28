import React from 'react'
import styles from '../scss/Presentacion.module.scss'

const Presentacion = () => {
  return (
    <div id='sobre-mi'>
    <section className={styles.seccion_presentacion_1}>
      <div className={styles.presentacion}>
       
       <h3 className={styles.design}><span>Sobre </span>Mi</h3>
       <p className={styles.p_presentacion}>
       Desarrollador web con experiencia en creación de sitios web modernos y funcionales. Apasionado y altamente motivado con sólida formación en tecnologías de desarrollo fullstack.</p>
      </div>
    </section>

    <section className={styles.seccion_presentacion_2}>
      <div className={styles.presentacion} >
       
       <h3 className={styles.design}><span>Alcanzando Metas</span></h3>
       <p className={styles.p_presentacion}>Excelente capacidad de organización y facilidad para el trabajo en equipo, adaptable a diferentes tipos de entorno y una clara orientación a objetivos.</p>
      </div>
    </section>
        
    </div>
  )
}

export default Presentacion