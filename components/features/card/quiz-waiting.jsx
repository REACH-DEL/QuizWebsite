import React from 'react'
import { TimerPause, Book1, Profile2User } from 'iconsax-react';

export default function QuizWaiting({type, detail}) {
  return (
    <div>
      {
        type === "duration" && (
          <div className="flex gap-6 items-center w-3/5 bg-white rounded-md px-5 py-2.5">
            <div className="w-fit p-2 bg-[#D2E6FF] rounded-full">
              <TimerPause size="24" color="var(--primary-color)" />
            </div>
            <div>
              <p className="text-[13px] text-gray-400">Duration</p>
              <p className="text-[15px]"><span>{detail}</span> minutes</p>
            </div>
          </div>
        )
      }
      {

        type === "questions" && (
          <div className="flex gap-6 items-center w-3/5 bg-white rounded-md px-5 py-2.5">
          <div className="w-fit p-2 bg-[#D2E6FF] rounded-full">
            <Book1 size="24" color="var(--primary-color)"/>
          </div>
          <div>
            <p className="text-[13px] text-gray-400">Questions</p>
            <p className="text-[15px]"><span>{detail}</span> Questions</p>
          </div>
        </div>
        )
      }
      {
        type === "students" && (
          <div className="flex gap-6 items-center w-3/5 bg-white rounded-md px-5 py-2.5">
            <div className="w-fit p-2 bg-[#D2E6FF] rounded-full">
              <Profile2User size="24" color="var(--primary-color)"/>
            </div>
            <div className="w-full pe-5">
              <p className="text-[13px] text-gray-400">Students</p>
              <p className="text-[15px]"><span>{detail}</span> connected</p>
              <div className="w-3/4 h-3 rounded-full bg-[#D2E6FF] shadow-inner mt-2">
                <div className="h-full rounded-full bg-[var(--primary-color)] w-1/4"></div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
