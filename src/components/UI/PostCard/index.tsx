"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Title from "../Title";
import ButtonLink from "../ButtonLink";
import Button from "../Button";
import { generateBlurPlaceholder, isImageDark } from "@/utils";
import { CartContext } from "@/context/CartContext";
import { Item } from "@/interfaces";

type PostCardProps = {
  title: string;
  subtitle: string;
  image: string;
  url: string;
  item: Item;
  text?: string;
  className?: string;
};

const PostCard = ({
  title,
  subtitle,
  image,
  text,
  item,
  className,
}: PostCardProps) => {
  const { addToCart } = useContext(CartContext);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (!isDark) {
      isImageDark(image).then((res) => setIsDark(res));
    }
  }, [isDark, image]);

  return (
    <div className="relative w-full h-96">
      <div className="flex flex-col items-center text-center gap-2">
        <div className={`${isDark ? "text-white" : "text-black"}`}>
          <Title title={title} level="2" font="bold" />
          <p className={`text-sm ${className}`}>{text}</p>
          <Title title={subtitle} level="3" />
        </div>
        <div className="flex justify-between gap-5">
          <ButtonLink title="En savoir plus" variant="primary" href="#" />
          <Button
            title="Acheter"
            variant="primary-outline"
            onClick={() => addToCart(item)}
          />
        </div>
      </div>
      <Image
        placeholder="blur"
        blurDataURL={
          isDark ? generateBlurPlaceholder() : generateBlurPlaceholder("white")
        }
        src={image}
        alt={title}
        className="-z-50"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default PostCard;
