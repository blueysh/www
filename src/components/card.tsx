export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-2 min-w-[200px] max-w-[300px] rounded-2xl border-2 border-neutral-900 px-10 py-3 text-neutral-900">
      {children}
    </div>
  );
}
