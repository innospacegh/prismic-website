import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

type HeroContainer = {
    bgImg: string
}

const HeroContainer = styled.div<HeroContainer>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 1rem;
    background-color: hsl(160, 0%, 40%);
    min-height: 720px;
    background-image: linear-gradient(
            hsla(0, 0%, 5%, 0.8),
            hsla(0, 0%, 5%, 0.8)
        ),
        url(${props => props.bgImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const HeroHeading = styled.h1`
    font-family: ${props => props.theme.typography.fonts.heading};
    margin: 1rem 0;
    font-size: 2.4rem;
    line-height: 1.2;
    color: hsl(0, 0%, 99%);
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

const HeroSubtitle = styled.h2`
    color: hsl(0, 0%, 99%);
    line-height: 1.5;
    font-weight: 400;
    font-size: ${props => props.theme.typography.typeScale.large.mobile};
    margin: 1rem 0;
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
    display: inline-block;
    max-width: 240px;
    margin: 2rem 0;
    height: 40px;
    line-height: 40px;
    font-size: 1rem;
    border: none;
    background-color: white;
    font-weight: 500;
    cursor: pointer;
    transition: 0.8s;
    &:hover {
        background-color: hsl(165, 90%, 37%);
        color: white;
        transition: 0.4s;
    }
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
                        background_image {
                            alt
                            url
                            thumbnails {
                                tablet {
                                    url
                                }
                                mobile {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        `
    )
    const title = heroData.prismicPage.data.title
    const description = heroData.prismicPage.data.description
    const backgroundImage = heroData.prismicPage.data.background_image

    return (
        <HeroContainer bgImg={backgroundImage.url}>
            <HeroHeading>{title.text}</HeroHeading>
            <HeroSubtitle>{description.text}</HeroSubtitle>
            <HeroButton>Visit Us!</HeroButton>
        </HeroContainer>
    )
}

export default Hero
