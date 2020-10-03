import 'styled-components'

type ResponsiveFontSize = {
    desktop: string
    mobile: string
}

type ThemeFonts = {
    body: string
    heading: string
}

type ThemeTypeScale = {
    display1?: ResponsiveFontSize
    display2?: ResponsiveFontSize
    display3?: ResponsiveFontSize
    x4large?: ResponsiveFontSize
    x3large?: ResponsiveFontSize
    x2large?: ResponsiveFontSize
    xlarge?: ResponsiveFontSize
    large?: ResponsiveFontSize
    body: string
    button?: string
    helperText?: string
    label?: string
    labelSmall?: string
    labelLarge?: string
}

type Typography = {
    fonts: ThemeFonts
    typeScale: ThemeTypeScale
}

type ThemeColors = {
    headingColor: string
    bodyColor: string
    innospaceGreen: string
    [x: string]: any
}

declare module 'styled-components' {
    export type DefaultTheme = {
        colors: ThemeColors
        typography: Typography
    }
}
