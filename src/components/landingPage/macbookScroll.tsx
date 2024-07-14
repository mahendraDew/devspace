import React from "react";
import { MacbookScroll } from "../ui/macbook-scroll";

export function MacbookScrollEffect() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F]  bg-white w-full">
      <MacbookScroll
        title={
          <span className="font-normal">
            devspace in action
          </span>
        }
        subtitle={
          <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-gray-500 dark:text-gray-400 text-center font-normal ">
            dive into the various features of devspace. from creating rooms to editing session details and browsing available projects, see how devspace makes collaboration effortless.
          </p>
        }
        src={`/devspace\ gallery/landing-page-macbookAni.png`}
        showGradient={false}
      />
    </div>
  );
}

