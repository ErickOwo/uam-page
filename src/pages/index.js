import { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Home() {
  let [ title, setTitle ] = useState(" Unión de Agricultores Minifundistas de Guatemala -U.A.M.-    ")

  useEffect(()=>{
    // const espera= 800;
    // setInterval(()=> {
    //   title = title.substring(1,title.length)+title.charAt(0);
    //   setTitle(title);
    // }, espera);
   }, []);
   
  return (
    <div className='container max-w-none h-screen m-0 bg-gradient-to-bl from-cyan-600 to-pink-700 '>
      <main className=''>
        <div className="cont-logo-maps">
          <div className="butterflies">
            <marquee behavior="scroll" direction="center" style="position: center; left: 100px; top: 200px; width: 63%" scrollamount="5">
              <span style="color: #FF0000">
                <img src="Imgeneral/Mariposas2.gif" alt="" />
              </span>
            </marquee> 
          </div>
          <div className="image-UAM">
            <img src="Imgeneral/25YEuam.png" alt="" />
          </div>
        </div>
        
        
        <marquee behavior="scroll" direction="center" style="position: center; left: 100px; top: 200px; width: 63%" scrollamount="5"></marquee>
        
        <section id="dg-container" className="dg-container">
          <div className="dg-wrapper">
            <Link href="#">
              <img src="3DGallery/images/1.jpg" alt="image01" /> 
              <span>Vitatol: Suplemento Vitamínico </span>
            </Link>
            <Link href="#">
              <img src="3DGallery/images/2.jpg" alt="image02" />
              <span>Filtro de Aguas Servidas</span>
            </Link>
            <Link href="#">
              <img src="3DGallery/images/3.jpg" alt="image03" />
              <span>Capital Semilla</span>
            </Link>
            <Link href="#">
              <img src="3DGallery/images/4.jpg" alt="image04" />
              <span>Capital Semilla</span>
            </Link>
            <Link href="#">
              <img src="3DGallery/images/5.jpg" alt="image05" />
              <span>Aprovechamiento Recurso Local</span>
            </Link>
            <Link href="#">
              <img src="3DGallery/images/6.jpg" alt="image06" />
              <span>Proyectos Textiles</span>
            </Link>
            <Link href="#">
              <img src="3DGallery/images/7.jpg" alt="image07" />
              <span>Granjas Campesinas</span>
            </Link>
            <Link href="#">
              <img src="3DGallery/images/8.jpg" alt="image08" />
              <span>Botiquin Comunitario</span>
            </Link>
            <Link href="#">
              <img src="3DGallery/images/9.jpg" alt="image09" />
              <span>Capacitaciones</span>
            </Link>
            <Link href="#">
              <img src="3DGallery/images/10.jpg" alt="image10" />
              <span>Procesamiento - Comercialización</span>
            </Link>
            <Link href="#">
              <img src="3DGallery/images/11.jpg" alt="image11" />
              <span>Apicultura</span>
            </Link>
            <Link href="#">
              <img src="3DGallery/images/12.jpg" alt="image12" />
              <span>Biodigestores</span>
            </Link>
          </div>
            {
              //nav>	
              //<span className="dg-prev">&lt;</span>
              //<span className="dg-next">&gt;</span>
              //nav->
            }
        </section>
    {
      //to work 
    }
        <div className="contenedor-caja-video">
          <div className="caja-video">
            <div className="cont-video">
              <video controls autoplay>
              <source src="Imgeneral/multimedia/CCOO/CCOO-SolidaridadGuatemala-MARCOS-HD1080p-20180606.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag. 
              </video>
            </div>
          </div>
        </div>  
    
    
    
        <div className="nosotros">
          <h3>Nuestra Misión</h3>
          <p>U.A.M. es un sistema organizativo que representa al sector minifundista para promover el desarrollo integral de sus asociados, facilitando la formación e implementación de procesos en agroecología, economía solidaria, soberanía alimentaria, equidad de género, liderazgo y financiamiento de capital, a través de programas y proyectos.</p>
          <h3>Nuestra Visión</h3>
          <p>Desarrollar procesos estratégicos para la sostenibilidad, consolidación técnica, administrativa y agroecología, lo que hace un modelo ejemplar, replicable, en organizaciones sociales. Se tiene alta calidad en la producción y comercialización de los productos en el ámbito local e internacional, con la participación de hombres y mujeres, comprometida en la conservación y protección del medio ambiente, con posicionamiento en defensa de la soberanía alimentaria. Cuenta con un grupo humano y profesional competente que trabaja coordinadamente para mejorar y mantener sus procesos de desarrollo.
          <Link href="file:///E:/PaginaUAMXVI/index.html#"></Link></p>
          <div className="subir">
            <Link href="#up">
              <img src="Imgeneral/Up.png" alt="" />
            </Link>
          </div>
        </div>   
       
        <footer>
          <div className="contenedor-p">
            <p>"Por el Desarrollo en Marcha"</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
