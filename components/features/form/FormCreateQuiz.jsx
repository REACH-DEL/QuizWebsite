import { Add, ArrowDown2 } from "iconsax-react";
import React from "react";
import { Tooltip } from "../popUp/Tooltip";

function FormCreateQuiz({ type, text, questionList, setQuestionList }) {
  const handleAddQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      question: "",
      score: "",
      isOpen: true,
      selectedOption: type === "Multiple Choice" ? "Option 1" : "True",
      options: type === "Multiple Choice" ? ["", ""] : [],
    };
    setQuestionList([...questionList, newQuestion]);
  };

  const toggleOpen = (id) => {
    setQuestionList((prev) =>
      prev.map((q) => (q.id === id ? { ...q, isOpen: !q.isOpen } : q))
    );
  };

  const handleQuestionChange = (id, field, value) => {
    setQuestionList((prev) =>
      prev.map((q) => (q.id === id ? { ...q, [field]: value } : q))
    );
  };

  const handleOptionChange = (id, index, value) => {
    setQuestionList((prev) =>
      prev.map((q) =>
        q.id === id
          ? {
              ...q,
              options: q.options.map((opt, i) => (i === index ? value : opt)),
            }
          : q
      )
    );
  };

  const handleAddOption = (id) => {
    setQuestionList((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, options: [...q.options, ""] } : q
      )
    );
  };

  return (
    <>
      {questionList.map((q, index) => (
        <div className="border-2 px-4 rounded-xl shadow-md mt-4" key={index}>
          <Tooltip
            label="Delete question"
            onDelete={() =>
              setQuestionList((prev) => prev.filter((_, i) => i !== index))
            }
          >
            <div className="flex items-center justify-between py-4">
              <h3 className="text-md text-center font-bold">
                {q.question === "" ? "What's Java?" : q.question}
              </h3>
              <div className="flex gap-4">
                <div onClick={() => toggleOpen(q.id)} className="cursor-pointer">
                  <ArrowDown2
                    color="#BBBB"
                    size={27}
                    variant="Outline"
                    className={`transform transition-transform ${
                      q.isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
            </div>
          </Tooltip>
          {q.isOpen && (
            <div className="w-full bg-white">
              <div className="-mx-3 flex justify-between flex-wrap">
                <div className="w-[78%] px-3">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Question
                    </label>
                    <input
                      name="question"
                      value={q.question}
                      onChange={(e) =>
                        handleQuestionChange(q.id, "question", e.target.value)
                      }
                      type="text"
                      placeholder="What's Java?"
                      className="w-full rounded-md border-none bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-[20%] px-3">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Score
                    </label>
                    <input
                      name="score"
                      value={q.score}
                      onChange={(e) =>
                        handleQuestionChange(q.id, "score", e.target.value)
                      }
                      type="text"
                      placeholder="Enter score"
                      className="w-full rounded-md border-none bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="-mx-3 flex justify-between flex-wrap">
                <div className="w-full px-3">
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Option
                    </label>
                    {type === "Multiple Choice" ? (
                      <div className="space-y-4">
                        {q.options.map((opt, i) => (
                          <Tooltip
                            key={i}
                            onDelete={() => {
                              const updatedOptions = q.options.filter(
                                (_, j) => j !== i
                              );
                              handleQuestionChange(
                                q.id,
                                "options",
                                updatedOptions
                              );
                            }}
                          >
                            <div className="flex items-center gap-3 rounded-md bg-gray-50 py-3 px-6">
                              <input
                                type="radio"
                                name={`radio-${q.id}`}
                                className="h-5 w-5"
                                value={`Option ${i + 1}`}
                                checked={
                                  q.selectedOption === `Option ${i + 1}`
                                }
                                onChange={(e) =>
                                  handleQuestionChange(
                                    q.id,
                                    "selectedOption",
                                    e.target.value
                                  )
                                }
                              />
                              <input
                                type="text"
                                placeholder={`Option ${i + 1}`}
                                className="flex-1 border-none bg-transparent outline-none"
                                value={opt}
                                onChange={(e) =>
                                  handleOptionChange(q.id, i, e.target.value)
                                }
                              />
                            </div>
                          </Tooltip>
                        ))}
                        <p
                          className="text-purple-400 flex items-center cursor-pointer"
                          onClick={() => handleAddOption(q.id)}
                        >
                          <Add
                            color="#800080"
                            size={27}
                            variant="Outline"
                          />
                          Add one more option
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {["True", "False"].map((label, i) => (
                          <label
                            key={i}
                            className="flex items-center rounded-md bg-gray-50 py-3 px-6"
                          >
                            <input
                              type="radio"
                              name={`radio-${q.id}`}
                              className="h-5 w-5"
                              id={`radio-${q.id}-${i}`}
                              value={label}
                              checked={q.selectedOption === label}
                              onChange={(e) =>
                                handleQuestionChange(
                                  q.id,
                                  "selectedOption",
                                  e.target.value
                                )
                              }
                            />
                            <label
                              htmlFor={`radio-${q.id}-${i}`}
                              className="pl-3 text-base font-medium text-[#07074D]"
                            >
                              {label}
                            </label>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <p
        className="text-yellow-400 flex items-center mt-4 cursor-pointer"
        onClick={handleAddQuestion}
      >
        <Add color="#FfBE0B" size={27} variant="Outline" />
        {text}
      </p>
    </>
  );
}

export default FormCreateQuiz;
