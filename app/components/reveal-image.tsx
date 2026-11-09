"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type RevealImageProps = {
  src: string;
  alt: string;
  sizes: string;
  preload?: boolean;
};

export default function RevealImage({
  src,
  alt,
  sizes,
  preload = false,
}: RevealImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = imageRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imageRef}
      className={"image-reveal" + (isVisible ? " is-visible" : "")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className="cover-image"
      />
    </div>
  );
}
