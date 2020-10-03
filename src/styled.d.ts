import 'styled-components'
import { defaultTheme } from './theme'

type CustomTheme = typeof defaultTheme

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends CustomTheme {}
}
