import React from "react";
import { Cover } from "@/app/components/ui/cover";


export function CoverDemo() {
  return (
    <div>

      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center   relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-blue-700 dark:from-neutral-800 dark:via-white dark:to-white ">
      <Cover>100xDevs</Cover>  <br />
      <span className="text-blue-700">Because</span> 10x ain&apos; t enough!
      </h1>
    </div>
  );
}

