'use server'

import { signOut } from "@/auth";  // Custom signOut function
import { redirect } from "next/navigation";  // Used to redirect after sign out
export const signOutAction = async (_, formData) => {
  await signOut();
  redirect('/login');   
  
};
