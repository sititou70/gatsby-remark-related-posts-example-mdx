import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={post.frontmatter.title} description={post.excerpt} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <MDXRenderer itemProp="articleBody">{post.body}</MDXRenderer>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <h2>Related Posts</h2>
        <ol>
          {data.relatedMdxs.posts.slice(0, 3).map(x => (
            <li key={x.slug}>
              <Link to={"/" + x.slug}>{x.frontmatter.title}</Link>
            </li>
          ))}
        </ol>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    relatedMdxs(parent: { id: { eq: $id } }) {
      posts {
        frontmatter {
          title
        }
        slug
      }
    }
  }
`
