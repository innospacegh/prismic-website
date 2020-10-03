import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const HeroContainer = styled.div`
    text-align: center;
    margin: auto;
    background: hsl(160, 60%, 80%);
    min-height: 780px;
`

const HeroHeading = styled.h1`
    /* font-size: 50px;
    font-weight: 600;
    line-height: 1.2;
    color: hsl(0, 0%, 99%);
    width: 70%;
    margin: 1rem auto;
    @media screen and (max-width: 960px) {
        font-size: 42px;
        width: 80%;
    }
    @media screen and (max-width: 600px) {
        font-size: 36px;
        width: 90%;
    } */
`

const HeroSubtitle = styled.p`
    /* font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: hsl(0, 0%, 95%);
    width: 78%;
    margin: 1rem auto;
    @media screen and (max-width: 960px) {
        font-size: 18px;
        width: 85%;
    }
    @media screen and (max-width: 600px) {
        font-size: 16px;
        width: 100%;
    } */
`

const HeroButton = styled.button`
    /* width: 200px;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    margin-top: 1rem;
    &:hover,
    &:active {
        background-color: ${props => props.theme.colors.innospaceGreen};
        color: white;
    } */
`

const Hero = () => {
    const heroData = useStaticQuery(
        graphql`
            query {
                prismicPage {
                    id
                    uid
                    data {
                        title {
                            html
                            text
                            raw
                        }
                        description {
                            html
                            text
                            raw
                        }
                        image {
                            alt
                            copyright
                            url
                            thumbnails
                        }
                    }
                }
            }
        `
    )
    return (
        <HeroContainer>
            <HeroHeading>{heroData.prismicPage.data.title.text}</HeroHeading>
            <HeroSubtitle>
                {heroData.prismicPage.data.description.text}
            </HeroSubtitle>
            <HeroButton>Visit Us!</HeroButton>
        </HeroContainer>
    )
}

export default Hero
