"use client"
import Layout from './../components/Layout'
import HomePresent from './../components/HomePresent'
import SeccionMain from './../components/SeccionMain'
import Presentacion from './../components/Presentacion'
import SeccionServicios from './../components/SeccionServicios'
import ItemServicios from './../components/ItemServicios'
import ItemProyectos from './../components/itemProyectos'
import SeccionEleccion from './../components/SeccionEleccion' 
import Educacion from './../components/Educacion'


export default function Home() {
  return (
    <>
    <Layout 
      title= "DesignZavan"        
      description = "En DesignZavan ofrecemos servicios óptimos de desarrollo digital, para ayudar a que tú negocio o proyecto tenga mejor presencia en línea y así aumentar tus posibilidades de alcanzar tus objetivos."
    >     
    <HomePresent /> 
    <SeccionMain /> 
    <Presentacion /> 
    <SeccionServicios /> 
    <ItemServicios /> 
    <SeccionEleccion />
    <ItemProyectos /> 
    <Educacion /> 
    </Layout>
 </>
  );
}
