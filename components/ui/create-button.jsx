
import Link from "next/link";
import JoinClass from "../features/popUp/JoinClass";
import { AddSquare } from "iconsax-react";

export default function CreateButton() {
    return (
        <>
            <div className="w-full">
                <div className="flex justify-between w-full mt-10">
                    <div className="font-bold text-[20px]"></div>
                    <div>
                        <Link
                            href="/create-quiz"
                            className="inline-block px-7 py-1.5 overflow-hidden text-sm transition-transform rounded-xl group text text-blue-700/70 bg-blue-300/50 hover:bg-blue-500/70 hover:text-white"
                        >
                            <div className="relative py-1.5 inline-block ">
                                <div className="flex gap-5 items-center">
                                    <AddSquare color="#3A86FF" size={27} variant="Outline" />
                                    <div className="text-[#3A86FF]">Create Quiz</div>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>

                <form className=" flex justify-between w-full mt-10">
                    <div className="w-150">
                        <div className="relative">
                            <input
                                type="text"
                                name="q"
                                className="w-full border h-12 shadow pl-12 pr-4 rounded-xl dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
                                placeholder="Search by name"
                            />
                            <button
                                type="submit"
                                className="absolute left-4 top-1/2 transform -translate-y-1/2"
                            >
                                <svg
                                    className="text-gray-400 h-5 w-5 fill-current dark:text-teal-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 56.966 56.966"
                                >
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className=" text-gray-600 dark:text-gray-300 ">
                        <div className="relative flex border h-12 shadow  pr-4 rounded-xl dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200">
                            <select
                                className="bg-white dark:bg-gray-800 px-5 rounded-l-xl text-sm focus:outline-none outline-none border-gray-500 dark:border-gray-600 border-r-1 border-r-gray-300 cursor-pointer overflow-y-hidden"
                            >
                                <option value="">Subject</option>

                            </select>

                            <select name="date" className="px-5">
                                <option value="">Date</option>
                                <option value="yesterday">Yesterday</option>
                                <option value="week">Week</option>
                                <option value="month">Month</option>
                            </select>
                            <button
                                type="submit"
                                className="absolute inset-y-0 right-0 mr-2 flex items-center px-2"
                            >
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
