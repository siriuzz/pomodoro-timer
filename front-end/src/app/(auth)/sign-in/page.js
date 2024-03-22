import React from 'react'
import { MainInput, FormButton } from '@/components/forms';
import Link from 'next/link'


export default function SignInPage() {
  return (
    <div className="grid place-items-center h-screen">
        <div className='border-blue-400 text-blue-600 border-2 rounded-lg p-4 h-auto'>
            <p className='text-center text-xl font-bold my-5 text-blu'>Sign In</p>
            <MainInput placeholder={'Nombre'}></MainInput>
            <MainInput placeholder={'Correo electrónico'}></MainInput>
            <MainInput placeholder={'Contraseña'}></MainInput>
            <MainInput placeholder={'Repetir contraseña'}></MainInput>
            <p className='text-black'>¿Ya tienes una cuenta? </p><div className='mb-4'><Link href={'/log-in'} className='font-bold' >Ingresa aquí</Link></div>
            <FormButton text="Crear cuenta"></FormButton>
        </div>
    </div>
  )
}
