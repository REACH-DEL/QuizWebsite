
import FormQuizDetail from "@/components/features/form/FormQuizDetail";
import { ArrowLeft } from "iconsax-react";
import NavbarContent from "@/components/layout/Navbar";
import { getSubject } from "@/services/subject-service";


export default async function page() {
 const subjectList=await getSubject();

 console.log("respone subject ",subjectList.payload)
  return (
    <div className="mx-auto w-[75%] px-10">
      <NavbarContent />
      <div className="w-full flex items-center mb-6 mt-6">
        <div className="w-[40%]">
          <button className="flex p-2 pr-4 text-[var(--primary-color)]  border-1 rounded-xl  border-[var(--primary-color)]">
            <ArrowLeft
              color="#3A86FF"
              size={27}
              variant="Outline"
              className="mx-2"
            />{" "}
            Back
          </button>
        </div>
        <p className=" w-[60%] text-3xl font-bold ">Untitle Quizes</p>
      </div>
    
      <FormQuizDetail subject={subjectList.payload}/>
    </div>
  );
}
