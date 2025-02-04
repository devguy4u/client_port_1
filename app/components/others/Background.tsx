"use client";

import { useState, useEffect } from "react";
import Image from "next/legacy/image";
import bodyLight from "@/public/assets/svg/body-light.svg";
import bodyDark from "@/public/assets/svg/body-dark.svg";
import patternLight from "@/public/assets/svg/pattern-light.svg";
import patternDark from "@/public/assets/svg/pattern-dark.svg";
import { useTheme } from "next-themes";

enum BackgroundOption {
  body = "body",
  pattern = "pattern",
}

interface props {
  option: BackgroundOption;
  className?: string;
  w?: number;
  h?: number;
  layout?: any;
  position?: string;
  objFit?: any;
}

function Background({
  option,
  className = "",
  w,
  h,
  layout,
  position,
  objFit,
}: props) {
  const [Loading, setLoading] = useState(true);
  const [source, setSource] = useState<string>("");
  const [isClient, setIsClient] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    console.log("resolvedTheme", resolvedTheme);

    if (resolvedTheme === "dark") {
      option === BackgroundOption.body
        ? setSource(bodyDark)
        : setSource(patternDark);
    } else {
      option === BackgroundOption.body
        ? setSource(bodyLight)
        : setSource(patternLight);
    }
  }, [resolvedTheme, option]);

  if (isClient) {
    return (
      <Image
        src={source}
        alt="background-svg-pattern"
        objectFit={objFit || "cover"}
        objectPosition={position || "center"}
        layout={layout || "fill"}
        height={h}
        width={w}
        loading="eager"
        className={`noSelection ${className} ${
          Loading ? "cursor-progress" : ""
        }`}
        onLoadingComplete={() => setLoading(false)}
        onDragStart={(e) => {
          e.preventDefault();
        }}
        priority={true}
        placeholder="blur"
        blurDataURL={resolvedTheme === "dark" ? patternDark : patternLight}
      />
    );
  } else {
    return <></>;
  }
}

export { Background, BackgroundOption };
