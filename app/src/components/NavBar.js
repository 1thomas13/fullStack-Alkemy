import React from 'react'

export const NavBar = () => {
  return (
    <div className='p-18 h-12 bg-[#31263E] flex justify-around items-center text-[#EAFDF8] fixed w-screen'>
        
        <a href='/'>Home</a>
        <div className='flex justify-around items-center'>
            <a href='/login'>Iniciar Sesion/logout</a>
            <a href='/newaccount'>Crear Cuenta</a>
        </div>
        
    </div>
  )
}
