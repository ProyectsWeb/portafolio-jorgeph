import React from 'react'
import styles from '../scss/TermiPolitica.module.scss'

const TermiPolitica = () => {
  return (
    <div className={styles.terminos_politicas}>
     <a href="#">Terminos y Condiciones</a>
     <a href="#">Politica de Privacidad</a>
    </div>
  )
}

export default TermiPolitica