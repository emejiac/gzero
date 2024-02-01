/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from 'react'
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'
import type { PropsOnlyChildren } from '~/types'
import { getMenu, getConfiguracion } from 'graphql-cms/queries'
import type { IConfiguracion, IMenu } from 'graphql-cms/types'

const Layout: React.FC<
  PropsOnlyChildren & {
    pageProps
  }
> = ({ children, pageProps }) => {
  const isProductPage = pageProps?.product || false
  const [menu, setMenu] = useState<IMenu | null>(null)
  const [configuracion, setConfiguracion] = useState<IConfiguracion | null>(null)

  useEffect(() => {
    getMenu().then((menu) => setMenu(menu))
    getConfiguracion().then((configuracion) => setConfiguracion(configuracion)).catch(error => console.error(error))
  }, [])

  return (
    <>
      <Nav configuracion={configuracion} menu={menu} />
      <main
        role="main"
        sx={{
          paddingTop: [ '40px', '50px', '90px' ],
          position: 'inherit',
        }}
      >
        {children}
      </main>
      <Footer isProductPage={isProductPage !== false} />
    </>
  )
}

export default Layout
