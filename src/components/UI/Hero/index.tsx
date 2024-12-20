"use client";
import { useEffect } from "react";
import ButtonLink from "../ButtonLink";
import Image from "next/image";
import Title from "../Title";
import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
  url: string;
};

const resizeHero = () => {
  const heroElement = document.querySelector("#hero") as HTMLElement;
  const headerElement = document.querySelector("header") as HTMLElement | null;
  if (headerElement) {
    // Check if headerElement is not null
    heroElement.style.minHeight = `calc(100vh - ${headerElement.clientHeight}px - 40px)`; // Access clientHeight property
  }
};

const Hero = ({ title, subtitle, image, url }: HeroProps) => {
  useEffect(() => {
    addEventListener("resize", resizeHero);

    return () => {
      removeEventListener("resize", resizeHero);
    };
  });
  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100vh-44px-40px)] flex flex-col justify-end pb-10"
    >
      <Link
        href={url}
        className="absolute block top-0 bottom-0 left-0 right-0"
      ></Link>
      <Image
        src={image}
        alt={title}
        className="-z-50 object-cover"
        loading="eager"
        fill
        priority
      />
      <div className="h-full flex flex-col justify-center items-center text-center gap-3">
        <Title title={title} level="1" />
        <Title title={subtitle} level="2" />
        <ButtonLink title="En savoir plus" variant="primary" href={url} />
      </div>
    </section>
  );
};

export default Hero;
