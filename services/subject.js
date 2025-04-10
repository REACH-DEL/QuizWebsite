import { apiRequest } from "@/utils/api";

export const getSubject = async () => {
    return apiRequest("/subjects?offset=1&limit=10", "GET");
}