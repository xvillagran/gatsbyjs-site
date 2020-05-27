import React from "react"
import { Link } from "gatsby"
import "../styles/styles.scss"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from '../components/hero'
import AboutUs from '../components/aboutus'
import ProductsAndServices from '../components/productsandservices'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <AboutUs />
    <ProductsAndServices />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
