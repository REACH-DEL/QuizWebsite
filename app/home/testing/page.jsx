import React from 'react'
import UserProfile from '../../../components/features/user-profile/user-profile';
import { TimerPause, Book1, DocumentFilter } from 'iconsax-react';
import CountdownCard from '../../../components/features/card/countdown-card';
import QuizWaiting from '../../../components/features/card/quiz-waiting';
import UserCardOnline from '../../../components/features/card/user-card-online';
import Image from 'next/image';
import QuizTipCard from '../../../components/features/card/quiz-tip-card';

export default function TestingPage() {
  return (
    <div className="w-full background-waiting">
      <div className="flex flex-col w-full h-screen items-center justify-center gap-6 pt-5 px-14">
        <div className="w-10/12 h-[650px] bg-[url(/assets/svg/background-all-users-waiting.svg)] bg-cover bg-left-bottom bg-no-repeat rounded-xl shadow">
          
           {/* header */}
          <div className="w-full h-[120px] bg-[url(/assets/svg/background-waiting-head.svg)] rounded-t-xl">
            <div className="h-full px-8 flex justify-between items-center">
              <div className="text-4xl text-white">
                <h2>Basic Web Design</h2>
                <p className="text-xl">
                  Instructor: <span>Penh Seyha</span>
                </p>
              </div>
              <div className="flex gap-5 items-center px-5 py-3 rounded-full bg-[#509EFF] w-fit">
                <TimerPause size="34" color="#FFFF"/>
                <span className="text-xl text-white">Not Started</span>
              </div>
            </div>
          </div>

          {/* body */}
          <div className="w-full flex justify-center items-center">
            <div className="w-1/2">
              <div>
                <CountdownCard />
                <div className="ps-8">
                  <div className="flex flex-col gap-3 px-5 py-6 bg-[#137CFF]/4 rounded-xl">
                    <QuizWaiting type="duration" detail="15" />
                    <QuizWaiting type="questions" detail="30" />
                    <QuizWaiting type="students" detail="27" />
                  </div>
                </div>
                
              </div>
            </div>
            <div className="w-1/2">
              <div className="px-7">
                <h2 className="text-xl py-3">Students Waiting</h2>
                <div className="flex gap-5">
                  <Image src="https://github.com/shadcn.png" width={50} height={50} alt="Picture of the user"
                    className="rounded-full" 
                  />
                  <Image src="https://github.com/shadcn.png" width={50} height={50} alt="Picture of the user"
                    className="rounded-full" 
                  />
                  <Image src="https://github.com/shadcn.png" width={50} height={50} alt="Picture of the user"
                    className="rounded-full" 
                  />
                  <Image src="https://github.com/shadcn.png" width={50} height={50} alt="Picture of the user"
                    className="rounded-full" 
                  />
                  <Image src="https://github.com/shadcn.png" width={50} height={50} alt="Picture of the user"
                    className="rounded-full" 
                  />
                  <Image src="https://github.com/shadcn.png" width={50} height={50} alt="Picture of the user"
                    className="rounded-full" 
                  />
                  <Image src="https://github.com/shadcn.png" width={50} height={50} alt="Picture of the user"
                    className="rounded-full" 
                  />
                  <Image src="https://github.com/shadcn.png" width={50} height={50} alt="Picture of the user"
                    className="rounded-full" 
                  />
                  <Image src="https://github.com/shadcn.png" width={50} height={50} alt="Picture of the user"
                    className="rounded-full" 
                  />
                  <div className="px-2 py-3 text-white rounded-full text-xl bg-[var(--primary-color)]">27+</div>
                </div>

                <h2 className="text-xl text-gray-400 py-3">Recently Joined</h2>
                <div className="flex flex-col gap-2">
                  <UserCardOnline username="vargant" profile="https://github.com/shadcn.png" />
                  <UserCardOnline username="John Doe" profile="https://github.com/shadcn.png" />
                  <UserCardOnline username="Alice Smith" profile="https://github.com/shadcn.png" />
                  <UserCardOnline username="Alastor" profile="https://github.com/shadcn.png" />
                  <UserCardOnline username="Charlie Morningstar" profile="https://github.com/shadcn.png" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* footer */} 
        <div className="w-10/12 h-[180px] bg-[url(/assets/svg/background-quiz-tips.svg)] rounded-xl px-8 py-5">
          <div className="flex gap-2 items-center">
            <DocumentFilter size="24" color="var(--primary-color)" />
            <p className="text-[var(--primary-color)] text-xl">Quiz Tips</p>
          </div>
          <div className="flex gap-8 pt-4">
            <QuizTipCard title="Read each question carefully before answering" color="blue" />
            <QuizTipCard title="Budget your time wisely across all questions" color="pink" />
            <QuizTipCard title="Don&apos;t waste your life too long on a question" color="blue" />
            <QuizTipCard title="Review your answer if time permits" color="pink" />
          </div>
        </div>
      </div>
    </div>
  )
}
