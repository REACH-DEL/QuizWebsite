import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image';

export default function UserProfile({url}) {
  return (
    <>
      <Avatar>
        <AvatarImage src={url} />
        <AvatarFallback>user profile</AvatarFallback>
      </Avatar>
    </>
  )
}
