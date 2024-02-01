export const MENU_FRAGMENT = `
menuCollection(limit: 1)  {
  items {
    __typename
    nombre
    slug
    linksCollection(limit: 10) {
      items {
        nombre
        alias
        url
      }
    }
  }
}
`

export interface IMenuLink {
  __typename: 'menuLink'
  nombre: string
  alias: string
  url: string
}

export interface IMenu {
  __typename: 'menu'
  nombre: string
  slug: string
  linksCollection: {
    items: IMenuLink[]
  }
}
