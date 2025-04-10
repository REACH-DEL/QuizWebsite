import { CalendarEdit, Code1, MessageQuestion, Timer } from "iconsax-react";
import Link from "next/link";

export function HistoryCard(props) {
  return (
    <>
      <Link href={`/quiz/${props.id}`} className="flex flex-wrap gap-4 mt-5">
        {/* Add group class for hover effects */}
        <div className="group cursor-pointer max-w-sm rounded-3xl overflow-hidden shadow">
          {/* Image Section with Overlay */}
          <div className="relative">
            <div className="absolute inset-0  bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            {props.isSchedule &&
              <div className="absolute ml-8 mt-8 z-10">
                <CalendarEdit size="32" color="#000000" />
              </div>
            }
            <img
              className="p-5 w-full transition-opacity duration-300"
              src="js.png"
              alt="Javascript"
            />
            {/* Pop-up text on hover */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="translate-y-8 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-semibold text-center w-[250px] text-black bg-white bg-opacity-75 p-4 rounded-full">
                  {props.startTime}
                </p>
              </div>
            </div>
            {/* Content Section */}
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex justify-between py-2 px-4 bg-purple-100 rounded-full">
                  <div className="flex items-center">
                    <Code1 size="24" color="#8338EC" />
                    <p className="text-purple-700 font-semibold ml-2">
                      {props.subject}
                    </p>
                  </div>
                </div>
                <p className="text-purple-500">{props.code}</p>
              </div>
              <div className="font-bold text-xl mt-2 mb-2">
                {props.title}
              </div>

              <p className="text-gray-700 text-base">
                {props.description}
              </p>
              <div className="flex mt-4 w-full justify-between items-center">
                <div className="flex gap-2">
                  <MessageQuestion size="24" color="#Ff0000" />
                  <p className="text-red-500 whitespace-nowrap">{props.total > 1 ? props.total + " questions" : props.total + " question"}</p>
                </div>
                <div className="flex gap-2">
                  <Timer size="24" color="#Ff0000" />
                  <p className="text-red-500">{props.time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default HistoryCard;
