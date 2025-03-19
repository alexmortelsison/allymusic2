"use client";
import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const now = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });
    const nowTime = new Date(now).getTime();
    const targetTime = new Date(targetDate).getTime();
    const difference = targetTime - nowTime;

    if (difference > 0) {
      return {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / (1000 * 60)) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col justify-center items-center px-8 bg-black/40 text-white p-2 rounded-lg w-24 border border-[#dd0d66] text-sm"
        >
          <span className="text-[25px] font-bold text-[#dd0d66]">{value}</span>
          <span className="text-sm">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default function CountdownPage() {
  const now = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  const target = new Date(now);
  target.setDate(target.getDate() + 13);
  target.setHours(17, 0, 0, 0);

  return (
    <div className="relative z-10">
      <div className="absolute bottom-5 left-8">
        <CountdownTimer targetDate={target.toISOString()} />
      </div>
    </div>
  );
}
