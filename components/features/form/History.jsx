import { Timer } from "lucide-react";
import ButtonGoto from "./ButonGoto";
import QuestionResultComoponent from "./QuestionResult";

export default function HistoryForm({ quiz, question }) {
  return (
    <div>
      <div className="py-10">
        <ButtonGoto />
      </div>
      <div className="flex justify-between w-full">
        <p className="text-black font-bold text-3xl">{quiz?.title}</p>

        <button type="button" className="bg-blue-500 px-8 py-2 rounded-2xl flex items-center gap-1">
          <Timer color="white" />
          <p className="text-white mt-1">{quiz?.formatTime}</p>
        </button>
      </div>
      <div className="pb-10">
        {/* Progress */}
        <p className="text-sm my-5">{quiz?.totalQuestion} of {quiz?.totalQuestion} Questions</p>
        <div className="w-full bg-slate-100 rounded-full h-2.5">
          <div
            className="bg-[#8338EC] h-2.5 rounded-full"
            style={{ width: "100%" }}
          ></div>
        </div>
      </div>
      <div className="w-full bg-slate-100 h-0.5 rounded-2xl"></div>
      <div className="flex gap-2 py-7 text-lg">
        <p>Total Score:</p>
        <p className="text-amber-600 font-bold">{quiz?.achieveScore}</p>
        <p>/ {quiz?.totalScore} pts</p>
      </div>
      <div className="w-full bg-slate-100 h-0.5 rounded-2xl"></div>

      {question.map((item, key) => (
        <QuestionResultComoponent key={key} {...item} />
      ))}

      {/* <div className="mt-10 ml-[1055px]">
        <PaginationComponent />
      </div> */}
    </div>
  );
}
