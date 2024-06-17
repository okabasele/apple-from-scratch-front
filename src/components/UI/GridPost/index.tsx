import React from 'react'
import PostCard from '../PostCard'
import { Item } from '@/interfaces'

type GridProps = {
  items: {
    title: string
    subtitle: string
    image: string
    url: string
    text?: string
    item: Item
    className?: string
  }[]
}

const GridPost = ({items}: GridProps) => {
  return (
    <section className='grid grid-cols-2 gap-12'>
      {items.map((item, index) => (
        <PostCard key={`card-${index}`} title={item.title} subtitle={item.subtitle} image={item.image} url={item.url} text={item.text} item={item.item} className={item.className} />
      ))}
    </section>
  )
}

export default GridPost