"use server"

import { createQuizService } from "@/services/quiz-service";

export const createQuiz = async (formData) => {
    console.log("FORM", formData);
    const title=formData.get("title");
    const description=formData.get("description");
    const isRealTime=formData.get("modeSubject") == "normal" ? false : true;
    const timeLimit=isRealTime == "normal" ? "" : formData.get("timeLimit");
    const subjectId=formData.get("subject");
    // const isRealTime=true;
    const startAt=formData.get("date")
  
   
    const respone =await createQuizService({ title,description,isRealTime,timeLimit,startAt,subjectId })
   
    console.log("respone ==",respone);
    console.log("subjectId ==",subjectId);
    
 
};
