import React from "react"
import { graphql } from "gatsby"
import { SEO } from "utilities"
import { RowFixed } from 'elements'
import Layout from 'components/Layout/Layout'

export default ({ data, location }) => {
  const { body } = data.about.childMarkdownRemark.frontmatter

  return(
    <Layout location={location}>
      <SEO title="About" />
      <RowFixed>
        <div className="col-12">
          <p className="p-large">{body}</p>
        </div>
      </RowFixed>
    </Layout>
  )
}

export const query = graphql`
  query {
    about: file(relativePath: {eq: "about.md"}) {
      childMarkdownRemark {
        frontmatter {
          body
          image
        }
      }
    } 
  }
`