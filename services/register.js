import { apiRequest } from "@/utils/api";
export async function registerHandle({ fullName , email, password }) {
      return apiRequest("/auth/register", "POST", {fullName, email, password });
  }
  
  export const getUser = async () => {
    return apiRequest("/users/user", "GET",  );
}