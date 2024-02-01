import React from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { LinkProps as ThemeUILinkProps, useThemeUI } from 'theme-ui'

export type LinkProps = ThemeUILinkProps & {
  variant?: 'button'
  nextLinkProps?: Omit<NextLinkProps, 'href' | 'as' | 'passHref'>
}

const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({
  href,
  sx = {},
  variant,
  nextLinkProps = {},
  className = '',
  ...props
}) => {
  const { theme } = useThemeUI()
  let variantStyles: LinkProps['sx'] = theme.links

  switch (variant) {
    case undefined:
      break
    case 'button':
      variantStyles = {
        ...theme.buttons.primary,
        color: 'white',
        textAlign: 'center',
        display: 'inline-block',
      }
      break
    default:
      variantStyles = theme.links[variant]
      break
  }

  const _styles = { ...variantStyles, ...sx }
  const styles = Object.keys(_styles).length > 0 ? _styles : null

  return (
    <NextLink
      href={href}
      passHref
      {...nextLinkProps}
      sx={styles}
      className={className}
    >
      {props.children}
    </NextLink>
  )
}

export default Link
