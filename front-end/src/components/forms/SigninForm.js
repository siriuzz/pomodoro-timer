"use client";
import React, { useState } from "react";
import { MainInput, FormButton } from "@/components/forms";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SigninForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleRepeatPassword, setIsVisibleRepeatPassword] = useState(false);



  const checkRepeatPassword = () => {
    if (password == repeatPassword) return true;
    return false;
  };

  const signin = async () => {
    if (!checkRepeatPassword()) return "passwords are not the same";
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const collectionRef = collection(firestore, "/users");
      addDoc(collectionRef, {
        name: name,
        email: email,
      });
      console.log("success");
      return "success";
    } catch (error) {
      console.log("ERROR: " + error);
      return "error";
    }
  };

  return (
    <div className="grid place-items-center h-screen ">
      <div className="border-blue-400 text-blue-600 border-2 rounded-lg p-4 h-auto w-1/4">
        <p className="text-center text-xl font-bold my-5 text-blu">Sign In</p>
        <form action={signin}>
          <MainInput
            placeholder={"Nombre"}
            onChange={(e) => setName(e.target.value)}
          ></MainInput>
          <MainInput
            placeholder={"Correo electrónico"}
            onChange={(e) => setEmail(e.target.value)}
          ></MainInput>
          <div className="flex">
            <div className="grow">
              <MainInput
                placeholder={"Contraseña"}
                onChange={(e) => setPassword(e.target.value)}
                type={isVisiblePassword?"text":"password"}
              ></MainInput>
            </div>
              <div className="p-2 mb-3 w-min flex items-center h-auto">
                <button onClick={()=>{setIsVisiblePassword(!isVisiblePassword)}}>
                  {isVisiblePassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
          </div>
          <div className="flex">
            <div className="grow">
              <MainInput
                placeholder={"Repetir contraseña"}
                onChange={(e) => setRepeatPassword(e.target.value)}
                type={isVisibleRepeatPassword?"text":"password"}
              ></MainInput>
            </div>
            <div className="p-2 mb-3 w-min flex items-center h-auto">
              <button onClick={()=>{setIsVisibleRepeatPassword(!isVisibleRepeatPassword)}}>
                {isVisibleRepeatPassword? <FaEye />: <FaEyeSlash/>}
              </button>
            </div>
          </div>
          <p className="text-black">¿Ya tienes una cuenta? </p>
          <div className="mb-4">
            <Link href={"/log-in"} className="font-bold">
              Ingresa aquí
            </Link>
          </div>
          <FormButton text="Crear cuenta" action="submit"></FormButton>
        </form>
      </div>
    </div>
  );
}
