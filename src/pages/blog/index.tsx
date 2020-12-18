import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../../components/seo"

const BlogPage = ({ data: { allMdx: { edges } } }) => (
  <main>
    <SEO title="Blog" />
      {edges.map(({ node }) => (
        <Link to={`/blog/${node.meta.slug}`} key={node.id}>{node.meta.title}</Link>
      ))}
  </main>
)

export const pageQuery = graphql`
    query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    meta: frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                    }
                }
            }
        }
    }
`

export default BlogPage
