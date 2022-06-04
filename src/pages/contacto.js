import { useRef, useState } from 'react';
import Image from 'next/image';
import imgContact from '@images/contactanos.png';
import axios from 'axios';

const Contacto = () => {
  const form = useRef(null);
  const [message, setMessage] = useState(null)

  const handleSubmit = e =>{
    e.preventDefault()
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }
    axios.post('/api', data, {
      Headers: {
        accept: '*/*',
        'Content-Type': 'aplication/json',
      },
    }).then(res=>{
    setMessage({ text: 'Mensaje enviado correctamente', type: 'success' })
    })
  }

  return (
    <div className='container flex flex-wrap justify-center bg-slate-50/10 max-w-none'>
      <div className='contact '>
        <Image src={imgContact} width="600" height="700"/>
      </div>
      <form 
      className='flex flex-col p-2 md:p-10 font-ubuntu' 
      ref={form}
      onSubmit={handleSubmit} >
        <span className='text-cyan-700 font-bold'>
        Envíanos tus comentarios, nos pondremos en contacto lo antes posible
        </span>
        <label htmlFor='name' className='mb-2 mt-4 font-bold'>
          Nombre
        </label>
        <input placeholder='Tu nombre' id='name' name='name' required className=' p-1' />
        <label htmlFor='mail' className='mb-2 mt-4 font-bold'>
          Correo Electrónico
        </label>
        <input placeholder='tucorreoelectronico@example.com' type='email' id='email' name='email' required className=' p-1' />
        <label htmlFor='phone' className='mb-2 mt-4 font-bold'>
          Teléfono
        </label>
        <input placeholder='Ingresa tu número' type='number' id='phone' name='phone' required className=' p-1' />
        <label htmlFor='message' className='mb-2 mt-4 font-bold'>
          Mensaje
        </label>
        <textarea placeholder='Ingresa tu mensaje' name='message' id='message' className='resize-none min-h-[200px] p-1' required />
        {
          message ? <span className='h-6'></span> 
            : <span 
                className='h-6' 
                style={message?.type == 'error' ? {color: '#f00'} : {color: '#0f0'} } >{
                message?.text
              }</span>
        }
        <button 
          type='submit' 
          className='bg-slate-50 hover:bg-slate-50/80 mt-6 md:mb-0 mb-4 self-center w-20 font-semibold' >
            Enviar
          </button>
      </form>
    </div>
  )
}

export default Contacto