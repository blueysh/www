import { MouseEventHandler } from "react";

export function PrimaryButton({ onClick, className, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`m-2 min-w-[200px] rounded-2xl bg-neutral-900 px-10 py-3 text-white outline-0 outline-blue-500 transition-all duration-200 hover:bg-neutral-600 hover:translate-y-[-2px] focus:outline-4 focus:translate-y-[-2px] active:translate-y-[2px] active:bg-neutral-900 ${className}`}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ onClick, className, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`m-2 min-w-[200px] rounded-2xl border-2 border-neutral-900 px-10 py-3 text-neutral-900 outline-0 outline-blue-500 transition-all duration-200 hover:opacity-[60%] hover:translate-y-[-2px] focus:outline-4 focus:translate-y-[-2px] active:translate-y-[2px] active:opacity-[100%] ${className}`}
    >
      {children}
    </button>
  );
}

interface ButtonProps {
  onClick?: MouseEventHandler;
  className?: string;
  children: React.ReactNode;
}
