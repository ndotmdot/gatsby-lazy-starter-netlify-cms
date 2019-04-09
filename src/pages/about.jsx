import React from "react"
import { graphql } from "gatsby"
import { SEO } from "utilities"
import { RowFixed } from 'elements'
import Layout from 'components/Layout/Layout'

export default ({ data, location }) => {
  const { description } = data.about.childMarkdownRemark.frontmatter

  return(
    <Layout location={location}>
      <SEO title="About" />
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