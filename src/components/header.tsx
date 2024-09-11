import { JetBrains_Mono } from "next/font/google";
import { useMemo, useState } from "react";
import { setInterval } from "timers";

const font = JetBrains_Mono({ subsets: ["latin"] });

export default function Header() {
  const date: Date = new Date();

  const days: string[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const months: string[] = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const holidays: { [key: string]: string } = {
    "1-1": "happy new year 🎆",
    "2-14": "happy valentine's day 💖",
    "3-17": "happy st. patrick's day 🍀",
    "4-1": "april fools' 🤡",
    "4-22": "earth day 🌍",
    "5-9": "happy mother's day 🌹",
    "6-20": "happy father's day 🌹",
    "7-4": "happy independence day 🎆",
    "9-11": "never forget 🇺🇸",
    "11-11": "happy veterans day 🇺🇸",
    "11-26": "happy thanksgiving 🦃",
    "12-25": "merry christmas 🎄",
  };

  const [day, setDay] = useState(date.getDay());
  const [month, setMonth] = useState(date.getMonth());
  const [date_, setDate] = useState(date.getDate());
  const [hour, setHour] = useState(date.getHours());
  const [minute, setMinute] = useState(date.getMinutes());

  useMemo(() => {
    setInterval(() => {
      const date: Date = new Date();
      setDay(date.getDay());
      setMonth(date.getMonth());
      setDate(date.getDate());
      setHour(date.getHours());
      setMinute(date.getMinutes());
    }, 1000);
  }, []);

  return (
    <div className="bg-blue-600 text-white selection:text-black selection:bg-white text-center px-5 sticky top-0 z-[99]">
      <HeaderItem>
        {Object.keys(holidays).includes(`${month + 1}-${date_}`)
          ? holidays[`${month + 1}-${date_}`]
          : hour < 12
            ? "good morning 👋"
            : hour < 17
              ? "good afternoon 👋"
              : "good evening 👋"}
      </HeaderItem>
      |
      <HeaderItem>
        {days[date.getDay()]} {months[date.getMonth()]} {date.getDate()}
      </HeaderItem>
      <HeaderItem>
        {hour % 12 == 0 ? 12 : hour % 12 < 10 ? "0" + (hour % 12) : hour % 12}:
        {minute < 10 ? "0" + minute : minute} {hour >= 12 ? "pm" : "am"}
      </HeaderItem>
    </div>
  );
}

function HeaderItem({ children }: { children?: React.ReactNode }) {
  return <code className={`${font.className} px-2`}>{children}</code>;
}
