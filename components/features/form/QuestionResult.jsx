
import ChooseOption from "./OptionComponent";


export default function QuestionResultComoponent({ ...promps }) {



  return (
    <>
      <div className="flex justify-between pt-10">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          {promps.questionText}
        </h3>
        <h3 className="text-red-500">{promps.points} pts</h3>
      </div>
      <ul
        className={`w-full text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white flex gap-5 flex-col pb-5`}
      >
        {promps.options.map((option) => (
          <ChooseOption key={option.optionId} {...option} />
        ))}
      </ul>
    </>
  );
}
