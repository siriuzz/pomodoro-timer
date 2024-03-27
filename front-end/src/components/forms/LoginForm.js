"use client";
import React, { useState } from "react";
import { MainInput } from "@/components/forms";
import { FormButton } from "@/components/forms";
import Link from "next/link";
import { app, auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// require('dotenv').config({path:"../../../.env.local"}) // Import signInWithEmailAndPassword from firebase/auth

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("success");
      return "success";
    } catch (error) {
      console.log("ERROR: " + error);
      return "error";
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="border-blue-400 border-2 rounded-lg p-4">
        <p className="text-center text-xl font-bold my-5 text-blue-500">
          Iniciar sesión
        </p>
        {/* Use input components with onChange handlers */}
        <form action={login}>
          <MainInput
            placeholder={"Correo electrónico"}
            value={email}
            onChange={handleEmailChange}
          />
          <MainInput
            placeholder={"Contraseña"}
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Link href={"/sign-in"} className="text-blue-800 pb-10">
            Crear cuenta
          </Link>
          <FormButton text="Ingresar" type="submit" />
        </form>
      </div>
    </div>
  );
}
