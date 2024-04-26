import { PrimaryButton } from "@/components/button";

const sections = [
  {
    title: "Part 1: Adobe Animate",
    href: "/portfolios/pca/1",
  },
  {
    title: "Part 2: Character Creation",
    href: "/portfolios/pca/2",
  },
  {
    title: "Part 3: Storyboarding",
    href: "/portfolios/pca/3",
  },
  {
    title: "Part 4: Character Animation",
    href: "/portfolios/pca/4",
  },
  {
    title: "Part 5: Video Game Dev",
    href: "/portfolios/pca/5",
  },
  {
    title: "Part 6: Stop Motion",
    href: "/portfolios/pca/6",
  },
  {
    title: "Part 7: Color Theory",
    href: "/portfolios/pca/7",
  },
  {
    title: "Part 8: Past Assignments",
    href: "/portfolios/pca/8",
  },
  {
    title: "Part 9: Reflection",
    href: "/portfolios/pca/9",
  },
];

export default function Page() {
  return (
    <main>
      <section className="p-5 text-center">
        <h5 className="uppercase opacity-60">
          Class Portfolio |{" "}
          <a
            href="/"
            className="underline hover:opacity-75 focus:opacity-75 active:50"
          >
            Go Back
          </a>
        </h5>
        <h1>Principles and Concepts of Animation</h1>
        <h3>2023-2024, 11th Grade</h3>
      </section>

      <section className="p-5 text-center">
        <h3>Sections</h3>
        <div>
          {sections.map((section) => {
            return (
              <div className="my-2 max-w-[600px] mx-auto rounded-2xl border-2 border-neutral-900 px-10 py-3 text-neutral-900 flex flex-row space-x-10">
                <h4 className="mr-auto my-auto">{section.title}</h4>
                <PrimaryButton onClick={() => (location.href = section.href)}>
                  Open
                </PrimaryButton>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
