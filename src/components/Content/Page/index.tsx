import React from 'react'
import type { IPagina } from 'graphql-cms/types'
import Banner from '~/components/Generic/Banner'
import { Flex } from 'theme-ui'
import ContenidoSeccion from '~/components/Content/Section'

const ContentPage: React.FC<IPagina> = (pagina) => {
  const secciones = pagina?.seccionesCollection?.items || []

  return (
    <>
      {pagina?.banner && (
        <Flex sx={{ paddingBottom: '50px' }}>
          <Banner {...pagina.banner.recurso} />
        </Flex>
      )}

      {secciones.map((seccion, key) => {
        const tipo = seccion?.__typename
        if (tipo === 'SeccionDePagina') return <ContenidoSeccion key={key} {...seccion} />
        return <>otro</>
      })}
    </>
  )
}

export default ContentPage
