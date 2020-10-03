import { DefaultTheme } from 'styled-components'
import { fonts, typeScale } from './typography'

const colors = {
    headingColor: 'hsl(0, 0%, 15%)',
    bodyColor: 'hsl(0, 0%, 35%)',
    innospaceGreen: 'hsl(165, 90%, 37%)',
}

const typography = {
    fonts,
    typeScale,
}

export const defaultTheme: DefaultTheme = {
    colors,
    typography,
}
