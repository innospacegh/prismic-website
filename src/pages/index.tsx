import React from 'react'
import Hero from '../components/Hero/Hero'
import Layout from '../components/layout'
import MainNav from '../components/MainNav/MainNav'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <MainNav />
        <Hero />
    </Layout>
)

export default IndexPage
