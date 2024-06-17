import React from 'react'

type TitleProps = {
  title: string
  level: '1' | '2' | '3' | '4' | '5' | '6'
  font?: 'bold' | 'medium' | 'light' | 'normal' | 'semibold' | 'extrabold'
}

const Title = ({title, level, font}: TitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  let titleClassName = ""
  switch (level) {
    case '1':
      titleClassName = 'text-4xl font-bold'
      break
    case '2':
      titleClassName = 'text-3xl'
      break
    case '3':
      titleClassName = 'text-2xl'
      break
    case '4':
      titleClassName = 'text-xl'
      break
    case '5':
      titleClassName = 'text-lg'
      break
    case '6':
      titleClassName = 'text-base'
      break
    default:
      titleClassName = 'text-4xl'
      break
  }
  return (
   <Tag className={`${titleClassName} font-${font}`}>{title}</Tag>
  )
}

export default Title