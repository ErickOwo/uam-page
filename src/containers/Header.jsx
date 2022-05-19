

const Header = () => {
  return (
    <header id="up" className='bg-white/90'>
      <div className="bg-[url('../assets/images/Encabezado.png')] bg-cover w-full h-[160px]">
      </div>
      <nav className='nav'>
        <ul className="menu flex flex-wrap">
          <Link href="/index"><li className="cursor-pointer text-gray-900">Inicio</li></Link>
          <Link href="/quie"><li className="cursor-pointer text-gray-900">Quienes somos</li></Link>
          <Link href="/como"><li className="cursor-pointer text-gray-900">Cómo llegar</li></Link>
          <li className="cursor-pointer text-gray-900" >Nuestros Programas
            <ul className="menu-submenu" >
              <Link href="/agro"><li className="cursor-pointer text-gray-900">Agroecología</li></Link>
              <Link href="/serf"><li className="cursor-pointer text-gray-900">Serfinc</li></Link>
              <Link href="/educ"><li className="cursor-pointer text-gray-900">Educación</li></Link>
              <Link href="/gene"><li className="cursor-pointer text-gray-900">Género</li></Link>
              <Link href="/financiero"><li className="cursor-pointer text-gray-900">Financiero</li></Link>
              <Link href="/volu"><li className="cursor-pointer text-gray-900">Voluntariado</li></Link>
              <Link href="/dire"><li className="cursor-pointer text-gray-900">Dirección</li></Link>
            </ul>
          </li>
          <li className="cursor-pointer text-gray-900" >Recurso humano
            <ul className="menu-submenu">
              <Link href="/direc"><li className="cursor-pointer text-gray-900">Directivos</li></Link>
              <Link href="/etec"><li className="cursor-pointer text-gray-900">Equipo Técnico</li></Link>
            </ul>
          </li>
          <Link href="/base"><li className="cursor-pointer text-gray-900">AMB´s</li></Link>
          <Link href="/mult"><li className="cursor-pointer text-gray-900">Multimedia</li></Link>
          <Link href="/coop"><li className="cursor-pointer text-gray-900">Cooperantes</li></Link>
          <Link href="/cont"><li className="cursor-pointer text-gray-900">Contacto</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header