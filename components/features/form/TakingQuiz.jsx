import { Timer } from "lucide-react";
// import { QuestionForm } from "./QuestionResult";
import ButtonGoto from "./ButonGoto";
import { getAllQuizById } from "@/services/quiz-service";
import { PaginationExample } from "../pagination/Pagination";
import CountdownTimer from "../time/CountdownTimer";
import { QuestionForm } from "./QuestionResult";
import QuestionQuizForm from "./QuestionQuiz";

export default async function TakingQuizForm({ quizId, totalpages }) {
  let size = 3;
  const questiones = await getAllQuizById({ quizId, totalpages, size });
  var datas = [];
  datas = questiones?.payload;
  console.log("questiones", datas);
  return (
    <div>
      <div className="py-5">
        <ButtonGoto />
      </div>
      <div className="flex justify-between w-full">
        <p className="text-black font-bold text-2xl">Practice JavaScript</p>

        <CountdownTimer durationInSeconds={3000} />
      </div>
      <div className="pb-10">
        <p className="text-sm my-5">1 of {totalpages} questions</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-[#8338EC] h-2.5 rounded-full transition-all duration-300"
            style={{ width: "45%" }}
          ></div>
        </div>
      </div>
      <div className="w-full bg-gray-200 h-0.5 rounded-2xl"></div>

      {datas.map((e) => (
        <QuestionQuizForm {...e} key={e.questionId} />
      ))}

      <div className="w-full bg-gray-200 h-0.5 rounded-2xl"></div>
      <div className="mt-10 ml-[1055px]">
        <PaginationExample totalItems={totalpages} />
      </div>
    </div>
  );
}
