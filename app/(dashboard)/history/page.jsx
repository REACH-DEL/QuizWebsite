import HistoryCard from '@/components/features/card/historycard'
import Search from '@/components/ui/search'
import { apiRequest } from '@/utils/api';
import React from 'react'

export default async function page() {
  const response = await apiRequest("/history");
  const history = await response?.payload;

  return (
    <>
      <div className='px-20'>
        <div>
          <Search />
        </div>
        <div className='grid w-full grid-cols-4 gap-7 mt-10'>
          {history && history.map((item, key) => (
            <HistoryCard
              key={key}
              id={item.quizId}
              title={item.title}
              description={item.description}
              total={item.totalQuestion ? item.totalQuestion : 0}
              subject={item.subjectName}
              time={item.formatTime}
              startTime={item.startTime}
              code={item.accessCode}
              isSchedule={item.isSchedule}
            />
          )
          )}
        </div>

      </div>
    </>
  )
}
