import React, { useState } from 'react'
import '../App.css' 
import user from '../assets/programador.png'
import { useNavigate } from 'react-router-dom'
import email from '../assets/gmail.png'
import axios from 'axios'
import pass from '../assets/seguro.png'
import { Link } from 'react-router-dom'
import { JackInTheBox, Slide } from "react-awesome-reveal";
const Registrarse = () => {
    const navigate = useNavigate()

    const [error, SetError] = useState()
    const [formData, SetFormDarta] =useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (event)=>{
        const {name, value} = event.target
        SetFormDarta({
            ...formData,
            [name]: value
            }
        )
    }


    const handleSubmit = (event) =>{
      event.preventDefault()
      navigate('/')

    }



  return (
   <>
   <div className='w-screen h-screen flex justify-center  bg-slate-700 items-center'>
      <div className='w-2/4 min-h-96 h-1/3 flex justify-center flex-row-reverse gap-3'>
     <JackInTheBox className='w-2/4'>
        <div className='bg-cyan-950 w-full h-full p-10 rounded-md shadow-xl relative'>
        <h1 className='font-medium text-lg border-white text-white border-b'>Registrate</h1>
           <form onSubmit={handleSubmit} className='flex flex-col relative top-10 gap-10'>
            <div className="relative">
          <input 
          placeholder='' 
          type="text" 
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='pl-2 rounded-md focus:outline-none w-50 h-10 input' />
              <label className='absolute left-2 p-1 -translate-y-1/2 label2  top-2/4 pointer-events-none'>Ingresar un Usuario</label>
              <img className='absolute right-0 p-1 -translate-y-1/2 w-10 top-2/4' src={user} alt="" />
            </div>
            <div className='relative'>
            <input 
            placeholder=''
            type="email" 
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='pl-2  rounded-md focus:outline-none w-50 h-10 input' />
              <label className='absolute left-2 p-1 -translate-y-1/2 label2  top-2/4 pointer-events-none'>Ingresa un Email</label>
             <img className='absolute right-0 p-1 -translate-y-1/2 w-10 top-2/4'  src={email} alt="" />
            </div>
            <div className='relative'>
            <input 
            placeholder=''
            type="password" 
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='pl-2  rounded-md focus:outline-none w-50 h-10 input' />
              <label className='absolute left-2 p-1 -translate-y-1/2 label2  top-2/4 pointer-events-none'>Contraseña</label>
              <img className='absolute right-0 p-1 -translate-y-1/2 w-10 top-2/4'  src={pass} alt="" />
            </div>
            <div>
              <button className='text-white font-medium bg-slate-700 w-full h-10 rounded-md shadow hover:scale-105 transition-all'>Enviar</button>
            </div>
            <div>
                {error && <p className='text-red-500'>{error}</p>}
            </div>
           </form>
        </div>
        </JackInTheBox>
            <Slide  className='w-1/4 h-full'>
            <div className='w-full h-full bg-slate-800 relative  rounded-md shadow-xl text-white font-medium text-lg'>
              <div className='flex flex-col gap-2 justify-center items-center h-full'> 
                <p>¿tienes una cuenta?</p>
               <ul>
                <Link to='/' className=' hover:text-blue-500 cursor-pointer'>Inicia Sesion</Link>
               </ul>
              </div>
            </div> 
            </Slide>
      </div>
    </div>
   </>
  )
}

export default Registrarse