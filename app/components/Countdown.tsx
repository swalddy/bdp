"use client";

import { useState, useEffect } from "react";

const EVENT_DATE = new Date("2026-05-01T04:00:00Z"); // 11:00 WIB = 04:00 UTC

function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft>>(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (time.done) {
    return (
      <p
        className="text-2xl text-stone-700 tracking-wide"
        style={{ fontFamily: "var(--font-dancing)" }}
      >
        Selamat Ulang Tahun ke-80, Opung!
      </p>
    );
  }

  const units = [
    { label: "Hari", value: time.days },
    { label: "Jam", value: time.hours },
    { label: "Menit", value: time.minutes },
    { label: "Detik", value: time.seconds },
  ];

  return (
    <div className="flex justify-center gap-3">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <span className="text-4xl font-bold text-stone-800 leading-none tabular-nums">
            {pad(value)}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-stone-400 mt-1">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
