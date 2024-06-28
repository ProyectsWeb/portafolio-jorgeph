import React from 'react'

import styles from '../scss/SeccionServicios.module.scss'

const SeccionServicios = () => {
  return (
    <section className={styles.seccion_servicios} id='habilidades'>
      <div className={styles.box_servicios}>
       <span className={styles.span_servicios}>Habilidades Tecnicas</span>
        <h2 className={styles.h2_servicios}>¡Descubre lo que puedo hacer!</h2>
        <p className={styles.parrafo_servicios}>
         <span className={styles.design}>Como desarrollador web</span><span className={styles.zavan}> Fullstack</span>, he cultivado una amplia gama de habilidades técnicas y blandas que me permiten crear soluciones innovadoras y eficientes. Aquí te presento algunas de mis competencias destacadas:
        </p>
     </div>   
    </section>
  )
}

export default SeccionServicios