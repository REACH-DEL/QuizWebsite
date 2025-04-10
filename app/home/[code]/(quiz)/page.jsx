import TakingQuizForm from "@/components/features/form/TakingQuiz";
import { apiRequest } from "@/utils/api";

export default async function Result({ params }) {
  const quizId = (await params).code;
  const totalQuiz = await apiRequest(`/questions/question-option/${quizId}` , "GET")
  return (
    <div className="mx-auto w-[90%] pt-10">
      {
        console.log(totalQuiz?.payload?.length)
      }
      <TakingQuizForm quizId={quizId} totalpages={totalQuiz?.payload?.length} />
    </div>
  );
}