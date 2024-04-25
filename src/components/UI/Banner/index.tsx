"use client"
import { Item } from '@/interfaces'
import React from 'react'
import ButtonLink from '../ButtonLink'
import Button from '../Button'
import Image from 'next/image'
import { ButtonVariant } from '@/enums'
import Title from '../Title'
import Link from 'next/link'

type BannerProps = {
  title: string
  subtitle: string
  image: string
  item: Item
  color?: string
}

const addItemToCart = (item: Item) => {
  console.log('Adding item to cart', {item})
}


const Banner = ({title, subtitle, image, item, color}: BannerProps) => {
  return (
    <section className='relative w-full h-80'>
        <div className='flex flex-col items-center text-center gap-2'>
          <div className={`text-${color ||"black"}`}>
            <Title title={title} level='2' font='semibold'/>
            <Title title={subtitle} level='3'/>
          </div>
          <div className='flex justify-between gap-5'>
            <ButtonLink title='En savoir plus' variant={ButtonVariant.PRIMARY}  href={item.url} />
            <Button title='Acheter' variant={ButtonVariant.PRIMARY_OUTLINE} onClick={() => addItemToCart(item)} />
          </div>
        </div>
 
      <Image src={image} alt={item.name} className='-z-50' fill />
    </section>
  )
}

export default Banner