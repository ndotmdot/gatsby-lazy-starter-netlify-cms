import React from "react"
import { Link } from "gatsby"

import Layout from 'components/Layout'
import { SEO } from "utilities"

export default ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
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