import { IRecurso, RECURSO_FRAGMENT } from "./recurso"

export const CONFIGURACION_FRAGMENT = `
  nombre
  logo {
    ${RECURSO_FRAGMENT}
  }
  favicon {
    ${RECURSO_FRAGMENT}
  }
`

export interface IConfiguracion {
  __typename: 'Configuracion'
  nombre: string
  logo: IRecurso
  favicon: IRecurso
}
