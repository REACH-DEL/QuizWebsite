import React from 'react'
import UserProfile from '../user-profile/user-profile';

export default function UserCardOnline({username, profile}) {
  return (
    <div className="text-sm px-5 py-4 bg-[#137CFF]/4 w-full flex justify-between items-center rounded-xl">
      <div className="flex gap-3 items-center">
        <UserProfile url={profile} />
        <h3 className="font-semibold">{username}</h3>
      </div>
      <div className="text-gray-500">Just now</div>
    </div>
  )
}
