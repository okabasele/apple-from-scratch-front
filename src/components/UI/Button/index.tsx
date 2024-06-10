import React from 'react'

type ButtonProps = {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'primary-outline' | 'secondary' | 'default' | 'link';
} & React.HTMLProps<HTMLButtonElement>

const Button = ({title, type, variant='default',  ...restProps}:ButtonProps) => {
  switch (variant) {
    case 'primary':
      return (
        <button type={type} className='bg-sky-600 text-white hover:bg-sky-800
        px-4 py-2 rounded-3xl text-center
        ' {...restProps}>{title}</button>
      )
    case 'primary-outline':
      return (
        <button type={type} className='bg-transparent text-sky-600 border border-sky-600 hover:bg-sky-600 hover:text-white
        px-4 py-2 rounded-3xl text-center
        ' {...restProps}>{title}</button>
      )
    case 'secondary':
      return (
        <button type={type} className='bg-secondary text-white hover:bg-secondary-dark
        px-4 py-2 rounded-3xl text-center
        ' {...restProps}>{title}</button>
      )
      case 'link':
        return (
          <button type='button' className='text-sky-600 hover:text-sky-800
          px-4 py-2 text-center
          ' {...restProps}>{title}</button>
        )
    default:
      return (
        <button type={type} className='bg-primary text-white hover:bg-primary-dark
        px-4 py-2 rounded-3xl text-center
        ' {...restProps}>{title}</button>
      )
  }
}

export default Button