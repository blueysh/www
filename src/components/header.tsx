import { JetBrains_Mono } from "next/font/google";

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

  return (
    <div className="bg-blue-600 text-white selection:text-black selection:bg-white text-center px-5 sticky top-0 z-[99]">
      <HeaderItem>hey 👋</HeaderItem>|
      <HeaderItem>
        {days[date.getDay()]} {months[date.getMonth()]} {date.getDate()}
      </HeaderItem>
      <HeaderItem>
        {date.getHours() % 12 == 0 ? 12 : date.getHours() % 12}:
        {date.getMinutes()} {date.getHours() >= 12 ? "pm" : "am"}
      </HeaderItem>
    </div>
  );
}

function HeaderItem({ children }: { children?: React.ReactNode }) {
  return <code className={`${font.className} px-2`}>{children}</code>;
}
