import { CONFIGURACION_FRAGMENT } from 'graphql-cms/fragments'
import { fetchGraphQL } from '../api'
import type { IConfiguracion } from 'graphql-cms/types'

interface Query {
  configuracionCollection: {
    items: IConfiguracion[] | null
  }
}

export const getConfiguracion = async (): Promise<IConfiguracion> => {
  const query = `
    query GetConfiguracion {
      configuracionCollection(limit: 1)  {
        items {
          ${CONFIGURACION_FRAGMENT}
        }
      }
    }
  `

  const response = await fetchGraphQL<Query>(query)
  const navigationBar = response.data.configuracionCollection?.items?.[0]

  if (!navigationBar) {
    throw new Error('No configuration found')
  }

  return response.data.configuracionCollection.items[0]
}
