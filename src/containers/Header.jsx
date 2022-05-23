import MobileMenu from '@components/MobileMenu';
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


const Header = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const dropMenu1 = () =>{
    setDropdown1(true);
    setDropdown2(false);
  }
  const dropMenu2 = () =>{
    setDropdown1(false);
    setDropdown2(true);
  }
  const pickupMenu1 = () => setDropdown1(false);
  const pickupMenu2 = () => setDropdown2(false);
  

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>    
      <header id="up" className='w-11/12 select-none z-30 hidden lg:flex flex-col'>
        <div className="bg-[url('../assets/images/Encabezado.png')] bg-cover w-full h-[180px]">
        </div>
        <nav className='nav bg-white/70 '>
          <ul className="menu flex flex-wrap gap-2 p-2 relative">
            <Link href="/">
              <li className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">Inicio</li>
            </Link>
          <Link href="/quie">
              <li className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">Quienes somos</li>
            </Link>
            <Link href="/como">
              <li className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">Cómo llegar</li>
            </Link>
            <li 
              className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900 relative" 
              onMouseEnter={() => dropMenu1()}
              onMouseLeave={() => pickupMenu1()} >
                Nuestros Programas
              { 
                dropdown1 ? <div className='absolute pt-3 -left-1'>
                <ul className="menu-submenu p-2 flex flex-col gap-2 bg-slate-50/80 transition-colors w-48" >
                <Link href="/agro">
                  <li onClick={() => pickupMenu1()} className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">Agroecología</li>
                </Link>
                <Link href="/serf">
                  <li onClick={() => pickupMenu1()} className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">Serfinc</li>
                </Link>
                <Link href="/educ">
                  <li onClick={() => pickupMenu1()} className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">Educación</li>
                </Link>
                <Link href="/gene">
                  <li onClick={() => pickupMenu1()} className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">Género</li>
                </Link>
                <Link href="/financiero">
                  <li onClick={() => pickupMenu1()} className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">Financiero</li>
                </Link>
                <Link href="/volu">
                  <li onClick={() => pickupMenu1()} className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">Voluntariado</li>
                </Link>
                <Link href="/dire">
                  <li onClick={() => pickupMenu1()} className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">Dirección</li>
                </Link>
              </ul>
                </div> : null 
              }
            </li>
            <li 
              className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900 relative"
              onMouseEnter={() => dropMenu2()}
              onMouseLeave={() => pickupMenu2()} >
                Recurso humano
              { 
                dropdown2 ? <div className='absolute pt-3 -left-1'>
                <ul className="menu-submenu p-2 flex flex-col gap-2 bg-slate-50/80 transition-colors w-44">
                <Link href="/direc">
                  <li onClick={() => pickupMenu2()} className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">Directivos</li>
                </Link>
                <Link href="/etec">
                  <li onClick={() => pickupMenu2()} className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">Equipo Técnico</li>
                </Link>
              </ul>
                </div> : null 
              }
            </li>
            <Link href="/base">
              <li className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">AMB´s</li>
            </Link>
            <Link href="/mult">
              <li className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">Multimedia</li>
            </Link>
            <Link href="/coop">
              <li className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">Cooperantes</li>
            </Link>
            <Link href="/cont">
              <li className="cursor-pointer hover:bg-slate-50/80 transition-colors pl-2 py-1 pr-6 text-gray-900">Contacto</li>
            </Link>
          </ul>
        </nav>
      </header>
      <div className='void h-2 w-full flex lg:hidden '></div>

      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className='header-mobile flex lg:hidden w-full z-40 fixed top-0 left-0 bottom-0'
      >
        <motion.div className="bg-white w-full fixed top-0 left-0 bottom-0 z-30" variants={sidebar} />
    
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      { 
        false ? <MobileMenu />  : null
      }
    </>
  )
}

export default Header