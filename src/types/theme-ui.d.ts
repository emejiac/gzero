import type { AppTheme } from '~/theme'
import type {
  ThemeUICSSProperties,
  CSSPseudoSelectorProps,
  CSSOthersObject,
  Label,
} from '@theme-ui/css'

declare module 'theme-ui' {
  // This allows ThemeUI to have context of the app's theme for shorthand
  // operations.
  export interface ThemeUIContextValue {
    theme: AppTheme
  }
}

declare module '@theme-ui/css' {
  export interface ThemeUICSSObject
    extends ThemeUICSSProperties,
      CSSPseudoSelectorProps,
      CSSOthersObject,
      Label {
    // ThemeUI supports variants at breakpoints as an array, despite it's
    // offical typings lacking this definition. It's used everywhere in this
    // app so we need to add it here.
    variant?: string | string[]
  }
}
