import React from 'react'
import styles from '../scss/ItemServicios.module.scss'

const ItemServicios = () => {

  return (
    <main className={styles.item_servicios}>
      <div className={styles.container_servicios}>
        <div className={styles.box_servicio}>
          <i className="fa fa-file-code-o" aria-hidden="true"></i>
          <h3>Diseño y desarrollo de sitios web </h3>(Estaticos y Dinamicos)
          <p className={styles.p_descripcion}>
          Creo sitios web atractivos y funcionales que se adapten a las necesidades específicas del proyecto.
          </p>

          <div className={styles.link_read}>         
          </div>
        </div>


        <div className={styles.box_servicio}>       
          <i className="fa fa-mobile" aria-hidden="true"></i>
          <h3>Desarrollo de aplicaciones móviles </h3>(PWA)
          <p className={styles.p_descripcion}>
          Creo aplicaciones para dispositivos móviles que permitan al usuario acceder desde cualquier lugar.               
          </p>

          <div className={styles.link_read}>          
          </div>
        </div>


        <div className={styles.box_servicio}>
          <i className="fa fa-search" aria-hidden="true"></i>
          <h3>Optimización de motores de búsqueda </h3>(SEO)
          <p className={styles.p_descripcion}>
          Optimizo los sitios web para mejorar su visibilidad en los resultados de los búscadores.
          </p>

          <div className={styles.link_read}>          
          </div>
        </div>


        <div className={styles.box_servicio}>
          <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
          <h3>Desarrollo de comercio electrónico</h3>
          <p className={styles.p_descripcion}>
          Creo tiendas y plataformas de comercio electrónico para vender productos y servicios en línea.
          </p>

          <div className={styles.link_read}>          
          </div>
        </div>

        <div className={styles.box_servicio}>
          <i className="fa fa-code" aria-hidden="true"></i>
          <h3>Desarrollo de software personalizado</h3>
          <p className={styles.p_descripcion}>
          Creo soluciones de software personalizadas para satisfacer las necesidades específicas del proyecto.
          </p>

          <div className={styles.link_read}>        
          </div>
        </div>


        <div className={styles.box_servicio}>
          <i className="fa fa-cogs" aria-hidden="true"></i>
          <h3>Mantenimiento y soporte de sitios web y aplicaciones</h3>
          <p className={styles.p_descripcion}>
          Capacidad para dar servicio de mantenimiento y soporte a los sitios web y aplicaciones ya existentes.
          </p>

          <div className={styles.link_read}>         
          </div> 
        </div> 

        </div>
    </main>  
  )
}

export default ItemServicios