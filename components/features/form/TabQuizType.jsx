
"use client";
import { useState } from "react";
import FormCreateQuiz from "./FormCreateQuiz";
function TabQuizType({ multiple, setMultiple, trueFalse, setTrueFalse }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTrue, setIsVisibleTrue] = useState(false);
  function handleClick() {
    setIsVisible(true);
    setIsVisibleTrue(false);
  }
  function handleClickTrue() {
    setIsVisibleTrue(true);
    setIsVisible(false);
  }
  return (
    <>
      <div className="w-full max-w-md mt-4">
        <div className="flex rounded border-gray-300 ">
          <button
          type="button"
            className="min-w-[30%] py-4 text-center  font-medium text-gray-700 bg-gray-100 rounded-l-lg focus:outline-none active:bg-gray-200"
            onClick={handleClick}
          >
            Multiple Choice
          </button>
          <button     type="button" className="min-w-[30%] py-4 text-center  font-medium text-gray-700 bg-gray-100 rounded-r-lg focus:outline-none active:bg-gray-200" onClick={handleClickTrue}>
            True or False
          </button>
        </div>
      </div>
      {
        isVisibleTrue ? (
          <FormCreateQuiz
            type="True False"
            text="Add one more True False question"
            questionList={trueFalse}
            setQuestionList={setTrueFalse}
          />
        ) : (
          <FormCreateQuiz
            type="Multiple Choice"
            text="Add one more multiple choice question"
            questionList={multiple}
            setQuestionList={setMultiple}
          />
        )
      }
    </>  
  );
}

export default TabQuizType;


