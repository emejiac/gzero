import React from 'react'
import ContentPage from '~/components/Content/Page'
import Metadata from '~/components/Metadata'
import { getPagina } from 'graphql-cms/queries'
import nextContentWrapper from 'graphql-cms/nextContentWrapper'
import type { InferNextPage } from '~/types'

export const getStaticProps = nextContentWrapper.getStaticProps(async () => {
  return {
    props: {
      pagina: await getPagina({ slug: 'inicio' }),
    },
  }
})

const HomePage: InferNextPage<typeof getStaticProps> = ({ pagina }) => {
  return (
    <>
      <Metadata title={pagina.nombre} />
      <ContentPage {...pagina} />
    </>
  )
}

export default HomePage
