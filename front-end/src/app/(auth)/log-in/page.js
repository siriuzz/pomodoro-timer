import React from 'react'
import { MainInput } from '@/components/forms'
import { FormButton } from '@/components/forms'
import Link from 'next/link'
import axios from 'axios'

export default function LogInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () =>{
    try {
      axios.post()
    } catch (error) {
      
    }
  }

  return (
    <div className="grid place-items-center h-screen">
        <div className='border-blue-400 border-2 rounded-lg p-4'>
            <p className='text-center text-xl font-bold my-5 text-blue-500'>Iniciar sesión</p>
            <MainInput placeholder={'Correo electrónico'}></MainInput>
            <MainInput placeholder={'Contraseña'}></MainInput>
            <Link href={'/sign-in'} className='text-blue-800 pb-10'>Crear cuenta</Link>
            <FormButton text="Ingresar"></FormButton>
        </div>
    </div>
  )
}
