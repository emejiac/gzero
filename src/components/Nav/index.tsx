/** @jsxImportSource theme-ui */
import React from 'react'
import type { IConfiguracion, IMenu } from 'graphql-cms/types'
import { Box } from 'theme-ui'
import styles from './styles.module.css'
import NavMenu from './Menu'

interface Props {
  menu: IMenu
  configuracion: IConfiguracion
}

export const Nav: React.FC<Props> = ({ configuracion, menu }) => {
  return (
    <Box
      as="nav"
      role="nav"
      className={styles.navBar}
      sx={{
        height: [ '40px', '50px', '90px' ]
      }}
    >
      <NavMenu configuracion={configuracion} menu={menu} />
    </Box>
  )
}

export default Nav
