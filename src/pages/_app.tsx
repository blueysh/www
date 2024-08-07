import Header from "@/components/header";
import { TrafficLight } from "@/lib/trafficlight";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [initialFillIsDone, setInitialFillDone] = useState(false);

  const trafficlight: TrafficLight = new TrafficLight();

  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <Head>
        <title>Jan Santiago</title>
        <link
          rel="icon"
          href="https://pbs.twimg.com/profile_images/1771200275203715072/_VWQfbuN_400x400.jpg"
        />
        <meta name="description" content="Yo, you found my website :)" />
      </Head>

      <Header />

      <div className="selection:bg-blue-500 selection:text-white min-h-screen mx-auto max-w-[1000px] mt-10">
        <Component {...pageProps} />
      </div>

      <footer>
        <div className="text-center selection:bg-blue-500 selection:text-white mt-10 border-t-2 border-gray-300 p-6 bg-gray-200 bg-opacity-25 border-opacity-25">
          <p className="opacity-75 my-auto">
            hasta llegar a la cima. 🇵🇷 | © Jan Santiago{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </html>
  );
}
