"use client"
import React, { useActionState } from 'react'
import { Logout } from 'iconsax-react'
import { signOutAction } from '@/app/actions/signout';

export default function ButtonSignOut() {
    const [state, formAction, isPending] = useActionState(signOutAction, null);
  
  return (
    <form action={formAction}>
        <button type='submit'>
          <Logout  color="#fb2c36" size={25} variant='outline' />
        </button>
    </form>
  )
}
