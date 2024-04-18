import Link from 'next/link'
import React from 'react'

type ButtonLinkProps = {
  title: string
  url: string
}
const ButtonLink = ({title, url}: ButtonLinkProps) => {
  return (
    <Link href={url}>
      {title}
    </Link>
  )
}

export default ButtonLink