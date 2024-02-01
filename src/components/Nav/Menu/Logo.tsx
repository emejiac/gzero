/** @jsxImportSource theme-ui */
import type { IConfiguracion } from 'graphql-cms/types'
import React from 'react'
import Link from '~/components/Generic/Link'
import { isMobileDevice } from '~/utils'

const NavMenuDesktopLogo: React.FC<IConfiguracion> = (configuracion) => {
  const isMobile = isMobileDevice()
  const { logo } = configuracion
  const urlDesktop = logo?.imagenDesktop?.url || null
  const urlMobile = logo?.imagenMobile?.url || null

  return (
    <Link
      href="/"
      sx={{
        flexShrink: 0,
        padding: '0 2rem',
        '& svg': { height: '23px', width: '83px' },
      }}
      aria-label="Home"
    >
      {urlDesktop || urlMobile && (
        <>
          {(!isMobile || !urlMobile) && (<img src={urlDesktop} alt="Logo" />)}
          {isMobile && (<img src={urlMobile} alt="Logo" />)}
        </>
      )}
      {(!urlDesktop && !urlMobile) && (
        <span
          sx={{
            fontSize: '25px',
            fontWeight: '500'
          }}
        >
          GradoZero
        </span>
      )}
    </Link>
  )
}

export default NavMenuDesktopLogo
