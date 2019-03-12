import React from "react"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

class BlogEntry extends React.Component {

  render() {
    const { data } = this.props;
    const title = data.frontmatter.title || data.fields.slug
    console.log(data.fields.slug)
    return (
      <div>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={data.fields.slug}>
            {title}
          </Link>
        </h3>

        <small>{data.frontmatter.date}</small>
        <p
          dangerouslySetInnerHTML={{
            __html: data.frontmatter.description || data.excerpt,
          }}
        />
      </div>
    )
  }
}

export default BlogEntry
