import Link from 'next/link';

import { useState, useRef } from 'react';
import { motion, useCycle } from 'framer-motion';

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
    submenu: null,
    widthSubmenu: null,
    function: null,
    color: "#FF008C",
  },
  {
    name: 'Quienes Somos',
    url: '/about',
    submenu: null,
    widthSubmenu: null,
    function: null,
    color: "#D309E1",
  },
  {
    name: 'Acompañanos',
    url: '/followus',
    submenu: null,
    widthSubmenu: null,
    function: null,
    color: "#9C1AFF", 
  },
  {
    name: 'Programas',
    url: null,
    submenu: [
      {
        name: 'Agroecología',
        url: '/programas/agroecologia',
      },
      {
        name: 'Genero y Desarrollo',
        url: '/programas/genero',
      },
      {
        name: 'Educación',
        url: '/programas/educacion',
      },
      {
        name: 'Genero y Desarrollo',
        url: '/programas/genero',
      },
      {
        name: 'Serfinc',
        url: '/programas/serfinc',
      },
      {
        name: 'Voluntariado',
        url: '/programas/voluntariado',
      },
      {
        name: 'Dirección',
        url: '/programas/direccion',
      },
    ],
    widthSubmenu: 48,
    color: "#7700FF", 
  },
  {
    name: 'Recursos',
    url: '/source',
    submenu: null,
    widthSubmenu: null,
    function: null,
    color: "#4400FF",
  },
  {
    name: 'Bases',
    url: '/bases',
    submenu: null,
    widthSubmenu: null,
    function: null,
    color: "#4400FF",
  }, 
  {
    name: 'Multimedia',
    url: '/multimedia',
    submenu: null,
    widthSubmenu: null,
    function: null,
    color: "#4400FF",
  },
  {
    name: 'Cooperación',
    url: '/cooperation',
    submenu: null,
    widthSubmenu: null,
    function: null,
    color: "#4400FF",
  },
  {
    name: 'Contacto',
    url: '/contact',
    submenu: null,
    widthSubmenu: null,
    function: null,
    color: "#4400FF",
  },
]


const Header = () => {
  const [ show, setShow ] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);

  const showMenu = () =>{
    if(!show) setShow(true);
    else{
      setTimeout(()=>{
        setShow(false);
      },800)
    }
  }

  const dropMenu1 = () =>{
    setDropdown1(true);
  }

  const pickupMenu1 = () => setDropdown1(false);
  

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const toggleOpen = () =>{
    isOpen ? setIsOpen(false)
    : setIsOpen(true)
  }

  return (
    <>    
      <header id="up" className='w-11/12 select-none z-30 hidden lg:flex flex-col' >
        <div className="bg-[url('../assets/images/Encabezado.png')] bg-[length:100%_100%] w-full h-[180px]">
        </div>
        <nav className='nav bg-white/70 '>
          <ul className="menu flex flex-wrap gap-2 p-2 relative">
            { 
              links.map( ({ url, name, submenu }, index )=>{
                if(!submenu) return (
                  <Link href={ url } key={`header-${index}`}>
                    <li className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">
                      { name }
                    </li>
                  </Link>
                )
          
              return (
                <li 
                  key={`header-${index}`}
                  className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900 relative" 
                  onMouseEnter={() => dropMenu1()}
                  onMouseLeave={() => pickupMenu1()} >
                  { name }
                { 
                  dropdown1 ? <div className='absolute pt-3 -left-1'>
                    <ul className="menu-submenu p-2 flex flex-col gap-2 bg-slate-50/80 transition-colors w-48" >
                      {
                        submenu.map(({ url, name }, index) =>{
                          return(
                            <Link href={ url } key={`drop-header-${index}`}>
                              <li onClick={() => pickupMenu1()} className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">{ 
                                name
                              }</li>
                            </Link>
                          )
                        })
                      }
                    </ul>
                  </div> : null 
                }
                </li>);
              })
            }
          </ul>
        </nav>
      </header>
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
        itemIds={ links }
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