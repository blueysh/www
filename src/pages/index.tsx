import { PrimaryButton, SecondaryButton } from "@/components/button";
import Card from "@/components/card";

export default function Home() {
  return (
    <main>
      <section className="p-5">
        <span className="flex flex-row space-x-2">
          <img
            src="https://pbs.twimg.com/profile_images/1771200275203715072/_VWQfbuN_400x400.jpg"
            height={64}
            width={64}
            alt="hi :)"
            className="rounded-full scale-75 text-center bg-neutral-600 text-white"
          />
          <h2 className="my-auto">Jan Santiago</h2>
        </span>
        <p className="max-w-[600px] mb-2">
          I&apos;m a full-stack developer based in the United States. Right now,
          I&apos;m a student at Newton College & Career Academy in the Computer
          Science pathway. My goal is to build valuable experiences for people
          through software.
        </p>
        <p className="max-w-[600px] mb-2">
          For frontend, I use Next.js and Tailwind. For backend, I typically use
          Spring with Java but am learning Nest.js. I&apos;m always looking to
          learn new things and improve my skills.
        </p>
        <p className="max-w-[600px] mb-2">
          Outside of coding, I work at Chick-fil-A as a Team Captain. I&apos;ve
          been working there for over a year now. I&apos;ve learned a lot about
          leadership and teamwork. For fun, I like to play video games and
          listen to music (I play piano too).
        </p>

        <SecondaryButton
          onClick={() =>
            (location.href =
              "https://docs.google.com/document/d/1j_YhXF5yLhxiFF_Lwn8XLtuG-ICpA4aMYq1ijTe7pPY/edit?usp=sharing")
          }
        >
          Open Resume ↗
        </SecondaryButton>
      </section>
      <section className="p-5">
        <h3>Contact</h3>
        <p className="mt-2">
          <a
            href="https://github.com/blueysh"
            className="underline underline-offset-4"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://discord.com/users/594576995090956313"
            className="underline underline-offset-4"
          >
            Discord
          </a>{" "}
          |{" "}
          <a
            href="https://x.com/blueysh_"
            className="underline underline-offset-4"
          >
            X
          </a>{" "}
          |{" "}
          <a
            href="mailto:hi@blueysh.me"
            className="underline underline-offset-4"
          >
            Email
          </a>
        </p>
      </section>
      <section className="p-5">
        <h3>Projects</h3>
        <div className="flex flex-row space-x-2 overflow-x-scroll">
          <Card>
            <h5 className="text-center text-2xl">discord.jar</h5>
            <h5 className="text-center uppercase opacity-75 text-lg">
              Contributor
            </h5>
            <hr className="my-2" />
            <p className="my-auto">
              A work-in-progress Java library for developing Discord
              applications.
            </p>
            <PrimaryButton
              onClick={() =>
                (location.href = "https://github.com/discord-jar/discord.jar")
              }
            >
              See on GitHub
            </PrimaryButton>
          </Card>
          <Card>
            <h5 className="text-center text-2xl">sap4j</h5>
            <h5 className="text-center uppercase opacity-75 text-lg">
              Maintainer
            </h5>
            <hr className="my-2" />
            <p className="my-auto">
              A simple Java library for parsing command-line arguments.
            </p>
            <PrimaryButton
              onClick={() =>
                (location.href = "https://github.com/blueysh/sap4j")
              }
            >
              See on GitHub
            </PrimaryButton>
          </Card>
          <Card>
            <h5 className="text-center text-2xl">lineman</h5>
            <h5 className="text-center uppercase opacity-75 text-lg">
              Maintainer
            </h5>
            <hr className="my-2" />
            <p className="my-auto">
              A simple Java library for building CLI tools.
            </p>
            <PrimaryButton
              onClick={() =>
                (location.href = "https://github.com/blueysh/lineman")
              }
            >
              See on GitHub
            </PrimaryButton>
          </Card>
        </div>
      </section>
    </main>
  );
}
