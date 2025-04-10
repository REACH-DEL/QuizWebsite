"use client"
import React, { useActionState, useEffect } from 'react'
import { Eye, Key, Login, Sms } from "iconsax-react";
import { User } from "lucide-react";
import { registerAction } from '@/app/actions/register';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';
import Link from 'next/link';
export default function RegisterComponents() {
  const [state, formAction, isPending] = useActionState(registerAction, null);
  console.log(state)
  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      redirect("/login")
    }else if(state?.status === 400)
    {
      toast.error(state.detail);
    }
  }, [state]);
  return (
    <>
      <form action={formAction}>
        <div className="min-h-screen w-screen bg-white text-gray-900 flex justify-center">
          <div className="max-w-screen-xl sm:m-10 bg-white shadow flex  justify-center flex-1">
            <div className="lg:w-1/2 xl:w-5/10 p-6 rounded-2xl bg-gray-100 sm:p-12">
              <div className="mt-12 flex flex-col items-center">
                <div className="w-full flex-1 mt-8">
                  <div className="flex flex-col items-center">

                  </div>
                  <div className="my-12 text-center">
                    <div className="leading-none px-2 inline-block text-3xl text-black tracking-wide font-extrabold  transform ">
                      Sign Up to <span className="text-blue-500">Q</span>uiz<span className="text-blue-500 font-extrabold">C</span>lash
                    </div>
                  </div>
                  <div className="mx-auto max-w-xs">
                    <div>
                      <div className="flex items-center">
                        <User size="24" color="#94A3B8" />&nbsp;&nbsp;
                        <p className="text-[#94A3B8]">Username</p>

                      </div>
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="username"
                        name='username'
                        placeholder="Please type your username"
                      />
                    </div>
                    {state?.errorUsername && (
                      <span className="text-red-600 mt-2">{state.errorUsername}</span>
                    )}
                    <div className="mt-10">
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
                    </div>
                    {state?.errorEmail && (
                      <span className="text-red-600 mt-2">{state.errorEmail}</span>
                    )}
                    <div className="mt-10">
                      <div className="flex items-center">
                        <Key size="24" color="#94A3B8" />&nbsp;&nbsp;
                        <p className="text-[#94A3B8]">Password</p>

                      </div>

                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="password"
                        name='password'
                        placeholder="Please type your password"
                      />
                    </div>
                    {state?.errorPassword && (
                      <span className="text-red-600 mt-2">{state.errorPassword}</span>
                    )}
                    <button type='submit' className=" mt-10 tracking-wide font-semibold bg-blue-500 hover:bg-blue-600 cursor-pointer text-gray-100 w-full py-4 rounded-2xl transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      Sign Up
                    </button>
                  </div>
                  <h1 className="font-semibold mt-5 ml-[200px]">Already have an account? <Link href={"/login"} className='cursor-pointer'>Log in</Link></h1>

                </div>
              </div>
              <p className="mt-10 text-center text-[#94A3B8]">@ Copyright 2025 | QuizeClash KSHRD Center</p>

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
        </div>
      </form>
    </>
  )
}
