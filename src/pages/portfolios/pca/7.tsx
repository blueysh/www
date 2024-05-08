export default function Page() {
  return (
    <main>
      <section className="p-5 text-center">
        <h5 className="uppercase opacity-60">
          Part 7 |{" "}
          <a
            href="/portfolios/pca"
            className="underline hover:opacity-75 focus:opacity-75 active:50"
          >
            Go Back
          </a>
        </h5>
        <h1>Color Theory</h1>
        <h3>Principles and Concepts of Animation</h3>
      </section>

      <section className="p-5 text-center">
        <h3>Color Wheel for theory</h3>
        <div className="mb-10">
          <img
            src="https://assets.blueysh.me/Color Wheel.png"
            className="rounded-lg border-2 border-neutral-600 shadow-2xl mx-auto"
          />
        </div>

        <h3>Four Logos</h3>
        <div className="mb-10 flex flex-row overflow-x-scroll space-x-5">
          <img
            src="https://assets.blueysh.me/Santiago_ColorTheoryLogos_1.png"
            className="rounded-lg border-2 border-neutral-600 shadow-2xl mx-auto"
            width={300}
            height={300}
          />
          <img
            src="https://assets.blueysh.me/Santiago_ColorTheoryLogos_2.png"
            className="rounded-lg border-2 border-neutral-600 shadow-2xl mx-auto"
            width={300}
            height={300}
          />
          <img
            src="https://assets.blueysh.me/Santiago_ColorTheoryLogos_3.png"
            className="rounded-lg border-2 border-neutral-600 shadow-2xl mx-auto"
            width={300}
            height={300}
          />
          <img
            src="https://assets.blueysh.me/Santiago_ColorTheoryLogos_4.png"
            className="rounded-lg border-2 border-neutral-600 shadow-2xl mx-auto"
            width={300}
            height={300}
          />
        </div>
      </section>
    </main>
  );
}
