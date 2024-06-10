"use client"
import { Item } from '@/interfaces'
import React, { useContext } from 'react'
import ButtonLink from '../ButtonLink'
import Button from '../Button'
import Image from 'next/image'
import Title from '../Title'
import { CartContext } from '@/context/CartContext'

type BannerProps = {
  title: string
  subtitle: string
  image: string
  item: Item
  color?: string
}


const Banner = ({title, subtitle, image, item, color}: BannerProps) => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className='relative w-full h-80'>
        <div className='flex flex-col items-center text-center gap-2'>
          <div className={`text-${color ||"black"}`}>
            <Title title={title} level='2' font='bold'/>
            <Title title={subtitle} level='3'/>
          </div>
          <div className='flex justify-between gap-5'>
            <ButtonLink title='En savoir plus' variant="primary"  href={item.url} />
            <Button title='Acheter' variant="primary-outline" onClick={()=>addToCart(item)} />
          </div>
        </div>
 
      <Image src={image} alt={item.name} className='-z-50' fill />
    </section>
  )
}

export default Banner