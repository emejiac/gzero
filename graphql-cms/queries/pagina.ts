import { PAGINA_FRAGMENT } from 'graphql-cms/fragments'
import type { IPagina } from 'graphql-cms/fragments/pagina'
import { fetchGraphQL } from '../api'

interface Query {
  paginaCollection: {
    items: IPagina[] | null
  }
}

export const getPaginas = async (): Promise<IPagina[]> => {
  const query = `
    query {
      paginaCollection(where: { slug_exists: true }) {
        items {
          ${PAGINA_FRAGMENT}
        }
      }
    }
  `

  const response = await fetchGraphQL<Query>(query)

  const pages = response.data.paginaCollection.items
    ? response.data.paginaCollection.items
    : []

  return pages
}

export const getPagina = async ({ slug }: { slug: string }): Promise<IPagina> => {
  const query = `
    query GetPagina($slug: String!) {
      paginaCollection(where: {slug: $slug }, limit: 1)  {
        items {
          ${PAGINA_FRAGMENT}
        }
      }
    }
  `

  const response = await fetchGraphQL<Query>(query, { slug })
  const page = response.data.paginaCollection?.items?.[0]

  if (!page) {
    throw new Error(`No se encontro ninguna pagina con el slug: ${slug}`)
  }
  return page
}
