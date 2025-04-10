
import React from 'react'
import Search from '@/components/ui/search'
import { getAllFilter, getAllQuiz } from '@/services/quiz-service'
import Card from '@/components/features/card/card'
import { getSubject } from '@/services/subject';
export default async function HomePage({searchParams}) {
    const quiz = searchParams?.q || "";
    const subject = searchParams?.subject || "";
    const date = searchParams?.date || "";

    const quizs = await getAllFilter(quiz, subject, date);
    
    const subjects = await getSubject();
    return (
        <>
            <div className='px-20'>
                <div>
                    <Search data={subjects}/>
                </div>
                <div className="h-screen overflow-auto mt-5">
                    <div className="grid grid-cols-4 gap-5 mt-4">
                        {
                            quizs?.payload?.map((items ,  index) => (
                                <Card key={index} props={items}/>
                            ))
                       }
                    </div>
                </div>
            </div>

        </>
    )
}