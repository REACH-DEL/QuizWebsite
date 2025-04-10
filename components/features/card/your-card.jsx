import { Button } from "@/components/ui/button";
import { CalendarEdit, Code1, MessageQuestion, More, Timer } from "iconsax-react";
import Link from "next/link";
import PopMe from "../select/select";
export default function YourCard({ props }) {
    return (
        <>
            <div className="flex flex-wrap gap-4 mt-5">
                {/* Add group class for hover effects */}
                <div className="group relative cursor-pointer max-w-sm rounded-3xl overflow-hidden shadow">
                    <div className="p-3">
                        {props.isRealTime &&
                            <div className="absolute ml-8 mt-3 z-10">
                                <CalendarEdit size="32" color="#000000" className="absolute top-0" />
                            </div>
                        }
                        <PopMe id={props?.quizId} />
                        <img
                            className="w-full  duration-300"
                            src="js.png"
                            alt="Javascript"
                        />

                        {/* Content Section */}
                        <div className="px-2 py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex justify-between py-2 px-4 bg-purple-100 rounded-full">
                                    <div className="flex items-center">
                                        <Code1 size="24" color="#8338EC" />
                                        <p className="text-purple-700 font-semibold ml-2">
                                            {props?.subject?.subjectName}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-purple-500">{props?.accessCode}</p>
                            </div>
                            <div className="font-bold text-xl mt-2 mb-2">
                                {props?.title}
                            </div>
                            <p className="text-gray-700 text-base line-clamp-1">
                                {props.description}
                            </p>
                            <div className="flex mt-4 w-full justify-between items-center">
                                <div className="flex gap-2">
                                    <MessageQuestion size="24" color="#Ff0000" />
                                    <p className="text-red-500 whitespace-nowrap">{props?.totalScore > 1 ? props?.totalScore + " questions" : props?.totalScore + " question"}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Timer size="24" color="#Ff0000" />
                                    <p className="text-red-500">{props?.timeLimit}</p>
                                </div>
                            </div>
                        </div>
                        <Link href={`/home/${props?.accessCode}`}>
                            <button className="bg-amber-500 w-full p-3 rounded-xl cursor-pointer">
                                Join Quiz
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}