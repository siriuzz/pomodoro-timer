"use client";
import React, { useState } from "react";
import { MainInput } from "@/components/forms";
import { FormButton } from "@/components/forms";
import Link from "next/link";
import { app, auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from 'next/navigation';
// require('dotenv').config({path:"../../../.env.local"}) // Import signInWithEmailAndPassword from firebase/auth


export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router =useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState("");

  const login = async () => {
    try {
      console.log(email, password)
      await signInWithEmailAndPassword(auth, email, password);
      console.log("success");
      router.push('/');
      
    } catch (error) {
      console.log("ERROR: " + error);
      return "error";
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="border-blue-400 text-blue-500 border-2 rounded-lg p-4 w-1/5">
        <p className="text-center text-xl font-bold my-5 text-blue-500">
          Iniciar sesión
        </p>
        {/* Use input components with onChange handlers */}
        <form onSubmit={handleSubmit(login)}>
          <MainInput
            placeholder={"Correo electrónico"}
            value={email}
            // onChange={handleEmailChange}
            {...register("email", {
              required: "Este campo es requerido",
              onChange: (e) => {
                setEmail(e.target.value);
              },
            })}
          />
              {errors.email && <span>{errors.email.message}</span>}

           <div className="flex">
            <div className="grow">
              <MainInput
                placeholder={"Contraseña"}
                type={isVisiblePassword ? "text" : "password"}
                {...register("password", {
                  required: "Este campo es requerido",
                  onChange: (e) => {
                    setPassword(e.target.value);
                  },
                })}
              ></MainInput>
              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div className="p-2 mb-3 w-min flex items-center h-auto">
              <button
                onClick={() => {
                  setIsVisiblePassword(!isVisiblePassword);
                }}
              >
                {isVisiblePassword ? <FaEye/> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <Link href={"/sign-in"} className="text-blue-800 pb-10">
            Crear cuenta
          </Link>
          <FormButton text="Ingresar" type="submit" />
        </form>
      </div>
    </div>
  );
}
