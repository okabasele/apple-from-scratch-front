"use client"
import { useEffect } from 'react'
import Button from '../Button'
import ButtonLink from '../ButtonLink'
import { Item } from '@/interfaces'
import Image from 'next/image'
import { ButtonVariant } from '@/enums'
import Link from 'next/link'

type HeroProps = {
  title: string
  subtitle: string
  image: string
  item: Item
}

const addItemToCart = (item: Item) => {
  console.log('Adding item to cart', {item})
}

const resizeHero = () => {
  const heroElement = document.querySelector('#hero') as HTMLElement;
  const headerElement = document.querySelector('header') as HTMLElement | null;
  if (headerElement) { // Check if headerElement is not null
    heroElement.style.minHeight = `calc(100vh - ${headerElement.clientHeight}px)`; // Access clientHeight property
  }
}

const Hero = ({title, subtitle, image, item}: HeroProps) => {
  useEffect(() => {
    addEventListener('resize', resizeHero)

    return () => {
      removeEventListener('resize', resizeHero)
    }
  })
  return (
    <section className='relative w-full h-screen'>
      <div className='bg-zinc-800 h-11 flex justify-center items-center gap-1'>
        <p className='text-white text-sm'>
          Participer au jour de la Terre en recyclant vos anciens produits Apple.
        </p>
        <Link href='#' className='text-sky-600'>Recyclage gratuit {">"}</Link>
      </div>
      <div className='flex flex-col items-center text-center text-white'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className='flex justify-between gap-5'>

        <ButtonLink title='En savoir plus' variant={ButtonVariant.PRIMARY}  href={item.url} />
        <Button title='Acheter' variant={ButtonVariant.PRIMARY_OUTLINE} onClick={() => addItemToCart(item)} />
        </div>
      </div>
      <Image src={image} alt={item.name} className='-z-50' fill />
    </section>
  )
}

export default Hero