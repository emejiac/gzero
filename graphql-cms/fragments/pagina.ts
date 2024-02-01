import { ISeccion, SECCION_FRAGMENT } from './seccion'
import { BANNER_FRAGMENT, IBanner } from './banner'
import { IRecurso } from './recurso'

export const PAGINA_FRAGMENT = `
  nombre
  slug
  banner {
    ${BANNER_FRAGMENT}
  }
  seccionesCollection(limit: 15) {
    total
    items {
      ${SECCION_FRAGMENT}
    }
  }
`

export interface IPagina {
  nombre: string
  slug: string
  banner: IBanner
  seccionesCollection: {
    total: number
    items: (
      | ISeccion
      | IRecurso
    )[]
    
  }
}