import React from "react"
import { graphql } from "gatsby"
import { SEO } from "utilities"
import { RowFixed } from 'elements'
import Layout from 'components/Layout/Layout'
import Img from "gatsby-image"

export default ({ data, location }) => {
  const { html } = data;
  const { image } = data.about.childMarkdownRemark.frontmatter

  console.log(html)
  return(
    <Layout location={location}>
      <SEO title="About" />
      <RowFixed>
        <div className="col-3">
          <Img 
            fluid={image.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
        </div>
        <div className="col-9 p-large" dangerouslySetInnerHTML={{ __html: {html} }} />
      </RowFixed>
    </Layout>
  )
}

export const query = graphql`
  query {
    about: file(relativePath: {eq: "about.md"}) {
      childMarkdownRemark {
        frontmatter {
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    } 
  }
`