import React from "react"
import Layout from 'components/Layout/Layout'
import { RowFixed } from 'elements'
import { SEO } from "utilities"
import { graphql } from "gatsby"

export default ({ data, location }) => {
  const { description } = data.about.childMarkdownRemark.frontmatter
  return(
    <Layout location={location}>
      <SEO title="Page two" />
      <RowFixed>
        <div className="col-12">
          <p>{description}</p>
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
          description
        }
      }
    } 
  }
`