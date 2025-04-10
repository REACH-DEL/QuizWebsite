import React from 'react'
import { FlashCircle } from 'iconsax-react';

export default function QuizTipCard({title, color}) {
  return (
    <div className="flex gap-5 items-center justify-center px-5 py-4 bg-white rounded-2xl">
      <div className={`p-2 rounded-full ${color === "pink" ? "bg-[var(--prink-color)]/10" : "bg-[var(--primary-color)]/10"}`}>
        <FlashCircle size="24" color={color === "pink" ? "var(--prink-color)" : "var(--primary-color"} />
      </div>
      <p>{title}</p>
    </div>
  )
}
