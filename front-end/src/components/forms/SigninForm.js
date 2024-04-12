"use client";
import React, { useState } from "react";
import { MainInput, FormButton } from "@/components/forms";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "@/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleRepeatPassword, setIsVisibleRepeatPassword] = useState(false);

  const checkRepeatPassword = () => {
    if (password !== repeatPassword) return "Las contraseñas no coinciden";
    return true;
  };

  const signin = async () => {
    try {
      // console.log(email);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const docRef = doc(firestore, "/users",res.user.uid);
    //   const docRef = collection(firestore, "/users");

      setDoc(docRef, {
        uid: res.user.uid,
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
        <form onSubmit={handleSubmit(signin)} role="form">
          <MainInput
            placeholder={"Nombre"}
            {...register("name", { required: "Este campo es requerido" })}
            onChange={(e) => setName(e.target.value)}
          ></MainInput>
          {errors.name && <span>{errors.name.message}</span>}
          <MainInput
            placeholder={"Correo electrónico"}
            {...register("email", {
              required: "Este campo es requerido",
              pattern: {value:/^\S+@\S+$/i,message:"Ingrese un correo valido"},
              onChange: (e) => {
                setEmail(e.target.value);
              },
            })}
          ></MainInput>
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
                  minLength:{
                    value:6,
                    message:"La contraseña debe tener un mínimo de 6 caracteres"
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
                {isVisiblePassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="grow">
              <MainInput
                placeholder={"Repetir contraseña"}
                type={isVisibleRepeatPassword ? "text" : "password"}
                {...register("repeatPassword", {
                  required: "Este campo es requerido",
                  onChange: (e) => {
                    setRepeatPassword(e.target.value);
                  },
                  
                  validate: checkRepeatPassword,
                })}
              ></MainInput>
              {errors.repeatPassword && (
                <span>{errors.repeatPassword.message}</span>
              )}
            </div>
            <div className="p-2 mb-3 w-min flex items-center h-auto">
              <button
                onClick={() => {
                  setIsVisibleRepeatPassword(!isVisibleRepeatPassword);
                }}
              >
                {isVisibleRepeatPassword ? <FaEye /> : <FaEyeSlash />}
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
