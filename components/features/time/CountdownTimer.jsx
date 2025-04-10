"use client"
import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

export default function CountdownTimer({ durationInSeconds }) {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-blue-500 px-6 py-3 rounded-2xl flex gap-2 items-center text-white font-semibold">
      <Timer />
      {hours > 0 ? (
        <>
          <span>{hours}h</span>
          <span>{minutes}min</span>
        </>
      ) : (
        <>
          <span>{minutes}min</span>
          <span>{seconds}s</span>
        </>
      )}
    </div>
  );
}
