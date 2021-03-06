import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../theme'
import { GlobalStyles } from '../theme/global'

const Main = styled.main``

const Layout: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <>
                <GlobalStyles />
                <Main>{children}</Main>
            </>
        </ThemeProvider>
    )
}

export default Layout
