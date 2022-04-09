import { ReactNode } from 'react'

import { UnstyledLink } from '@/elements/UnstyledLink/UnstyledLink'

type Props = {
  children: ReactNode
  href: string
  className?: string
}

export const NavItem = ({ children, href, className }: Props) => {
  return (
    <li className={`${className} mt-8 text-secondary-500 lg:ml-6 lg:mt-0 lg:text-black xl:ml-10 xl:mt-0`}>
      <UnstyledLink href={href}>{children}</UnstyledLink>
    </li>
  )
}
