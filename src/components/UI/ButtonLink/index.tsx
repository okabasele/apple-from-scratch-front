import Link, { LinkProps } from 'next/link'

type ButtonLinkProps = {
  title: string
  variant?: 'primary' | 'primary-outline' | 'secondary' | 'default';
} & LinkProps

const ButtonLink = ({title, variant="default", ...restProps}: ButtonLinkProps) => {
  switch (variant) {
    case 'primary':
      return (
        <Link className='bg-sky-600 text-white hover:bg-sky-800
        px-4 py-2 rounded-3xl text-center
        ' {...restProps}>{title}</Link>
      )
    case 'primary-outline':
      return (
        <Link className='bg-transparent text-sky-600 border border-sky-600 hover:bg-sky-600 hover:text-white
        px-4 py-2 rounded-3xl text-center
        ' {...restProps}>{title}</Link>
      )
    case 'secondary':
      return (
        <Link className='bg-secondary text-white hover:bg-secondary-dark
        px-4 py-2 rounded-3xl text-center
        ' {...restProps}>{title}</Link>
      )
    default:
      return (
        <Link className='bg-primary text-white hover:bg-primary-dark
        px-4 py-2 rounded-3xl text-center
        ' {...restProps}>{title}</Link>
      )
  }
}

export default ButtonLink