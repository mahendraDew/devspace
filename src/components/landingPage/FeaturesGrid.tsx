import React from "react";
import { cn } from "@/src/lib/cn";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { Tweet } from "react-tweet";
import { MacbookScrollEffect } from "./macbookScroll";

export function FeaturesSection() {
  const features = [
    {
      title: "live pair programming sessions",
      description:
        "experience real-time collaboration. join live sessions and pair program with developers worldwide. share knowledge, solve problems, and build together in real-time.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-6 border-b  border-neutral-400 dark:border-neutral-800",
    },

    {
      title: "learn more",
      description:
        "discover more on twitter(x). watch our latest videos and updates on twitter(x). learn about new features, get tips, and see how others are using devspace.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r lg:border-b-0 border-b  pb-5 border-neutral-400  dark:border-neutral-800",
    },
    {
      title: "connect globally",
      description:
        "connect with developers worldwide. devspace is accessible from anywhere. connect with developers from around the globe and collaborate on exciting projects.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          packed with thousands of features
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-gray-500 dark:text-gray-400 text-center font-normal ">
        from creating rooms to collaborating on code, devspace has everything you need for effective pair programming. connect with developers worldwide, share your screen, and take your coding skills to the next level.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-neutral-400 dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-base  max-w-4xl text-left mx-auto",
        " text-center font-normal text-gray-500 dark:text-gray-400",
        "text-left max-w-sm mx-0 md:text-base my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 mt-16 dark:mt-0 gap-10 h-full">
      <div className="w-full p-0    mx-auto bg-white dark:bg-[#0B0B0F]  shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          
          <MacbookScrollEffect />
        </div>
      </div>

      <div className="absolute bottom-40 dark:bottom-28 z-40 inset-x-0 h-40 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute -top-20 dark:top-0 z-40 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent via-white  dark:bg-gradient-to-b dark:from-black dark:via-black w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="w-full flex items-center justify-center ">
      <Tweet id="1808023212783292783" />
    </div>
    
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-96 md:h-96 lg:h-full flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute lg:-bottom-8 right-0 md:-right-40 lg:-right-8 " />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 710 * 2,
      height: 710 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.2, 0.2, 0.2],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 700, height: 700, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
