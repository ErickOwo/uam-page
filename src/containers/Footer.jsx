import React from 'react'
import Image from 'next/image'
import footerLogo from '@images/logo-footer.png'

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-around w-11/12 p-4 bg-stone-800 text-white">
      <div className='md:w-[300px] w-[70%] self-center'>
        <Image src={footerLogo} width='300px' height='170px'/>
      </div>
      <div className='contact flex flex-col px-2 py-4 gap-2 font-ubuntu'>
        <h4 className='font-bold text-2xl mb-1 tracking-wider font-robotoSlab'>Contacto.</h4>
        <p>
          <span className='font-semibold'>Dirección: </span>
          1ra Avenida 6-87 zona 1, Quetzaltenango, Guatemala.
        </p>
        <p>
          <span className='font-semibold'>Correo electrónico: </span>
          unionagric@gmail.com
        </p>
        <p>
          <span className='font-semibold'>Teléfonos: </span> 
          { `(502) 7765 0915 (502) 7761 4063 (502) 7725 - 1444` }
        </p>
      </div>
    </footer>
  )
}

export default Footer