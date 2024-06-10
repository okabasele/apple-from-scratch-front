import React from 'react'
import PostCard from '../PostCard'

type GridProps = {
  items: any[]
}

const GridPost = ({items}: GridProps) => {
  return (
    <section className='grid grid-cols-2 gap-12'>
      {items.map((item, index) => (
        <PostCard key={`card-${index}`} title={item.title} subtitle={item.subtitle} image={item.image} url={item.url} text={item.text} className={item.className} />
      ))}
    </section>
  )
}

export default GridPost