import Link, { LinkProps } from 'next/link'
import { ButtonStyleVariant } from '@/utils'
import { ButtonVariant } from '@/enums'

type ButtonLinkProps = {
  title: string
  variant?: ButtonVariant
} & LinkProps

const ButtonLink = ({title, variant = ButtonVariant.DEFAULT, ...restProps}: ButtonLinkProps) => {
  return (
    <Link className={`${ButtonStyleVariant[variant].default} ${ButtonStyleVariant[variant].hover}
    px-4 py-2 rounded-3xl text-center
    `} {...restProps}>
      {title}
    </Link>
  )
}

export default ButtonLink