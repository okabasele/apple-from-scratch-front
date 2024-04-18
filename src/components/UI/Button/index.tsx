import React from 'react'

type ButtonProps = {
  title: string;
  type?: 'button' | 'submit' | 'reset';
} & React.HTMLProps<HTMLButtonElement>

const Button = ({title, type,  ...restProps}:ButtonProps) => {
  return (
    <button type={type} {...restProps}>{title}</button>
  )
}

export default Button