import Footer from "@/components/layout/footer";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function TakingQuiz() {
  return (
    <>
      <div className="flex justify-center items-center h-screen dark:bg-gray-800 w-full">
        <div className="text-center max-w-6xl mx-10">
          <h1 className="my-3 text-3xl font-bold tracking-tight text-blue-500 md:text-5xl dark:text-gray-100">
            Congratulations!
          </h1>
          <div>
            <p className="my-2 text-[52px] font-bold text-center text-[#1E293B] ">
              You have reached the end of the quiz
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
            <div className="flex justify-center">
              <a
                className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b shadow-blue-200 hover:shadow-2xl hover:shadow-blue-200 hover:-tranneutral-y-px "
                href="#"
              >
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src="/images/seeResult.png"
                    width={20}
                    height={20}
                    alt="logo"
                  />
                  <span>See Results</span>
                </div>
              </a>
            </div>

            <a
              className="inline-block border border-blue-300 w-auto text-center min-w-[200px] px-6 py-4 text-blue transition-all  rounded-md shadow-xl  hover:bg-blue-400 hover:text-white shadow-neutral-200 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-200 hover:-tranneutral-y-px"
              href="#"
            >
              <div className="text-blue-900 flex items-center gap-3">
                <ArrowLeft />
                Go to Homepage
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
