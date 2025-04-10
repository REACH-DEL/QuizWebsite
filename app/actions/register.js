"use server";

import { registerHandle } from "@/services/register";

export const registerAction = async (_, formData) => {
  console.log("formData", formData);
  const fullName = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(fullName, email, password);
  const user = await registerHandle({ fullName, email, password });
  console.log(user);
  if (!password || !email || !fullName) {
    return {
      errorPassword: "Password is required",
      errorEmail: "Email is required",
      errorUsername: "Username is required",
    };
  }
  if (user?.status === "CREATED") {
    return user;
  }
  return user;
  //
};
