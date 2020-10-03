import React from 'react'
import styled from 'styled-components'
import InnoSpaceLogo from '../SvgComponents/InnoSpaceLogo'

const MainNavContainer = styled.div`
    height: 64px;
    display: flex;
`

const Brand = styled.div`
    width: 180px;
    margin: auto;
`

const MainNav = () => {
    return (
        <MainNavContainer>
            <Brand>
                <InnoSpaceLogo />
            </Brand>
        </MainNavContainer>
    )
}

export default MainNav
