import { auth } from "@/auth";
import { apiRequest } from "@/utils/api";

export async function createQuizService({
  title,
  description,
  isRealTime,
  timeLimit,
  startAt,
  subjectId,
}) {
  const date = new Date(startAt);

  const session = await auth();
  const token = session?.payload?.token;
  const res = fetch(`http://192.168.42.137:8080/api/v1/quizzes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: title,
      description: description,
      isRealTime: isRealTime,
      timeLimit: timeLimit,
      startAt: date,
      subjectId: subjectId,
    }),
  });
  const data = (await res).json();
  return data;
}
export const getAllQuiz = async () => {
  return apiRequest("/quizzes?offset=1&limit=10", "GET");
};

export const getAllQuizById = async ({ quizId, totalpages, size }) => {
  return apiRequest(`/questions/quiz/${quizId}?page=1&size=${size}`, "GET");
};

export const getAllFilter = async (quizName, subjectId, dateRange) => {
  return apiRequest(
    `/quizzes/filter?quizName=${quizName}&subjectId=${subjectId}&dateRange=${dateRange}&page=1&limit=10`,
    "GET"
  );
};

export const getUserQuiz = async () => {
  return apiRequest("/quizzes/user?offset=1&limit=10", "GET");
};

export const deleteUserQuiz = async ({ id }) => {
  return (response = await apiRequest(`/quizzes/${id}`, "DELETE"));
};
