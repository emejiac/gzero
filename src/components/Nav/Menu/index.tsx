/** @jsxImportSource theme-ui */
import React from 'react'
import { Flex } from 'theme-ui'
import NavMenuDesktopLink from './Link'
import NavMenuDesktopLogo from './Logo'
import type { IConfiguracion, IMenu } from 'graphql-cms/types'

interface Props {
  configuracion: IConfiguracion
  menu: IMenu
}

const NavMenu: React.FC<Props> = ({ configuracion, menu }) => {
  const links = menu?.linksCollection?.items || []

  return (
    <Flex
      sx={{
        justifyContent: 'center',
        width: '100%',
        padding: '0px 64px',
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          padding: '0px 16px',
          width: '100%',
          transition: 'height .25s ease, box-shadow .25s ease',
          height: '89px',
          boxShadow: 'none',
          justifyContent: 'space-between',
        }}
      >
        <Flex sx={{ justifyContent: 'flex-start', gap: 40 }}>
          {links.map((link, key) => (
            <NavMenuDesktopLink key={key} link={link} />
          ))}
        </Flex>

        <Flex sx={{ justifyContent: 'right' }}>
          <NavMenuDesktopLogo {...configuracion} />
        </Flex>

      </Flex>
    </Flex>
  )
}

export default NavMenu
