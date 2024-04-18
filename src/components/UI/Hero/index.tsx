"use client"
import { useEffect } from 'react'
import Button from '../Button'
import ButtonLink from '../ButtonLink'
import { Item } from '@/interfaces'
import Image from 'next/image'

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
      <div className='flex flex-col items-center text-center text-white'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <ButtonLink title='En savoir plus' url={item.url} />
        <Button title='Acheter' onClick={() => addItemToCart(item)} />
      </div>
      <Image src={image} alt={item.name} className='-z-50' fill />
    </section>
  )
}

export default Hero