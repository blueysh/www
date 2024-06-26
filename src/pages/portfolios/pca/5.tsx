import { PrimaryButton } from "@/components/button";

export default function Page() {
  return (
    <main>
      <section className="p-5 text-center">
        <h5 className="uppercase opacity-60">
          Part 5 |{" "}
          <a
            href="/portfolios/pca"
            className="underline hover:opacity-75 focus:opacity-75 active:50"
          >
            Go Back
          </a>
        </h5>
        <h1>Video Game Development</h1>
        <h3>Principles and Concepts of Animation</h3>
      </section>

      <section className="p-5 text-center">
        <h3>Video Game Development</h3>
        <PrimaryButton
          onClick={() =>
            (location.href = "https://flowlab.io/game/play/2536814")
          }
        >
          Play Game
        </PrimaryButton>
      </section>
    </main>
  );
}
