"use client";
import { useState } from "react";

export default function SelectOptionComponent({ isSelect, onSelect, ...props }) {
  const lightColor = isSelect ? "#FF006E1A" : "#B9B9B91A";
  return (
    <>
      <li
        className={`w-full rounded-xl bg-[${lightColor}] px-5 py-4`}
        onClick={onSelect}
      >
        <div className="flex w-full items-center gap-5 pl-4">
          <input
            type="radio"
            id={`option${props.optionId}`}
            name="option"
            value={props.optionId}
            checked={isSelect}
            onChange={onSelect}
          />
          <label htmlFor={`option${props.optionId}`}>{props.optionText}</label>
        </div>
      </li>
    </>
  );
}
