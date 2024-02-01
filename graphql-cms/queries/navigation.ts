import { NAVIGATION_BAR_FRAGMENT } from 'graphql-cms/fragments'
import { fetchGraphQL } from '../api'

export const getNavigation = async ({ slug }) => {
  const query = `
    query {
      navigationBarCollection(where: {slug: "${slug}" }, limit: 1)  {
        items {
          ${NAVIGATION_BAR_FRAGMENT}
        }
      }
    }
  `

  const response = await fetchGraphQL(query)
  const navigationBar = response.data.navigationBarCollection?.items?.[0]

  if (!navigationBar) {
    throw new Error(`No navigation bar found for slug: ${slug}`)
  }

  return navigationBar
}
