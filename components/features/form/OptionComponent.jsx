import { CloseCircle } from "iconsax-react";
import { CircleCheck } from "lucide-react";

export default function ChooseOption({ optionText, isCorrect, isChoose }) {
  const lightColor = (isCorrect || isChoose) ? (isCorrect == isChoose ? "#3A86FF1A" : "#FF006E1A") : "#B9B9B91A";
  const color = (isCorrect || isChoose) ? (isCorrect == isChoose ? "#3A86FF" : "#FF006E") : "#B9B9B9";
  const text = (isCorrect || isChoose) ? (isCorrect == isChoose ? "Correct" : "Incorrecct") : "";
  const isValid = (isCorrect || isChoose) ? (isCorrect == isChoose ? true : false) : null;

  return (
    <>
      <li
        className={`w-full rounded-xl bg-[${lightColor}] px-5 py-4`}
      >
        <div className="flex w-full items-center justify-between pl-4">
          <div className="flex gap-3">
            {isValid &&
              <div className={`w-4 h-4 p-1 rounded-full bg-[#3A86FF44]`}>
                <div className="w-full h-full rounded-full bg-[#3A86FF]"></div>
              </div>
            }
            {isValid == false &&
              <div className={`w-4 h-4 p-1 rounded-full bg-[#FF006E44]`}>
                <div className="w-full h-full rounded-full bg-[#FF006E]"></div>
              </div>
            }
            {isValid == null &&
              <div className={`w-4 h-4 p-1 rounded-full bg-[#B9B9B944]`}>
                <div className="w-full h-full rounded-full bg-white"></div>
              </div>
            }
            <p>{optionText}</p>
          </div>
          <div className="flex items-center gap-3">
            {isValid &&
              <CircleCheck size={25} color="#3A86FF" />
            }
            {isValid == false &&
              <CloseCircle size={25} color="#FF006E" />
            }
            <p className={`text-sm text-[${color}]`}>{text}</p>
          </div>
        </div>
      </li>
    </>
  );
}