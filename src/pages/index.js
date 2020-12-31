import React from "react"
import Hero from "../components/Hero"
import Image from "../components/image"


import Layout from "../components/layout"
import Navbar from "../components/Navbar"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
  
    <Hero></Hero>
    <Image></Image>
  </Layout>
)

export default IndexPage
