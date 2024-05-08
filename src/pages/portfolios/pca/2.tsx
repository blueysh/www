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
        <h3>Character Intro</h3>
        <p className="max-w-[500px] mx-auto mb-5">
          This character&apos;s name is <strong>Josué</strong>. His favorite
          part of his appearance is his hair, but he is self-conscious about his
          nose. For fun, he likes to play soccer and video games. Josué is
          sometimes impulsive, but most of the time he remains reserved and is
          an overall friendly, thoughtful, and funny person.
        </p>
        <p>His portrait is below:</p>

        <img
          src="https://assets.blueysh.me/Santiago_CharacterCreation.png"
          className="rounded-lg border-2 border-neutral-600 shadow-2xl mx-auto"
          height={500}
          width={500}
        />
      </section>
    </main>
  );
}
