"use client";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { IoBagOutline, IoSearchOutline, IoLogoApple } from "react-icons/io5";
import { TbArrowNarrowRight } from "react-icons/tb";

const Header = () => {
  const { products, total } = useContext(CartContext);

  const scrollEvent = () => {
    const header = document.querySelector("header") as HTMLElement;
    if (header) {
      if (window.scrollY > 44) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  };
  useEffect(() => {
    addEventListener("scroll", scrollEvent);
    return () => {
      removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <header className="h-11 flex items-center justify-center">
      <nav>
        <ul className="flex items-center gap-5">
          <Link href="/">
            <IoLogoApple />
          </Link>
          <Link href="#" className="hover:text-gray-500 cursor-not-allowed">
            <li className="text-sm">Store</li>
          </Link>
          <Link href="#" className="hover:text-gray-500 cursor-not-allowed">
            <li className="text-sm">Mac</li>
          </Link>
          <Link href="#" className="hover:text-gray-500 cursor-not-allowed">
            <li className="text-sm">iPad</li>
          </Link>
          <Link href="#" className="hover:text-gray-500 cursor-not-allowed">
            <li className="text-sm">iPhone</li>
          </Link>
          <Link href="#" className="hover:text-gray-500 cursor-not-allowed">
            <li className="text-sm">Watch</li>
          </Link>
          <Link href="#" className="hover:text-gray-500 cursor-not-allowed">
            <li className="text-sm">AirPods</li>
          </Link>
          <Link href="#" className="hover:text-gray-500 cursor-not-allowed">
            <li className="text-sm">TV & Maison</li>
          </Link>
          <Link href="#" className="hover:text-gray-500 cursor-not-allowed">
            <li className="text-sm">Divertissement</li>
          </Link>
          <Link href="#" className="hover:text-gray-500 cursor-not-allowed">
            <li className="text-sm">Accessoires</li>
          </Link>
          <Link href="#" className="hover:text-gray-500 cursor-not-allowed">
            <li className="text-sm">Assistance</li>
          </Link>
          <Link href="#" className="hover:text-gray-500 cursor-not-allowed">
            <IoSearchOutline />
          </Link>
          <Link href="/cart" className="relative group">
            <IoBagOutline />
            {products.length > 0 && (
              <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-1 h-1 flex items-center justify-center text-xs"></div>
            )}
            <div className="group-hover:block hidden absolute w-80 h-40 -bottom-40 right-0 border border-gray-400 bg-white overflow-x-hidden">
              {products.length > 0 ? (
                <div className="w-full h-full flex justify-between flex-col">
                  <ul>
                    {products.map((product) => (
                      <div key={product.id} className="flex mb-1">
                        <TbArrowNarrowRight />
                        <p className="text-sm ml-1"> {product.name}</p>
                      </div>
                    ))}
                  </ul>
                  <p>Total: {total}€ </p>
                </div>
              ) : (
                <div className="text-sm">No items in wishlist</div>
              )}
            </div>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
