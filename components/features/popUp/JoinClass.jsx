import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Verification } from "@auth/core/errors";
import { AddSquare, MessageQuestion } from "iconsax-react";
import { Barcode, ScanBarcode, VeganIcon } from "lucide-react";
import { Questrial, Victor_Mono } from "next/font/google";

export default function JoinClass() {
  return (
    <>
      {/* <div className="">
        <p className="">Join Class</p>
        <p className="">Please enter your class code to access the class</p>
        <div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input
                type="text"
                id="username"
                name="username"
                className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Type inside me"
              />
              <label
                htmlFor="username"
                className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
              >
                Type inside me
              </label>
            </div>
          </div>
        </div>
      </div> */}
      <Dialog>
        <DialogTrigger>
          {" "}
          <div>
            <a
              href="#"
              className="inline-block px-7 py-1.5 overflow-hidden text-sm transition-transform rounded-xl group text text-blue-700/70 bg-blue-300/50 hover:bg-blue-500/70 hover:text-white"
            >
              <div className="relative py-1.5 inline-block ">
                <div className="flex gap-5 items-center">
                  <AddSquare color="#3A86FF" size={27} variant="Outline" />
                  <div className="text-[#3A86FF]">Join by code</div>
                </div>
              </div>
            </a>
          </div>{" "}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="font-bold text-3xl text-[#387ADF]">
                Join Class
              </div>

            </DialogTitle>
            <DialogHeader>
              <div className="text-[#757575]">
                Please enter your class code to access the class
              </div>

            </DialogHeader>
            <DialogDescription>
              <div className="bg-white w-full py-4  rounded-lg">
                <div className="relative bg-inherit">

                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="peer shadow-xl  bg-transparent h-10 w-full rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-blue-500 focus:outline-none focus:border-rose-600"
                    placeholder="Quiz Code"
                  />
                  <label
                    for="username"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    <div className="flex gap-3">
                      <ScanBarcode color="#757575B2" size={27} variant="Outline" />
                      Quiz Code
                    </div>
                  </label>
                </div>
              </div>
            </DialogDescription>
            <Dialog>
              <div className="text-[#757575] flex gap-5">
                {/* <VeganIcon/> */}
                <MessageQuestion color="#757575B2" size={27} variant="Outline" />

                You can ask your teacher to get class code.</div>
            </Dialog>
          </DialogHeader>
          <DialogTitle>
            <div className="flex ml-50 mt-10 gap-3 max-w-sm">
              <button className="py-2.5 w-25 rounded-lg text-sm font-medium border-1 bg-[#FFFFFF] text-[#757575]">
                Cancel
              </button>
              <button className="py-2.5 w-25 rounded-lg text-sm font-medium text-white bg-blue-600">
                Join
              </button>
            </div>
          </DialogTitle>
        </DialogContent>
      </Dialog>
    </>
  );
}
