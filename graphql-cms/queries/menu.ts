import { MENU_FRAGMENT } from 'graphql-cms/fragments'
import { fetchGraphQL } from '../api'
import type { IMenu } from 'graphql-cms/types'

interface Query {
  menuCollection: {
    items: IMenu[] | null
  }
}

export const getMenu = async (): Promise<IMenu> => {
  const query = `
    query {
      ${MENU_FRAGMENT}
    }
  `

  const response = await fetchGraphQL<Query>(query)

  if (!response.data.menuCollection.items?.[0]) {
    throw new Error('No Menu found')
  }

  return response.data.menuCollection.items[0]
}
