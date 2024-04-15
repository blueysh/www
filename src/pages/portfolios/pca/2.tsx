export default function Page() {
  return (
    <main>
      <section className="p-5 text-center">
        <h5 className="uppercase opacity-60">
          Part 2 |{" "}
          <a
            href="/portfolios/pca"
            className="underline hover:opacity-75 focus:opacity-75 active:50"
          >
            Go Back
          </a>
        </h5>
        <h1>Character Creation</h1>
        <h3>Principles and Concepts of Animation</h3>
      </section>

      <section className="p-5 text-center">
        <h3>&quot;Character Animation With Wink And Bounce&quot;</h3>
        <div>
          <img
            src="https://assets.blueysh.me/CharacterHeadTurnWithWinkAndBounce.gif"
            className="rounded-lg border-2 border-neutral-600 shadow-2xl"
          />
        </div>
      </section>
    </main>
  );
}
