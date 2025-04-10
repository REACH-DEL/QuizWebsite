import React from 'react'
import ButtonSignOut from './ButtonSignOut'
import { getUser } from '@/services/register';

export default async function Profile() {
    const  profile  = await  getUser();
    console.log(profile)
    const name = profile?.payload?.fullName || "Monster";
    const email = profile?.payload?.email || "Smmy@gmail.com";
    const avatarUrl = profile?.payload?.image || "https://i.pinimg.com/736x/da/d5/14/dad5148b7bc4b7a4a00df5677efd7762.jpg";
    return (
        <div className="flex items-center space-x-3">
            <img
                src={avatarUrl}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border border-gray-300"
            />
            <div className="flex flex-col">
                <span className="text-sm font-medium text-black">{name}</span>
                {email && <span className="text-sm text-blue-500">{email}</span>}
            </div>
            <div className="text-red-500 hover:text-red-700 text-sm cursor-pointer">
                <ButtonSignOut />
            </div>
        </div>
    )
}