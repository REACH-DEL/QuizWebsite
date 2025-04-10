import { Nunito } from 'next/font/google';
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className="container mx-auto w-full  border-neutral-700/20 py-10  bg-white mt-0">
        <div className=" ">
          <div>
            <a href="/">
              <Image src="/images/logo.png" width={50} height={50} alt="logo" />
            </a>
          </div>

          <div className="flex justify-between mb-5">
            <div>
              <p className="my-4 font-bold text-[24px]">
                Having an absolutely amazing two-day holiday <br /> filled with
                <span className="text-[#FF006E]"> endless relaxation</span> and zero stress. <br /> Just the perfect
                break!
              </p>
              <p className="justify-between text-sm text-gray-700">
                QuizClash, 2025
              </p>
            </div>
            <div>
                <p className="my-4 font-bold text-[24px]">Just because <span className="text-[#FB5607]">it's hard </span> doesn't <br /> mean it's impossible. <br /> <span className="text-[#8338EC]">YOU CAN DO IT.</span></p>
            </div>
          </div>
          <hr  />

          <div className="mt-10 flex justify-between text-sm text-gray-700">
            <div className="">
              <div>© 2024 YourService.io All rights reserved.</div>
            </div>
            <div className="text-sm text-gray-700 flex w-80 justify-between">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookies</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
