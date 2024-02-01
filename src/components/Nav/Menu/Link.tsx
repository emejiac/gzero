/** @jsxImportSource theme-ui */
import React from 'react'
import Link, { LinkProps } from '~/components/Generic/Link'
import styles from './styles.module.css'

type Props = Omit<LinkProps, 'children' | 'href'> & {
  link: {
    nombre: string
    alias: string
    url: string
  }
}

const NavMenuDesktopLink: React.FC<Props> = ({ link }) => {
  return (
    <Link
      href={link.url}
      className={styles.links}
      sx={{
        color: '#000'
      }}
    >
      {link.alias || link.nombre}
    </Link>
  )
}

export default NavMenuDesktopLink
