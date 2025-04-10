"use server";
import { auth, signIn } from "@/auth";
import { loginService } from "@/services/login-service";
import { redirect } from "next/navigation";

export const loginAction = async (_, formData) => {
  const sessoin  = await auth();
  console.log("sessoin" ,sessoin)
  const email = formData.get("email");
  const password = formData.get("password")
  console.log("Token:" , sessoin?.payload?.token)

  if(sessoin?.payload?.token){
    redirect("/home")
  }

  if (!password || !email) {
    return {
      errorPassword: "Password is required",
      errorEmail: "Email is required",
    };
  }

  const res = await loginService({ email, password });
  
  if (res?.status != "OK") {
    return res;
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (e) {
    redirect("/login");
  }
  return res;
  
  // redirect("/home");
  
};