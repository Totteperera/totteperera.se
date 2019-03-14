import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class CvPage extends React.Component {
    render() {
        const data = this.props.data.markdownRemark

        return (
            <Layout title={data.frontmatter.title}>
                 <SEO
                    title={data.frontmatter.title}
                    description={data.excerpt}
                    />

                    <h1 
                        style={{
                            textAlign:'center',
                            marginBottom: rhythm(1),
                            }}>{data.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: data.html}} />
            </Layout>
        )
    }
}

export default CvPage

export const pageQuery = graphql`
query {
    markdownRemark(fileAbsolutePath: { regex:"/content/assets/cv.md/" }) {
        id
        excerpt(pruneLength: 160)
        html
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
}
`