
import { apiRequest } from "@/utils/api";
export const loginService = async ({ email, password }) => {
  return apiRequest("/auth/login", "POST", { email, password });
};

export const getUserSerivce = async ({userId}) => {
  return apiRequest("/users/user", "GET" , {userId});
}