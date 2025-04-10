"use client"
import React, { useActionState, useEffect } from 'react'
import { Eye, Key, Login, Sms } from "iconsax-react";
import { loginAction } from '@/app/actions/login-action';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';
import Link from 'next/link';
export default function LoginComponent() {
  const [state , formAction , isPending] = useActionState(loginAction , null); 
  console.log("state"  ,state)
  useEffect(() => {
    if (state?.status === 400) { 
      toast.error(state?.detail);
    }else if(state?.success){
      toast.success(state?.message);
      redirect("/home")
    }
  }, [state]);  
  return (
    <div className="max-w-screen-xl sm:m-10 bg-white shadow flex  justify-center flex-1">
      <div className="lg:w-1/2 xl:w-5/10 p-6 rounded-2xl bg-gray-100 sm:p-12">
        <div className="mt-12 flex flex-col items-center">
          <div className="w-full flex-1 mt-8">
            <div className="flex flex-col items-center">

            </div>
            <div className="my-12 text-center">
              <div className="leading-none px-2 inline-block text-3xl text-black tracking-wide font-extrabold  transform ">
                Welcome to <span className="text-blue-500">Q</span>uiz<span className="text-blue-500 font-extrabold">C</span>lash
              </div>
            </div>
            <form className="mx-auto max-w-xs" action={formAction}>
                <div>
                <div className="flex items-center">
                <Sms size="24" color="#94A3B8" />&nbsp;&nbsp;
                <p className="text-[#94A3B8]">Email</p>


                </div>
                <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                name='email'
                placeholder="Please type your email"
              />
                {state?.errorEmail && (
                  <span className="text-red-600 mt-2">{state.errorEmail}</span>
                )}
                </div>
                <div className="mt-10">
                <div className="flex items-center">
                <Key size="24" color="#94A3B8"/>&nbsp;&nbsp;
                <p className="text-[#94A3B8]">Password</p>

                </div>
                <div className="flex justify-between items-center relative">

                <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="password"
                name="password"
                placeholder="Please type your password"
                
              />
                <Eye className="absolute ml-[280px]" size="24" color="#94A3B8"/>
                </div>
                {state?.errorPassword && (
                  <span className="text-red-600 mt-2">{state.errorPassword}</span>
                )}
                </div>
        
              <button type='submit' className="mt-10 tracking-wide font-semibold bg-blue-500 cursor-pointer text-gray-100 w-full py-4 rounded-2xl transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <span className="ml-3">Login</span>
              </button>
            </form>
            <h1 className="font-semibold mt-5 ml-[200px]">Create a new account?<Link href={"/register"}>Sign Up</Link> </h1>
            
          </div>
        </div>
        <p className="mt-10 text-center">@ Copyright 2025 | QuizeClash KSHRD Center</p>

      </div>
      
      <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
        <div
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("login.png")'
          }}
        ></div>
      </div>
    </div>
  )
}
