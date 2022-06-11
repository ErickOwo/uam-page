import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import { useDimensions } from "@hooks/use-dimensions";
import { MenuToggle } from "@components/MenuToggle";
import { Navigation } from "@components/Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const links = [
  {
    name: 'Inicio',
    url: '/',
    color: "#FF008C",
  },
  {
    name: 'Quienes Somos',
    url: '/about',
    color: "#D309E1",
  },
  {
    name: 'Acompañanos',
    url: '/followus',
    color: "#9C1AFF", 
  },
  {
    name: 'Programas',
    url: '/programas',
    color: "#9C1AFF",
  },
  {
    name: 'Recursos',
    url: '/source',
    color: "#4400FF",
  },
  {
    name: 'Bases',
    url: '/bases',
    color: "#4400FF",
  }, 
  {
    name: 'Multimedia',
    url: '/multimedia',
    color: "#4400FF",
  },
  {
    name: 'Cooperación',
    url: '/cooperation',
    color: "#4400FF",
  },
  {
    name: 'Contacto',
    url: '/contact',
    color: "#4400FF",
  },
]

const linksProgramas = [
  {
    name: 'Inicio',
    url: '/',
  },
  {
    name: 'Programas',
    url: '#up',
  },
  {
    name: 'Agroecología',
    url: '#agroecologia',
  },
  {
    name: 'Género',
    url: '#genero',
  },
  {
    name: 'Educación',
    url: '#educacion',
  },
  {
    name: 'Serfinc',
    url: '#serfinc',
  },
  {
    name: 'Voluntariado',
    url: '#voluntariado',
  },
  {
    name: 'Dirección',
    url: '#direccion',
  },
]

const Header = () => {
  const [ show, setShow ] = useState(false);

  const router = useRouter();
  
  const showMenu = () =>{
    if(!show) setShow(true);
    else{
      setTimeout(()=>{
        setShow(false);
      },800)
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const toggleOpen = () =>{
    isOpen ? setIsOpen(false)
    : setIsOpen(true)
  }

  return (
    <> 
      {   
        !/\/programas.*/.test(router.pathname) ? <header className='w-11/12 select-none z-30 hidden lg:flex flex-col' >
          <div className="bg-[url('../assets/images/Encabezado.png')] bg-[length:100%_100%] w-full h-[180px]">
          </div>
          <nav className='nav bg-white/70 '>
            <ul className="menu flex flex-wrap gap-2 p-2 relative" >
              {
                links.map( ({ url, name }, index ) =>(
                  <Link href={ url } key={`header-${index}`}>
                    <li className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900 " >
                      { name }
                  </li>
                  </Link>
                ))
              } 
            </ul>
          </nav>
        </header>
      : <header className='w-11/12 select-none z-30 hidden lg:flex flex-col fixed'>
          <nav className='nav text-lg w-full bg-black/30' >
            <ul className="menu w-full flex flex-wrap gap-2 p-4 relative justify-end">
              {
                linksProgramas.map( ({ url, name }, index ) =>(
                  <Link href={ url } key={`header-${index}`} >
                    <button className={`${index == 0 ? 'self-start justify-self-start mr-auto ml-0' : null}  hover:bg-black/80 transition-colors pl-2 py-1 pr-6 text-white `} >
                  { name }
                    </button>
                  </Link>
                )) 
              }
            </ul>
          </nav>
        </header>

      }
      <div className='void h-2 w-full flex lg:hidden'></div>

      
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className='header-mobile flex lg:hidden w-full z-30 fixed top-0 left-0 bottom-0'
        style={ show ? {display: 'flex'} : {display: 'none'}} >
        <motion.div 
          className="bg-white w-full fixed top-0 left-0 bottom-0 z-30" 
          variants={sidebar} />
    
        <Navigation
          itemIds={ !/\/programas.*/.test(router.pathname) ? links : linksProgramas }
          close={showMenu}
          setOpen={toggleOpen} />
      </motion.nav>
      
      <MenuToggle 
        isOpen={isOpen}
        setShow={showMenu}
        toggle={toggleOpen} />
    </>
  )
}

export default Header