import { PrimaryButton } from "@/components/button";

export default function Page() {
  return (
    <main>
      <section className="p-5 text-center">
        <h5 className="uppercase opacity-60">
          Part 6 |{" "}
          <a
            href="/portfolios/pca"
            className="underline hover:opacity-75 focus:opacity-75 active:50"
          >
            Go Back
          </a>
        </h5>
        <h1>Stop Motion</h1>
        <h3>Principles and Concepts of Animation</h3>
      </section>

      <section className="p-5 text-center">
        <h3>Stop Motion Animation</h3>
        <div>
          <PrimaryButton
            onClick={(e) =>
              (location.href =
                "https://drive.google.com/file/d/1G0HtptRhFL33GoEumN83Kn_-8MiR2i3U/view?usp=sharing")
            }
          >
            Click to Download
          </PrimaryButton>
        </div>
      </section>
    </main>
  );
}
