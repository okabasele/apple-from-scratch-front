"use client"
import Link from "next/link";
import { useEffect } from "react";
import { IoBagOutline, IoSearchOutline, IoLogoApple } from "react-icons/io5";

const Header = () => {
  const scrollEvent = () => {
    const header = document.querySelector('header') as HTMLElement;
    if (header) {
      if (window.scrollY > 44) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }
  }
  useEffect(() => {
    addEventListener('scroll', scrollEvent);
    return () => {
      removeEventListener('scroll', scrollEvent);
    }
  }, [])

  return (
    <header className="h-11 flex items-center justify-center">
      <nav>
        <ul className="flex items-center gap-5">
          <Link href="/">
            <IoLogoApple />
          </Link>
          <Link href="#">
            <li className="text-sm">Store</li>
          </Link>
          <Link href="#">
           <li className="text-sm">Mac</li>
          </Link>
          <Link href="#">
            <li className="text-sm">iPad</li>
          </Link>
          <Link href="#">
            <li className="text-sm">iPhone</li>
          </Link>
          <Link href="#">
            <li className="text-sm">Watch</li>
          </Link>
          <Link href="#">
            <li className="text-sm">AirPods</li>
          </Link>
          <Link href="#">
            <li className="text-sm">TV & Maison</li>
          </Link>
          <Link href="#">
            <li className="text-sm">Divertissement</li>
          </Link>
          <Link href="#">
            <li className="text-sm">Accessoires</li>
          </Link>
          <Link href="#">
            <li className="text-sm">Assistance</li>
          </Link>
          <Link href="#">
            <IoSearchOutline/>
          </Link>
          <Link href="#">
            <IoBagOutline/>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header