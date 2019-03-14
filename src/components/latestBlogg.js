import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import BlogEntry from "./blogEntry"

function LatestBlogg() {
    
    return (
        <StaticQuery
            query={latestBloggQuery}
            render={data => {
                const post = data.allMarkdownRemark.edges[0].node
                return (
                    <div>
                        <h2 style={{textAlign: 'center'}}>Latest blog post!</h2>
                        <BlogEntry data={post}/>
                    </div>
                )
            }}
        />
    )

}

export default LatestBlogg

export const latestBloggQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {fileAbsolutePath:  { regex:"/content/blog/" }},
      limit:1) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
           
          }
        }
      }
    }
  }
`