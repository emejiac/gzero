export const NAVIGATION_BAR_FRAGMENT = `
  name
  slug
  pagesCollection(limit: 25) {
    items {
      sys {
        id
      }
      slug
      name
    }
  }
`

export interface INavigationBar {
  name: string
  slug: string
  pagesCollection: {
    items: {
      sys: {
        id: string
      }
      slug: string
      name: string
    }[]
  }
}
