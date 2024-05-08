import { PrimaryButton } from "@/components/button";

export default function Page() {
  return (
    <main>
      <section className="p-5 text-center">
        <h5 className="uppercase opacity-60">
          Part 9 |{" "}
          <a
            href="/portfolios/pca"
            className="underline hover:opacity-75 focus:opacity-75 active:50"
          >
            Go Back
          </a>
        </h5>
        <h1>Past Assignments</h1>
        <h3>Principles and Concepts of Animation</h3>
      </section>

      <section className="p-5 text-center">
        <h3>Past Assignments are available below</h3>
        <PrimaryButton
          onClick={(e) =>
            (location.href =
              "https://drive.google.com/drive/folders/17EwXPXeyEATT-zq9SjMOlzSmbdA7gL10?usp=sharing")
          }
        >
          Google Drive
        </PrimaryButton>
      </section>
    </main>
  );
}
