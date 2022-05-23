import { useState } from 'react';
import Link from 'next/link';

const MobileMenu = () => {
  const [dropdownMobile1, setDropdownMobile1] = useState(false);
  const [dropdownMobile2, setDropdownMobile2] = useState(false);

  const dropMenuMobile1 = () =>{
    setDropdownMobile1(!dropdownMobile1);
    setDropdownMobile2(false);
  }
  const dropMenuMobile2 = () =>{
    setDropdownMobile1(false);
    setDropdownMobile2(!dropdownMobile2);
  }

  return (
    <div className='mobile-menu flex absolute top-0 w-full lg:hidden z-50 min-h-screen overflow-auto'>
        <nav className='nav bg-white/90 w-full overflow-auto'>
          <ul className="menu flex flex-col p-2 relative text-lg">
            <Link href="/">
              <li className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">Inicio</li>
            </Link>
          <Link href="/quie">
              <li className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">Quienes somos</li>
            </Link>
            <Link href="/como">
              <li className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">Cómo llegar</li>
            </Link>
            <li 
              className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-2 text-gray-900 relative" 
              onClick={() => dropMenuMobile1()} >
                Nuestros Programas
              { 
                dropdownMobile1 ? <div className='pt-3 -left-1'>
                <ul className="menu-submenu p-2 flex flex-col gap-2 bg-slate-50/80 transition-colors w-full overflow-auto" >
                <Link href="/agro">
                  <li onClick={() => pickupMenu1()} className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">Agroecología</li>
                </Link>
                <Link href="/serf">
                  <li onClick={() => pickupMenu1()} className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">Serfinc</li>
                </Link>
                <Link href="/educ">
                  <li onClick={() => pickupMenu1()} className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">Educación</li>
                </Link>
                <Link href="/gene">
                  <li onClick={() => pickupMenu1()} className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">Género</li>
                </Link>
                <Link href="/financiero">
                  <li onClick={() => pickupMenu1()} className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">Financiero</li>
                </Link>
                <Link href="/volu">
                  <li onClick={() => pickupMenu1()} className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">Voluntariado</li>
                </Link>
                <Link href="/dire">
                  <li onClick={() => pickupMenu1()} className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">Dirección</li>
                </Link>
              </ul>
                </div> : null 
              }
            </li>
            <li 
              className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-2 text-gray-900 relative"
              onClick={() => dropMenuMobile2()} >
                Recurso humano
              { 
                dropdownMobile2 ? <div className='pt-3 -left-1'>
                <ul className="menu-submenu p-2 flex flex-col gap-2 bg-slate-50/80 transition-colors w-full">
                <Link href="/direc">
                  <li onClick={() => pickupMenu2()} className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">Directivos</li>
                </Link>
                <Link href="/etec">
                  <li onClick={() => pickupMenu2()} className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">Equipo Técnico</li>
                </Link>
              </ul>
                </div> : null 
              }
            </li>
            <Link href="/base">
              <li className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">AMB´s</li>
            </Link>
            <Link href="/mult">
              <li className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">Multimedia</li>
            </Link>
            <Link href="/coop">
              <li className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">Cooperantes</li>
            </Link>
            <Link href="/cont">
              <li className="cursor-pointer hover:bg-slate-50/80 transition-colors px-2 py-3 text-gray-900">Contacto</li>
            </Link>
          </ul>
        </nav>
      </div>
  )
}

export default MobileMenu