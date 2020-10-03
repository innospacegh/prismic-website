require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `InnoSpace`,
        description: `The perfect collaborative workspace for independent professionals, entrepreneurs and creatives in Tema and its environs.`,
        author: `Daniel Addae`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `innospace-website`,
                short_name: `innospace`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/innospace-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            family: 'Poppins',
                            variants: ['400', '500', '600'],
                        },
                        {
                            family: 'Muli',
                            variants: ['400', '600', '700'],
                        },
                    ],
                },
            },
        },
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
                accessToken: '',
                // linkResolver: ({ node, key, value }) => doc => {
                //     // Your link resolver
                // },
                schemas: {
                    page: require('./src/schemas/page.json'),
                },
                lang: '*',
            },
        },
        `gatsby-plugin-typescript`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
