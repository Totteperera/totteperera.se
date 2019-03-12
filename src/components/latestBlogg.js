import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"
import BloggEntry from "./bloggEntry"

function LatestBlogg() {
    
    return (
        <StaticQuery
            query={latestBloggQuery}
            render={data => {
                const post = data.allMarkdownRemark.edges[0].node
                return (
                    <div>
                        <h2 style={{textAlign: 'center'}}>Latest blog post!</h2>
                        <BloggEntry data={post}/>
                    </div>
                )
            }}
        />
    )

}

export default LatestBlogg

export const latestBloggQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit:1) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`