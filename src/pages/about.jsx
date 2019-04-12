import React from "react"
import { graphql } from "gatsby"
import { SEO } from "utilities"
import { RowFixed } from 'elements'
import Img from "gatsby-image"

export default ({ data, location }) => {
  const { html } = data.about.childMarkdownRemark;
  const { image } = data.about.childMarkdownRemark.frontmatter

  return(
    <React.Fragment>
      <SEO title="About" />
      <RowFixed>
      <div className="col-sm-3">
      <p>Vita</p>
      </div>
        <div className="col-sm-9 p-large" 
          dangerouslySetInnerHTML={
             {
              "__html": html,
            }
          } 
        />
        </RowFixed>
        <RowFixed>
          <div className="col-sm-3">
            <Img 
              fluid={image.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt=""
            />
          </div>
        </RowFixed>
    </React.Fragment>
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