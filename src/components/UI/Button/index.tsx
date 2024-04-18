import React from 'react'
import { ButtonStyleVariant } from '@/utils'
import { ButtonVariant } from '@/enums';

type ButtonProps = {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant
} & React.HTMLProps<HTMLButtonElement>

const Button = ({title, type, variant= ButtonVariant.DEFAULT,  ...restProps}:ButtonProps) => {
  return (
    <button type={type} className={`${ButtonStyleVariant[variant].default} ${ButtonStyleVariant[variant].hover}
    px-4 py-2 rounded-3xl text-center
    `} {...restProps}>{title}</button>
  )
}

export default Button