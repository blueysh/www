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
        <div>
          <img
            src="https://assets.blueysh.me/Color Wheel.png"
            className="rounded-lg border-2 border-neutral-600 shadow-2xl mx-auto"
          />
        </div>
      </section>
    </main>
  );
}
