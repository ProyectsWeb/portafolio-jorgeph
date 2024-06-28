import React from 'react'
import styles from '../scss/Educacion.module.scss'

const Educacion = () => {
  return (
    <div id='educacion'>
    <section className={styles.seccion_educacion}>
      <div className={styles.presentacion}>
       
       <h3 className={styles.title_educacion}><span>Educacion</span></h3>
       <p className={styles.p_presentacion}>Colegio de Bachilleres del Estado de Sinaloa</p>
       <p className={styles.p_presentacion}>JavaScript de Zero a Experto. Formacion realmente profunda, con grandes desafíos y proyectos que solidifican la comprensión de JavaScript.</p>
       <p className={styles.p_presentacion}>CSS Avanzado. Técnicas CSS modernas de vanguardia para crear diseños y efectos sorprendentes.</p>
       <p className={styles.p_presentacion}>React.js y Next.js. Desarrollo web de SPA y PWA profesional.</p>
       <p className={styles.p_presentacion}>Node.js. Dominando JavaScript moderno del lado del servidor junto a Express, MongoDB, Mongoose.</p>
       <p className={styles.p_presentacion}>PHP 8. Creación de aplicaciones y sitios web con bases de datos MySQL.</p>
       <p className={styles.p_presentacion}>GIT. Conocimiento en control de versiones.</p>
      </div>
    </section>    



    <section className={styles.seccion_educacion_2} id='experiencia'>
      <div className={styles.presentacion} >
       
       <h3 className={styles.title_educacion}><span>Experiencia</span></h3>
       <p className={styles.p_presentacion}>Actualización y mantenimiento web.</p>
       <p className={styles.p_presentacion}>Creación y edición de themes (plantillas) a medida.</p>
       <p className={styles.p_presentacion}>Maquetación, desarrollo y programación de páginas web en HTML, CSS, JavaScript, PHP, adaptadas a diferentes tipos de dispositivos.</p>
       <p className={styles.p_presentacion}>Soporte y servicio de mantenimiento web (contenidos, copias de seguridad, actualizaciones).</p>
       <p className={styles.p_presentacion}>Adaptaciones y rediseños de páginas web para cumplir con estándares HTML, CSS, HTML5.</p>
       <p className={styles.p_presentacion}>Desarrollo de tienda online enfocada a la usabilidad desde diferentes dispositivos (móvil, tableta y escritorio).</p>
      </div>
    </section>        
    </div>
  )
}

export default Educacion