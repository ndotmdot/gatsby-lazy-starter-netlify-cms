import React from "react"
import { graphql } from "gatsby"
import HomeSlider from "components/HomeSlider/HomeSlider"
import { SEO } from "utilities"
import "scss/styles.scss"

export default ({ data }) => {
  const { home } = data

  return (
    <React.Fragment>
      <SEO title="Arbeiten" lang="de" />
      <HomeSlider data={home} />
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    home: file(relativePath: {eq: "home.md"}) {
      childMarkdownRemark {
        frontmatter {
          slider {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`