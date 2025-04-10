"use client";
import React, { useState } from "react";
import TabQuizType from "./TabQuizType";
import { PopUpForm } from "../popUp/PopUpForm";
import { createQuiz } from "@/app/actions/quiz-action";

function FormQuizDetail({ subject }) {

  const [multiple, setMultiple] = useState([]);
  const [trueFalse, setTrueFalse] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    subject: "Java",
    date: "",
    timeLimit: "",
    modeSubject: "normal",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      let updated = { ...prev, [name]: value };
      if (name === "modeSubject" && value === "normal") {
        updated.date = "";
        updated.time = "";
      }
      return updated;
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (!formData.title) newErrors.title = "*Title is required";
    if (!formData.subject) newErrors.subject = "*Subject is required";

    if (formData.modeSubject !== "normal") {
      if (!formData.date) {
        newErrors.date = "*Please choose a date";
      } else if (new Date(formData.date) < currentDate) {
        newErrors.date = "*Selected date cannot be earlier than today";
      }
      if (!formData.time) {
        newErrors.time = "*Please enter duration";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target.closest("body").querySelector("#form-quiz");
    const formData = new FormData(form);
    await createQuiz(formData);
    if (!validateForm()) return;
    setFormData({
      title: "",
      subject: "Java",
      date: "",
      time: "",
      modeSubject: "normal",
      description: "",
    });
    setMultiple([]);
    setTrueFalse([]);
    setErrors({});
  };

  return (
    <div className="border-t-2 border-gray-200 pt-4">
      <h3 className="text-2xl pb-4">Quiz Detail</h3>
      <div className="flex items-center justify-center">
        <form className="w-full" id="form-quiz" onSubmit={handleSubmit}>
          <div className="w-full bg-white border-b-2">
            <div className="-mx-3 flex justify-between flex-wrap">
              <div className="w-[48%] px-3">
                <div className="mb-5">
                  <label
                    htmlFor="title"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Title
                  </label>
                  <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className={`w-full rounded-md bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280]  ${
                      errors.title ? "border-red-500" : "outline-none"
                    }`}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-xs mt-1">{errors.title}</p>
                  )}
                </div>
              </div>
              <div className="w-[48%] px-3">
                <div className="mb-5">
                  <label
                    htmlFor="subject"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full rounded-md bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] ${
                      errors.subject ? "border-red-500" : "outline-none"
                    }`}
                  >
                    {subject.map((e) => (
                      <option value={e.subjectId} key={e.subjectId}>
                        {e.subjectName}
                      </option>
                    ))}

                    {/*                    
                    <option value="SQL">SQL</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Spring Boot">Spring Boot</option>
                    <option value="Korean">Korean</option> */}
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="-mx-3 flex justify-between flex-wrap">
              <div className="w-[32%] px-3">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    disabled={formData.modeSubject === "normal"}
                    className={`w-full rounded-md bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] disabled:opacity-50 ${
                      errors.date && formData.modeSubject !== "normal"
                        ? "border-red-500"
                        : "outline-none"
                    }`}
                  />
                  {errors.date && formData.modeSubject !== "normal" && (
                    <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                  )}
                </div>
              </div>
              <div className="w-[32%] px-3">
                <div className="mb-5">
                  <label
                    htmlFor="time"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Duration
                  </label>
                  <input
                    type="text"
                    name="timeLimit"
                    value={formData.timeLimit}
                    onChange={handleChange}
                    disabled={formData.modeSubject === "normal"}
                    placeholder="Duration"
                    className="w-full rounded-md bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] "
                  />
                  {errors.timeLimit && formData.modeSubject !== "normal" && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.timeLimit}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-[32%] px-3">
                <div className="mb-5">
                  <label
                    htmlFor="modeSubject"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Mode
                  </label>
                  <select
                    name="modeSubject"
                    value={formData.modeSubject}
                    onChange={handleChange}
                    className={`w-full rounded-md bg-gray-50 py-3 px-6 text-base font-medium text-[#6B7280] ${
                      errors.modeSubject ? "border-red-500" : "outline-none"
                    }`}
                  >
                    <option value="normal">Normal</option>
                    <option value="schedule">Schedule</option>
                  </select>
                  {errors.modeSubject && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.modeSubject}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="px-3">
              <label
                htmlFor="description"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                cols={30}
                rows={5}
                className={`mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-3 font-semibold text-[#6B7280] ${
                  errors.description ? "border-red-500" : ""
                }`}
                placeholder="Enter description"
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description}
                </p>
              )}
            </div>
          </div>
          <div className="w-full pt-4">
            <h3 className="text-2xl">Quiz Type Creation</h3>
            <p className="text-sm py-1 text-gray-400">
              The question will be randomized by default
            </p>
          </div>
          <TabQuizType
            multiple={multiple}
            setMultiple={setMultiple}
            trueFalse={trueFalse}
            setTrueFalse={setTrueFalse}
          />
          <div className="flex justify-end mt-4">
            <PopUpForm title="Save" handleSubmit={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}
export default FormQuizDetail;
