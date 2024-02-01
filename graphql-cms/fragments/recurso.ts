export const RECURSO_FRAGMENT = `
  nombre
  slug
  recursoDesktop {
    __typename
    contentType
    sys {
      id
    }
    title
    url
    width
    height
  }
  recursoMobile {
    __typename
    contentType
    sys {
      id
    }
    title
    url
    width
    height
  }
`

export interface IAssetCT {
  __typename: 'Asset'
  contentType: string
  sys: {
    id: string
  }
  title: string
  url: string
  width: number
  height: number
  placeholder?: string
}

export interface IRecurso {
  __typename: 'Recurso'
  sys: {
    id: string
  }
  nombre: string
  slug: string
  recursoDesktop: IAssetCT
  recursoMobile: IAssetCT
}
