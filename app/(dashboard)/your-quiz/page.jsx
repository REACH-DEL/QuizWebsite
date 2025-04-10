import React from 'react'
import { getUserQuiz } from '@/services/quiz-service'
import YourCard from '@/components/features/card/your-card';
import CreateButton from '@/components/ui/create-button';

export default async function page() {
  const quizs = await getUserQuiz();
  return (
    <>
      <div className="px-7">
        <div>
          <CreateButton />
        </div>
        <div className="h-screen overflow-auto mt-5 no-scrollbar">
          <div className="grid grid-cols-4 gap-5 mt-4">
            {
              quizs?.payload?.map((items, index) => (
                <YourCard key={index} props={items} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
