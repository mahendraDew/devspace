import { cn } from "@/src/lib/cn";
import React  from 'react'

import { CircleHelp, Cloud, GitPullRequestDraft, Heart, Rocket, Terminal } from "lucide-react";

export function HowToCard() {
  const features = [
    {
      title: "Find a room",
      description:
        "Browse through a list of rooms, filter by language, and join theone that interests you.",
      icon: <CircleHelp />,
    },
    {
      title: "Create a room",
      description:
        "Create a room, set the language, and wait for other developers to join.",
      icon: <Rocket />,
    },
    
    {
      title: "Pair program",
      description: "Share your screen, video chat, and code together in real-time.",
      icon: <Terminal />,
    },
   
    {
      title: "Connect",
      description:
        "have fun, learn, and connect with other developers from around.",
      icon: <Heart />,
    },
    
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  relative z-10 py-10  ">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border md:border-r md:border-t-0 md:border-l-0 md:border-b-0 lg:border-r  py-10 relative group/feature dark:border-neutral-800 border-neutral-400",
        (index === 0 || index === 2) && "border-b-0 md:border-l dark:border-neutral-800",
        index < 2 && "md:border-b border-b-0 dark:border-neutral-800 border-neutral-400"
      )}
    >
      {index < 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 border-neutral-400 to-transparent pointer-events-none" />
      )}
      {index >= 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 border-neutral-400 to-transparent pointer-events-none" />
      )}
      <div className="flex ">
        <div className="w-full">
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-indigo-600 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
        <div className="w-full h-full ">
            <h5 className=" font-extrabold text-9xl text-right text-neutral-400 dark:text-neutral-700">{index+1}</h5>
        </div>
      </div>
    </div>
  );
};
