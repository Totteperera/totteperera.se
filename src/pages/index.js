import React from "react"
import { graphql } from "gatsby"

import LatestBlogg from "../components/latestBlogg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stocks from "../components/stocks"
import Hero from "../components/hero"


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title


    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Welcome"
          keywords={[`blog`, `totte`, `perera`, `gatsby`]}
        />
        <Hero />
        {/* <Stocks /> */}
        {/* <LatestBlogg /> */}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
