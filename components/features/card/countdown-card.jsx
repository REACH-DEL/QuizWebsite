import React from 'react'

export default function CountdownCard() {
  return (
    <div className="flex flex-col gap-7 w-full items-center justify-center py-3">
      <h5 className="text-xl">Quiz Starts in</h5>
      <div className="w-full flex gap-8 items-center justify-center">
      <div className="flex flex-col bg-[var(--primary-color)] text-white px-6 py-5 items-center w-fit rounded-xl">
        <span className="text-3xl">08</span>
        <span className="text-sm">Minutes</span>
      </div>

      <div className="flex flex-col bg-[var(--primary-color)] text-white px-6 py-5 items-center w-fit rounded-xl">
        <span className="text-3xl">27</span> 
        <span className="text-sm">Seconds</span>
      </div>
    </div>
    </div>
  )
}

// "use client"
// import { useEffect, useState } from "react";

// export default function CountDownCard({ durationInSeconds }) {
//   const [timeLeft, setTimeLeft] = useState(durationInSeconds);

//   useEffect(() => {
//     if (timeLeft <= 0) return;

//     const interval = setInterval(() => {
//       setTimeLeft((prev) => prev - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [timeLeft]);

//   const hours = Math.floor(timeLeft / 3600);
//   const minutes = Math.floor((timeLeft % 3600) / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <div className="bg-blue-500 px-6 py-3 rounded-2xl flex gap-2 items-center text-white font-semibold">
//       {hours > 0 ? (
//         <>
//           <span>{hours}h</span>
//           <span>{minutes}min</span>
//         </>
//       ) : (
//         <>
//           <span>{minutes}min</span>
//           <span>{seconds}s</span>
//         </>
//       )}
//     </div>
//   );
// }
