import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [initialFillIsDone, setInitialFillDone] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Jan Santiago</title>
        <link
          rel="icon"
          href="https://pbs.twimg.com/profile_images/1771200275203715072/_VWQfbuN_400x400.jpg"
        />
        <meta name="description" content="Yo, you found my website :)" />
      </Head>
      <Header
        initialFillIsDone={initialFillIsDone}
        fillStateHook={setInitialFillDone}
      />
      <div className="selection:bg-blue-500 selection:text-white min-h-screen mx-auto max-w-[1000px] mt-10">
        <Component {...pageProps} />
      </div>
      <footer>
        <div className="text-center mt-10 border-t-2 border-gray-300 p-6 bg-gray-200 bg-opacity-25 border-opacity-25">
          <p className="opacity-75 my-auto">
            Create to inspire, build from desire.{" "}
            <img
              className="inline my-auto"
              src="https://512pixels.net/wp-content/uploads/2021/10/dogcow.png"
              height={32}
              width={32}
            />{" "}
            | © Jan Santiago {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </html>
  );
}
