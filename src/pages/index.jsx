import React from "react"
import { graphql } from "gatsby"

import Layout from 'components/Layout/Layout'
import ProjectGallery from "components/ProjectGallery/ProjectGallery"
import { SEO } from "utilities"
import "scss/styles.scss"

export default ({ data }) => {
  const { gallery } = data

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ProjectGallery data={gallery} />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    gallery: file(relativePath: {eq: "home-gallery.md"}) {
      childMarkdownRemark {
        frontmatter {
          projects {
            title
            images {
              childImageSharp {
                fixed(width: 600) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`