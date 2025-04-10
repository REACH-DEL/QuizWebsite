"use client";

import { useState } from "react";
import SelectOptionComponent from "./SelectOptionComponent";

export default function QuestionQuizForm({ ...props }) {
  const [selectId, setSelectId] = useState(null);
  return (
    <>
      <div className="flex justify-between pt-10">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          {props?.questionText}
        </h3>
        <h3 className="text-red-500">{props?.points} pts</h3>
      </div>
      <form>
        <ul className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white flex gap-5 flex-col pb-5">
          {props?.options.map((option) => (
            <SelectOptionComponent
              key={option.optionId}
              {...option}
              isSelect={selectId === option.optionId}
              onSelect={() => setSelectId(option.optionId)}
            />
          ))}
        </ul>
      </form>
    </>
  );
}
