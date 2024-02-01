import { RECURSO_FRAGMENT } from "./recurso"

export const SECCION_FRAGMENT = `
  __typename
  ... on SeccionDePagina {
    sys {
      id
    }
    nombre
    slug
    titulo
    contenido {
      json
    }
  }

  ... on Recurso {
    ${RECURSO_FRAGMENT}
  }
`

export interface ISeccion {
  __typename: 'SeccionDePagina'
  sys: {
    id: string
  }
  nombre: string
  slug: string
  contenido?: {
    json: string
  }
}
