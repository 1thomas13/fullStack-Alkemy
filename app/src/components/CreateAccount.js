import React from 'react'

export const CreateAccount = () => {



  return (
    <main className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold text-[#FB3640]'>Crea tu cuenta para gestionar tus gastos!</h1>
        <form className='border-2 max-w-2xl w-screen border-[#FB3640] p-8 rounded-lg'>
        <div class="mb-6">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required/>
        </div>
        <div class="mb-6">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
            <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
        </div>
        <div class="mb-6">
            <label for="repeat-password" className="block mb-2 text-sm font-medium text-gray-900">Repeat password</label>
            <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
        </div>
        <button type="submit" className="text-white bg-[#FB3640] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Register new account
        </button>
        </form>
    </main>
    
  )
}
