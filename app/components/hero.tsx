"use client";

import { Link } from "@remix-run/react";
import { BackgroundLines } from "~/components/ui/background-lines";

export function Hero() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full h-dvh flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl lg:text-7xl font-sans py-5 md:py-10 relative z-20 font-bold tracking-tight">
        <Link to={"https://github.com/ekkx"} target="_blank" rel="noreferrer">
          ekkx
        </Link>
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        I got this domain and figured it’d be a shame not to use it, so I
        decided to create this cute little tiny personal website.
        <br />
        <br />
        Don’t really have much to write about, but here’s a bit about me:
        <br />I love playing classical piano, making electronic music, and of
        course, coding!
      </p>
    </BackgroundLines>
  );
}
