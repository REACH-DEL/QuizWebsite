import HistoryForm from "@/components/features/form/History";
import { apiRequest } from "@/utils/api";

export default async function HistoryDetail({ params }) {
    const id = (await params)?.id;
    console.log("QUIZ: " + id);

    const quizRes = await apiRequest(`/history/quiz/${id}`);
    const quizPayload = await quizRes?.payload;

    const questionRes = await apiRequest(`/history/question/${id}`);
    const questionPayload = await questionRes?.payload;

    return (
        <>
            <div className="mx-auto w-[75%] px-10 pt-10">
                <div>
                    <HistoryForm quiz={quizPayload} question={questionPayload} />
                </div>
            </div>
        </>
    );
}