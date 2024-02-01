import { IRecurso, RECURSO_FRAGMENT } from './recurso'

export const BANNER_FRAGMENT = `
  nombre
  slug
  recurso {
    ${RECURSO_FRAGMENT}
  }
`

export interface IBanner {
  __typename: 'Banner'
  sys: {
    id: string
  }
  nombre: string
  slug: string
  recurso: IRecurso
}
