import React from "react"
import { graphql } from "gatsby"

import Layout from 'components/Layout'
import ProjectGallery from "components/ProjectGallery"
import { SEO } from "utilities"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ProjectGallery />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`